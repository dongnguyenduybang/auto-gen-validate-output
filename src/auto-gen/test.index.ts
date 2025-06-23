import fs from 'fs';
import path from 'path';
import 'reflect-metadata';
import inquirer from 'inquirer';
import { genBodyRequest } from './utils/gen-body-request';
import { genTestRequest } from './utils/gen-test-request';
import { execSync } from 'child_process';
import { genTestResponse } from './utils/gen-test-response';
import { genTestSaga } from './utils/gen-test-saga';
import { findTestPath } from './utils/helper';
import { generateAllReports } from './utils/combine-report';

type ActionHandler = (dtoName: string) => Promise<void> | void;

// Interface cho các lựa chọn
interface MainAction {
  name: string;
  value: string;
}

interface SubAction {
  name: string;
  value: string;
}

let recentSelections: RecentSelection[] = [];
const MAX_RECENT_ITEMS = 100;

// Khởi tạo các tham số từ command line
const args = process.argv.slice(2);
let action: string, type: string, dtoName: string, subType: string;
let restArgs: string[] = [];
if (args.length > 0 && !args.includes('--started')) {
  // Chế độ command line cũ
  if (args.length < 2) {
    console.error(
      'Usage: pnpm <action> <type> [dtoName]\nExample: pnpm gen request [UserDTO] or pnpm test request [UserDTO]',
    );
    process.exit(1);
  }

  [action, type, ...restArgs] = args;

  if (type === 'report') {
    [subType, dtoName] = restArgs;
  } else if (type !== 'reports') {
    dtoName = restArgs[0];
  } else {
    dtoName = restArgs[0];
  }
}

const validTypes = ['request', 'response', 'saga', 'report', 'reports', 'ws'];

const actionHandlers: Record<string, Record<string, ActionHandler[]>> = {
  gen: {
    request: [
      async (dto) => {
        console.log(`[GEN BODY] Starting for: ${dto}`);
        try {
          const result = await genBodyRequest(dto);
          return result;
        } catch (e) {
          console.error(`[GEN BODY] Error for ${dto}:`, e);
          throw e;
        }
      },
      async (dto) => {
        console.log(`[GEN TEST] Starting for: ${dto}`);
        try {
          const result = await genTestRequest(dto);
          console.log(`[GEN TEST] Successfully generated spec file for: ${dto}`);
          return result;
        } catch (e) {
          console.error(`[GEN TEST] Error for ${dto}:`, e);
          throw e;
        }
      },
    ],
    response: [(dto) => Promise.resolve(genTestResponse(dto))],
    saga: [(dto) => Promise.resolve(genTestSaga(dto))],
  },
  report: {
    single: [async (dtoName) => {
      console.log(`📊 Generating report for: ${dtoName}`);

      // Normalize path for nested DTOs
      const normalizedDtoName = dtoName.replace(/\//g, '-');
      console.log(normalizedDtoName)
      await generateAllReports(normalizedDtoName);
    }],
    all: [async () => {
      console.log('📊 Generating all reports');
      await generateAllReports();
    }]
  },

  test: {
    request: [runTests('test-requests')],
    response: [runTests('test-responses')],
    saga: [runTests('test-sagas')],
    ws: [runTests('test-ws')],
  },
  clear: {
    request: [clearFiles('test-requests')],
    response: [clearFiles('test-responses')],
    saga: [clearFiles('test-sagas')],
    ws: [clearFiles('test-ws')],
    report: [
      (dto) => {
        const basePath = `test-${subType}s/reports`;
        return clearReports(basePath)(dto);
      },
    ],
  },
};

async function handleBulkAction(basePath: string, handlers: ActionHandler[]) {
  const fullPath = path.join(__dirname, basePath);
  console.log(`Processing bulk action in directory: ${fullPath}`);

  if (handlers[0].name.includes('clearFiles')) {
    console.log(`Initiating recursive clear of all .spec.ts files in: ${fullPath}`);
    await clearAllFilesRecursively(fullPath);
    console.log(`Completed recursive clear in: ${fullPath}`);
    return;
  }

  const directories = getSubDirectories(fullPath).filter(
    (dir) => !dir.includes('reports'),
  );

  console.log(`Found ${directories.length} DTO directories:`, directories);

  for (const dir of directories) {
    console.log(`Processing DTO: ${dir}`);
    for (const handler of handlers) {
      try {
        console.log(`Executing handler for ${dir} with function: ${handler.name || 'anonymous'}`);
        await handler(dir);
        console.log(`Successfully processed ${dir} with handler: ${handler.name || 'anonymous'}`);
      } catch (error) {
        console.error(`Error processing ${dir} with handler: ${error.message}`, error.stack);
      }
    }
  }
}

function getSubDirectories(dirPath: string): string[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() && !dirent.name.toLowerCase().includes('report'),
    )
    .map((dirent) => dirent.name);
}

