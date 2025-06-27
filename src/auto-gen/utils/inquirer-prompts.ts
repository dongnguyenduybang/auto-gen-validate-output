import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { RecentSelection } from './declarations';
import { actionHandlers } from '../test.index';
import { normalizePathForReport, transformPropertyName } from './helper';

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
                        { name: 'View', value: 'view' },
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
            } else if (reportType === 'view') {
                const selectedPaths = await selectFoldersRecursive(true);
                if (selectedPaths.length === 0) continue;
                console.log(`\n📋 Selected ${selectedPaths.length} items for view report:`);
                selectedPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

                const { confirm } = await inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'confirm',
                        message: `View reports for these DTOs?`,
                        default: true
                    }
                ]);

                if (confirm) {
                    await executeAction('report', 'view', selectedPaths);
                    addToRecentSelections({
                        action: 'report',
                        type: 'view',
                        paths: selectedPaths,
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
                if (action === 'report' && type !== 'view') {
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
                        const normalizedPath = normalizePathForReport(path)
                        const lastPart = normalizedPath.split(/[/\\]/).pop();
                        await actionHandlers.report.single[0](lastPart);

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

function transformDtoName(dtoName) {
    const words = dtoName.split('-');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return `V3${capitalizedWords.join('')}Request`;
}

function validateDtoName(dtoName) {
    const schemaPath = path.join(__dirname, '../swagger/schemas.json');
    try {
        const fileContent = fs.readFileSync(schemaPath, 'utf-8');
        const schema = JSON.parse(fileContent);
        const transformedName = transformDtoName(dtoName);

        if (schema[transformedName]) {
            return { status: true, data: schema[transformedName] };
        }
        return { status: false, data: `DTO name '${transformedName}' not found in schema.` };
    } catch (error) {
        return { status: false, data: `Error reading schema: ${error.message}` };
    }
}

async function selectFoldersRecursive(isReport = false) {
    const selectedPaths = [];
    let currentPath = '';
    let basePath = '';
    let fullPath;

    while (true) {
        if (isReport) {
            fullPath = path.join(__dirname, '../test-requests', '.reports', basePath, currentPath);
        } else {
            fullPath = path.join(__dirname, '../test-requests', basePath, currentPath);
        }

        try {
            const entries = fs.readdirSync(fullPath, { withFileTypes: true });

            const items = entries
                .filter(entry => {
                    if (entry.isDirectory()) return true;
                    if (isReport && entry.isFile() && entry.name.endsWith('.md')) return true;
                    return false;
                })
                .map(entry => ({
                    name: entry.name,
                    value: entry.name,
                    checked: selectedPaths.includes(path.join(basePath, currentPath, entry.name)),
                }));

            const currentFullPath = path.join(basePath, currentPath);
            const isCurrentSelected = selectedPaths.includes(currentFullPath) && currentFullPath !== '';

            const { selectedOptions } = await inquirer.prompt([
                {
                    type: 'checkbox',
                    name: 'selectedOptions',
                    message: `Select items in ${currentPath || 'root'}:`,
                    choices: [
                        ...(currentPath !== ''
                            ? [
                                {
                                    name: `📁 ${isCurrentSelected ? '✓ ' : ''}[SELECT CURRENT] ${currentPath}`,
                                    value: '__CURRENT__',
                                    checked: isCurrentSelected,
                                },
                            ]
                            : []),
                        ...items.map(item => ({
                            ...item,
                            name: `${item.name.endsWith('.md') ? '📄' : '📂'} ${selectedPaths.includes(path.join(basePath, currentPath, item.value)) ? '✓ ' : ''
                                }${item.name}`,
                        })),
                        new inquirer.Separator(),
                        // { name: '✅ Create', value: '__CREATE__' },
                        { name: '✅ Confirm selection', value: '__CONFIRM__' },
                        { name: '↩ Back', value: '__BACK__' },
                    ],
                    pageSize: 20,
                },
            ]);

            if (selectedOptions.includes('__CURRENT__')) {
                if (!selectedPaths.includes(currentFullPath)) {
                    selectedPaths.push(currentFullPath);
                }
            } else {
                const index = selectedPaths.indexOf(currentFullPath);
                if (index !== -1) {
                    selectedPaths.splice(index, 1);
                }
            }

            if (selectedOptions.includes('__CREATE__')) {
                let dataDTO;
                let dtoFields: { field: string; decorators: string[] }[] = [];
                const { dtoName, requestType } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'dtoName',
                        message: 'Enter DTO name (e.g., create-channel):',
                        validate: async (input: string) => {
                            if (!input) return 'DTO name is required.';
                            if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
                                return 'DTO name can only contain letters, numbers, hyphens, and underscores.';
                            }
                            const result = validateDtoName(input);
                            if (result.status) {
                                dataDTO = result.data;
                                return true;
                            }
                            return result.data as string;
                        },
                    },
                    {
                        type: 'list',
                        name: 'requestType',
                        message: 'Select request type:',
                        choices: ['DTO', 'Response', 'Saga', 'WS'],
                        default: 'DTO',
                    },
                ]);

                while (true) {
                    const { dto, decorators, continueAdding } = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'dto',
                            message: 'Select a DTO field for decorator definition:',
                            choices: () => {
                                const choices = transformPropertyName(dataDTO);
                                if (choices.length === 0) {
                                    throw new Error('No properties found for the selected DTO.');
                                }
                                return [
                                    ...choices,
                                    new inquirer.Separator(),
                                    { name: '✅ Confirm selection', value: '__CONFIRM__' },
                                ];
                            },
                            default: () => {
                                const choices = transformPropertyName(dataDTO);
                                return choices.length > 0 ? choices[0] : null;
                            },
                        },
                        {
                            type: 'checkbox',
                            name: 'decorators',
                            message: (answers: any) => `Select decorators for the field '${answers.dto}':`,
                            choices: (answers: any) => {
                                if (answers.dto === '__CONFIRM__') return [];
                                // return getDecoratorChoices(dataDTO.properties[answers.dto]);
                            },
                            validate: (input) => {
                                if (!input || input.length === 0) {
                                    return 'At least one decorator must be selected.';
                                }
                                return true;
                            },
                            when: (answers) => answers.dto !== '__CONFIRM__',
                        },
                        {
                            type: 'confirm',
                            name: 'continueAdding',
                            message: 'Add another field to this DTO?',
                            default: true,
                            when: (answers: any) => answers.dto !== '__CONFIRM__',
                        },
                    ] as any);

                    if (dto === '__CONFIRM__') {
                        break;
                    }

                    dtoFields.push({ field: dto, decorators });

                    if (!continueAdding) {
                        break;
                    }
                }

                console.log(
                    `DTO Created: ${dtoName}, Type: ${requestType}, Fields: ${JSON.stringify(
                        dtoFields.map(f => ({ [f.field]: f.decorators })),
                        null,
                        2
                    )}`
                );
                continue;
            }

            items.forEach(item => {
                const itemPath = path.join(basePath, currentPath, item.value);
                if (selectedOptions.includes(item.value)) {
                    if (!selectedPaths.includes(itemPath)) {
                        selectedPaths.push(itemPath);
                    }
                } else {
                    const index = selectedPaths.indexOf(itemPath);
                    if (index !== -1) {
                        selectedPaths.splice(index, 1);
                    }
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

            const nextItem = selectedOptions.find(opt =>
                !['__CURRENT__', '__CREATE__', '__CONFIRM__', '__BACK__'].includes(opt)
            );

            if (nextItem) {
                const nextItemPath = path.join(fullPath, nextItem);
                if (fs.statSync(nextItemPath).isDirectory()) {
                    basePath = path.join(basePath, currentPath);
                    currentPath = nextItem;
                }
            }
        } catch (error) {
            console.error(`Error reading directory: ${error.message}`);
            return [];
        }
    }
}