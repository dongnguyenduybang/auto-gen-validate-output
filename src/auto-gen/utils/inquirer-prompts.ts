import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { RecentSelection } from './declarations';
import { actionHandlers } from '../test.index';

let recentSelections: RecentSelection[] = [];
const MAX_RECENT_ITEMS = 100;

export async function interactiveCLI() {
    console.log('🚀 Auto-gen CLI');
    console.log('=============================\n');

    while (true) {

        const mainChoices = [
            { name: 'Generate files', value: 'gen' },
            { name: 'Run tests', value: 'test' },
            { name: 'Reports', value: 'report' },
            { name: 'Clear files', value: 'clear' }
        ];

        if (recentSelections.length > 0) {
            mainChoices.unshift({
                name: `🕒 Recent selections (${recentSelections.length})`,
                value: 'recent'
            });
        }

        mainChoices.push({ name: 'Exit', value: 'exit' });

        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select action:',
                choices: mainChoices,
            }
        ]);

        if (action === 'exit') {
            console.log('👋 Goodbye!');
            process.exit(0);
        }

        if (action === 'report') {
            const { reportType } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'reportType',
                    message: 'Select report type:',
                    choices: [
                        { name: 'Generate report for specific DTO', value: 'single' },
                        { name: 'Generate all reports', value: 'all' },
                        { name: 'Back to main menu', value: 'back' }
                    ],
                }
            ]);

            if (reportType === 'back') continue;

            if (reportType === 'single') {
                const selectedPaths = await selectFoldersRecursive();
                if (selectedPaths.length === 0) continue;

                console.log(`\n📋 Selected ${selectedPaths.length} items for report generation:`);
                selectedPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

                const { confirm } = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: `Generate reports for these DTOs?`,
                        default: true
                    }
                ]);

                if (confirm) {
                    await executeAction('report', 'single', selectedPaths);
                    addToRecentSelections({
                        action: 'report',
                        type: 'single',
                        paths: selectedPaths,
                        timestamp: Date.now()
                    });
                }
            } else if (reportType === 'all') {
                const { confirm } = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: 'Generate reports for ALL DTOs?',
                        default: false
                    }
                ]);

                if (confirm) {
                    await actionHandlers.report.all[0]('');
                    addToRecentSelections({
                        action: 'report',
                        type: 'all',
                        paths: ['ALL'],
                        timestamp: Date.now()
                    });
                }
            }
            continue;
        }

        if (action === 'recent') {
            const { selectedRecent } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'selectedRecent',
                    message: 'Select recent action to repeat:',
                    choices: [
                        ...recentSelections.map((item, index) => ({
                            name: `[${index + 1}] ${item.action.padEnd(6)} ${item.type.padEnd(8)} ${formatPaths(item.paths)}`,
                            value: index
                        })),
                        new inquirer.Separator(),
                        { name: 'Back to main menu', value: -1 }
                    ],
                    pageSize: 10
                }
            ]);

            if (selectedRecent === -1) continue;

            const selected = recentSelections[selectedRecent];
            await executeAction(selected.action, selected.type, selected.paths);

            recentSelections[selectedRecent].timestamp = Date.now();
            recentSelections.sort((a, b) => b.timestamp - a.timestamp);
            continue;
        }

        if (action === 'test' && recentSelections.length > 0) {

            const recentGenItems = recentSelections
                .filter(item => item.action === 'gen')
                .slice(0, MAX_RECENT_ITEMS);

            if (recentGenItems.length > 0) {
                const { quickTestChoice } = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'quickTestChoice',
                        message: 'Select items to test:',
                        choices: [
                            ...recentGenItems.map((item, index) => ({
                                name: `[${index + 1}] ${item.type.padEnd(8)} ${formatPaths(item.paths)}`,
                                value: index,
                            })),
                            new inquirer.Separator(),
                            { name: 'Test all recent generated items', value: 'all' },
                            { name: 'Manual selection', value: 'manual' }
                        ],
                        pageSize: 10
                    }
                ]);

                if (quickTestChoice === 'all') {
                    const allPaths = recentGenItems.flatMap(item => item.paths);
                    console.log(`\n🔍 Testing all recently generated items (${allPaths.length}):`);
                    allPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

                    await executeAction('test', 'request', allPaths);

                    addToRecentSelections({
                        action: 'test',
                        type: 'request',
                        paths: allPaths,
                        timestamp: Date.now()
                    });
                    continue;
                }
                else if (quickTestChoice !== 'manual') {
                    const selectedItem = recentGenItems[quickTestChoice];
                    console.log(`\n🔍 Testing selected items (${selectedItem.paths.length}):`);
                    selectedItem.paths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

                    await executeAction('test', selectedItem.type, selectedItem.paths);

                    addToRecentSelections({
                        action: 'test',
                        type: selectedItem.type,
                        paths: selectedItem.paths,
                        timestamp: Date.now()
                    });
                    continue;
                }
            }
        }

        const { type } = await inquirer.prompt([
            {
                type: 'list',
                name: 'type',
                message: 'Select file type:',
                choices: [
                    { name: 'Request', value: 'request' },
                    { name: 'Response', value: 'response' },
                    { name: 'Saga', value: 'saga' },
                    { name: 'WebSocket', value: 'ws' },
                    { name: 'Back to main menu', value: 'back' }
                ],
            }
        ]);

        if (type === 'back') continue;

        if (action === 'clear') {
            const { scope } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'scope',
                    message: 'Select clear scope:',
                    choices: [
                        { name: 'Clear all', value: 'all' },
                        { name: 'Clear by DTO', value: 'dto' },
                        { name: 'Back', value: 'back' }
                    ],
                }
            ]);

            if (scope === 'back') continue;

            if (scope === 'all') {
                console.log(`🧹 Clearing all ${type} files...`);
                await actionHandlers.clear[type][0]('');
                console.log('✅ Done!');

                addToRecentSelections({
                    action: 'clear',
                    type,
                    paths: ['ALL'],
                    timestamp: Date.now()
                });
                continue;
            }
        }

        const selectedPaths = await selectFoldersRecursive();

        if (selectedPaths.length === 0) {
            continue;
        }

        console.log(`\n📋 Selected ${selectedPaths.length} items:`);
        selectedPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

        const { confirm } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirm',
                message: `Proceed with ${action} ${type}?`,
                default: true
            }
        ]);

        if (!confirm) {
            continue;
        }

        await executeAction(action, type, selectedPaths);

        addToRecentSelections({
            action,
            type,
            paths: selectedPaths,
            timestamp: Date.now()
        });
    }
}