function runTests(testType: string): ActionHandler {
  return async (dtoName) => {
    console.log(`Running test for ${testType} "${dtoName}"...`);
    try {
      const basePath = path.resolve(__dirname, testType);
      const testPaths = findTestPath(basePath, dtoName);

      if (!testPaths || testPaths.length === 0) {
        console.error(`Test file not found for ${dtoName} in ${basePath}`);
        process.exit(1);
      }

      const normalizedPaths = testPaths
        .map((p) => `"${p.replace(/\\/g, '/')}"`)
        .join(' ');
      execSync(`jest ${normalizedPaths}`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`Test failed for ${dtoName}:`, error.message);
      process.exit(1);
    }
  };
}

function clearFiles(testType: string): ActionHandler {
  const handler = async (dtoName: string) => {
    const baseDir = path.join(__dirname, testType);

    if (!dtoName) {
      console.log(`🧹 Clearing all files in ${baseDir}`);
      await clearAllFilesRecursively(baseDir);
      return;
    }

    const targetDir = path.join(baseDir, dtoName);
    if (!fs.existsSync(targetDir)) {
      console.error(`❌ Directory not found: ${targetDir}`);
      return;
    }

    console.log(`🧹 Cleaning files in ${targetDir}`);
    await clearAllFilesRecursively(targetDir);
  };

  Object.defineProperty(handler, 'name', {
    value: `clearFiles_${testType}`,
    writable: false
  });

  return handler;
}

function clearAllFilesRecursively(dir: string) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      clearAllFilesRecursively(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.spec.ts')) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`🗑️ Deleted: ${fullPath}`);
      } catch (error) {
        console.error(`Failed to delete ${fullPath}: ${error.message}`);
      }
    }
  });
}

function clearReports(reportType: string): ActionHandler {
  return async (dtoName: string) => {
    const targetDir = path.join(__dirname, reportType, dtoName);
    if (!fs.existsSync(targetDir)) {
      console.error(`Report directory not found: ${targetDir}`);
      return;
    }

    fs.readdirSync(targetDir)
      .filter((file) => file.endsWith('.txt'))
      .forEach((file) => {
        const filePath = path.join(targetDir, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
      });
  };
}

function getSubDirectoriesRecursive(dirPath: string, prefix: string = ''): { name: string, value: string }[] {
  const result: { name: string, value: string }[] = [];
  if (!fs.existsSync(dirPath)) {
    return result;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.toLowerCase().includes('report')) {
      const fullPath = path.join(dirPath, entry.name);
      const displayName = prefix ? `${prefix}/${entry.name}` : entry.name;
      result.push({ name: displayName, value: displayName });
      // Recursively get subdirectories
      const subDirs = getSubDirectoriesRecursive(fullPath, displayName);
      result.push(...subDirs);
    }
  }

  return result;
}

interface RecentSelection {
  action: string;
  type: string;
  paths: string[];
  timestamp: number;
}

async function interactiveCLI() {
  console.log('🚀 Auto-Gen Validate CLI Tool');
  console.log('=============================\n');

  while (true) {
    // Create main menu with Recent option if available
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
        // Let user select DTO for report
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


    // Handle recent selection
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

      // Update timestamp and sort
      recentSelections[selectedRecent].timestamp = Date.now();
      recentSelections.sort((a, b) => b.timestamp - a.timestamp);
      continue;
    }

    // Enhanced quick test functionality
    if (action === 'test' && recentSelections.length > 0) {
      // Get last 5 generation actions
      const recentGenItems = recentSelections
        .filter(item => item.action === 'gen')
        .slice(0, 5);

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
          // Combine all paths from recent generations
          const allPaths = recentGenItems.flatMap(item => item.paths);
          console.log(`\n🔍 Testing all recently generated items (${allPaths.length}):`);
          allPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

          await executeAction('test', 'request', allPaths);

          // Add to recent selections
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

          // Add to recent selections
          addToRecentSelections({
            action: 'test',
            type: selectedItem.type,
            paths: selectedItem.paths,
            timestamp: Date.now()
          });
          continue;
        }
        // Continue with manual selection if 'manual' was chosen
      }
    }

    // File type selection
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

    // Clear action special handling
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

    // Folder selection
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

    // Add to recent selections
    addToRecentSelections({
      action,
      type,
      paths: selectedPaths,
      timestamp: Date.now()
    });
  }
}

// Helper function to format paths for display
function formatPaths(paths: string[]): string {
  if (paths.length === 0) return '';
  if (paths.length === 1) return paths[0];
  if (paths.length <= 3) return paths.join(', ');
  return `${paths[0]} +${paths.length - 1} more`;
}

// Helper function to add to recent selections
function addToRecentSelections(item: RecentSelection) {
  recentSelections.unshift(item);
  if (recentSelections.length > MAX_RECENT_ITEMS) {
    recentSelections.pop();
  }
}

async function executeAction(action: string, type: string, paths: string[]) {
  console.log(`\n📌 Starting ${action} ${type} for ${paths.length} items:`);
  console.log('----------------------------------------');

  // Hiển thị toàn bộ danh sách paths
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

  // Tổng kết kết quả
  console.log('\n📊 Processing Summary:');
  console.log('----------------------------------------');
  results.forEach((result, index) => {
    const status = result.success ? '✅' : '❌';
    console.log(`${index + 1}. ${status} ${result.path}`);
    if (!result.success) {
      console.log(`   Error: ${result.error}`);
    }
  });

  const successCount = results.filter(r => r.success).length;
  console.log('\n🎉 Completed!');
  console.log(`✔ Success: ${successCount}/${paths.length}`);
  console.log(`✖ Failed: ${paths.length - successCount}/${paths.length}`);
}

async function selectFoldersRecursive(): Promise<string[]> {
  const selectedPaths: string[] = [];
  let currentPath = '';
  let basePath = '';

  while (true) {
    const fullPath = path.join(__dirname, 'test-requests', basePath, currentPath);
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

    // Xử lý lựa chọn
    if (selectedOptions.includes('__CURRENT__')) {
      if (!selectedPaths.includes(currentFullPath)) {
        selectedPaths.push(currentFullPath);
      }
    } else {
      selectedPaths.splice(selectedPaths.indexOf(currentFullPath), 1);
    }

    // Xử lý các thư mục con
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
        return []; // Quay lại menu chính
      }
      const parentPath = path.dirname(basePath);
      currentPath = path.basename(basePath);
      basePath = parentPath;
      continue;
    }

    // Đi sâu vào thư mục được chọn
    const nextFolder = selectedOptions.find(opt =>
      !['__CURRENT__', '__CONFIRM__', '__BACK__'].includes(opt)
    );

    if (nextFolder) {
      basePath = path.join(basePath, currentPath);
      currentPath = nextFolder;
    }
  }
}

async function main() {
  if (process.argv.includes('--started') || process.argv.length <= 2) {
    await interactiveCLI();
    return;
  }

  console.log(`Processing "${type}${subType ? ` ${subType}` : ''}"${dtoName ? ` for: ${dtoName}` : ''}`);

  try {
    const handlers = actionHandlers[action]?.[type];
    if (!handlers) throw new Error('Action invalid');

    let selectedDTOs: string[] = [];

    if (!dtoName && (action === 'gen' || action === 'test') && type === 'request') {
      const requestDir = path.join(__dirname, './test-requests');
      selectedDTOs = getSubDirectories(requestDir);
    } else if (action === 'clear' && !dtoName) {
      const basePath = `test-${type === 'report' ? subType : type}s`;
      await handleBulkAction(basePath, handlers);
      return;
    } else if (dtoName) {
      selectedDTOs = [dtoName];
    } else {
      throw new Error('Missing dtoName parameter');
    }

    for (const dto of selectedDTOs) {
      console.log(`\n🚀 Starting processing for: ${dto}`);
      for (const handler of handlers) {
        try {
          await handler(dto);
          console.log(`✅ Handler completed successfully for ${dto}`);
        } catch (error) {
          console.error(`❌ Handler failed for ${dto}:`, error.message);
        }
      }
    }

    console.log('\n🎉 All selected DTOs processed successfully!');
  } catch (error) {
    console.error('⛔ Critical error:', error.message);
    process.exit(1);
  }
}

main();