function formatPaths(paths: string[]): string {
    if (paths.length === 0) return '';
    if (paths.length === 1) return paths[0];
    if (paths.length <= 3) return paths.join(', ');
    return `${paths[0]} +${paths.length - 1} more`;
}

function addToRecentSelections(item: RecentSelection) {
    recentSelections.unshift(item);
    if (recentSelections.length > MAX_RECENT_ITEMS) {
        recentSelections.pop();
    }
}

export async function executeAction(action: string, type: string, paths: string[]) {
    console.log(`\n📌 Starting ${action} ${type} for ${paths.length} items:`);
    console.log('----------------------------------------');

    paths.forEach((path, index) => {
        console.log(`${index + 1}. ${path}`);
    });

    console.log('----------------------------------------');

    const results: { path: string; success: boolean; error?: string }[] = [];

    for (const path of paths) {
        try {
            console.log(`\n🔄 Processing: ${path}`);
            for (const handler of actionHandlers[action][type]) {
                let finalPath = path;

                if (action === 'report') {
                    finalPath = path.split(/[/\\]/).pop();
                }

                await handler(finalPath);
            }
            console.log(`✅ Success: ${path}`);
            results.push({ path, success: true });
            if (action === 'test') {
                const { generateReport } = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'generateReport',
                        message: `Generate test report for ${path}?`,
                        default: true
                    }
                ]);

                if (generateReport) {
                    try {
                        const normalizedPath = path.replace(/\//g, '-');
                        const lastPart = normalizedPath.split(/[/\\]/).pop();
                        await actionHandlers.report.single[0](lastPart);

                        console.log(`📝 Report generated successfully for ${path}`);
                    } catch (error) {
                        console.error(`❌ Failed to generate report for ${path}:`, error.message);
                    }
                }
            }
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            console.error(`❌ Failed: ${path} - ${errorMsg}`);
            results.push({ path, success: false, error: errorMsg });
        }
    }
}

async function selectFoldersRecursive(): Promise<string[]> {
    const selectedPaths: string[] = [];
    let currentPath = '';
    let basePath = '';

    while (true) {
        const fullPath = path.join(__dirname, '../test-requests', basePath, currentPath);
        const entries = fs.readdirSync(fullPath, { withFileTypes: true });

        const folders = entries
            .filter(entry => entry.isDirectory())
            .map(entry => ({
                name: entry.name,
                value: entry.name,
                checked: selectedPaths.includes(path.join(basePath, currentPath, entry.name))
            }));

        const currentFullPath = path.join(basePath, currentPath);
        const isCurrentSelected = selectedPaths.includes(currentFullPath) && currentFullPath !== '';

        const { selectedOptions } = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'selectedOptions',
                message: `Select folders in ${currentPath || 'root'}:`,
                choices: [
                    ...(currentPath !== '' ? [{
                        name: `📁 ${isCurrentSelected ? '✓ ' : ''}[SELECT CURRENT] ${currentPath}`,
                        value: '__CURRENT__',
                        checked: isCurrentSelected
                    }] : []),
                    ...folders.map(folder => ({
                        ...folder,
                        name: `📂 ${selectedPaths.includes(path.join(basePath, currentPath, folder.value)) ? '✓ ' : ''}${folder.name}`
                    })),
                    new inquirer.Separator(),
                    { name: '✅ Confirm selection', value: '__CONFIRM__' },
                    { name: '↩ Back', value: '__BACK__' }
                ],
                pageSize: 20
            }
        ]);

        if (selectedOptions.includes('__CURRENT__')) {
            if (!selectedPaths.includes(currentFullPath)) {
                selectedPaths.push(currentFullPath);
            }
        } else {
            selectedPaths.splice(selectedPaths.indexOf(currentFullPath), 1);
        }

        folders.forEach(folder => {
            const folderPath = path.join(basePath, currentPath, folder.value);
            if (selectedOptions.includes(folder.value)) {
                if (!selectedPaths.includes(folderPath)) {
                    selectedPaths.push(folderPath);
                }
            } else {
                selectedPaths.splice(selectedPaths.indexOf(folderPath), 1);
            }
        });

        if (selectedOptions.includes('__CONFIRM__')) {
            return selectedPaths.filter(f => f !== '');
        }

        if (selectedOptions.includes('__BACK__')) {
            if (!basePath) {
                return [];
            }
            const parentPath = path.dirname(basePath);
            currentPath = path.basename(basePath);
            basePath = parentPath;
            continue;
        }

        const nextFolder = selectedOptions.find(opt =>
            !['__CURRENT__', '__CONFIRM__', '__BACK__'].includes(opt)
        );

        if (nextFolder) {
            basePath = path.join(basePath, currentPath);
            currentPath = nextFolder;
        }
    }
}