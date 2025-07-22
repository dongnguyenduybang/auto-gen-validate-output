import inquirer from 'inquirer';
import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { actionHandlers } from '../test.index';
import { mapOption } from './k6-help';
import { normalizePath } from '../helpers/path-utils';
import { searchDtoInTestRequests } from '../helpers/fs-helpers';
import { addToRecentSelections, validateDtoName } from '../helpers/file-matching';
import { MAX_RECENT_ITEMS, recentSelections, REPORT_LENGTH } from '../types/const';
import { formatPaths } from '../helpers/format-helper';

export async function interactiveCLI(): Promise<void> {
  console.log('🚀 Auto-gen CLI');
  console.log('=============================\n');

  while (true) {
    const mainChoices: { name: string; value: string }[] = [
      { name: 'Generate files', value: 'gen' },
      { name: 'Run tests', value: 'test' },
      { name: 'Reports', value: 'report' },
      { name: 'Clear files', value: 'clear' },
    ];

    if (recentSelections.length > 0) {
      mainChoices.unshift({
        name: `🕒 Recent selections (${recentSelections.length})`,
        value: 'recent',
      });
    }

    mainChoices.push({ name: 'Exit', value: 'exit' });

    const { action } = await inquirer.prompt<{ action: string }>([
      {
        type: 'list',
        name: 'action',
        message: 'Select action:',
        choices: mainChoices,
      },
    ]);

    if (action === 'exit') {
      console.log('👋 Goodbye!');
      process.exit(0);
    }

    if (action === 'report') {
      const { reportType } = await inquirer.prompt<{ reportType: string }>([
        {
          type: 'list',
          name: 'reportType',
          message: 'Select report type:',
          choices: [
            { name: 'Generate report for specific DTO', value: 'single' },
            { name: 'Generate all reports', value: 'all' },
            { name: 'View', value: 'view' },
            { name: 'Back to main menu', value: 'back' },
          ],
        },
      ]);

      if (reportType === 'back') continue;

      if (reportType === 'single') {
        const selectedPaths = await selectFoldersRecursive(true);
        if (selectedPaths.length === 0) continue;

        console.log(
          `\n📋 Selected ${selectedPaths.length} items for report generation:`,
        );
        selectedPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

        const { confirm } = await inquirer.prompt<{ confirm: boolean }>([
          {
            type: 'confirm',
            name: 'confirm',
            message: `Generate reports for these DTOs?`,
            default: true,
          },
        ]);

        if (confirm) {
          await executeAction('report', 'single', selectedPaths);
          addToRecentSelections({
            action: 'report',
            type: 'single',
            paths: selectedPaths,
            timestamp: Date.now(),
          }, recentSelections);
        }
      } else if (reportType === 'all') {
        const { confirm } = await inquirer.prompt<{ confirm: boolean }>([
          {
            type: 'confirm',
            name: 'confirm',
            message: 'Generate reports for ALL DTOs?',
            default: false,
          },
        ]);

        if (confirm) {
          await actionHandlers.report.all[0]('');
          addToRecentSelections({
            action: 'report',
            type: 'all',
            paths: ['ALL'],
            timestamp: Date.now(),
          }, recentSelections);
        }
      } else if (reportType === 'view') {
        const selectedPaths = await selectFoldersRecursive(true);
        if (selectedPaths.length === 0) continue;
        console.log(
          `\n📋 Selected ${selectedPaths.length} items for view report:`,
        );
        selectedPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

        const { confirm } = await inquirer.prompt<{ confirm: boolean }>([
          {
            type: 'confirm',
            name: 'confirm',
            message: `View reports for these DTOs?`,
            default: true,
          },
        ]);

        if (confirm) {
          await executeAction('report', 'view', selectedPaths);
          addToRecentSelections({
            action: 'report',
            type: 'view',
            paths: selectedPaths,
            timestamp: Date.now(),
          }, recentSelections);
        }
      }
      continue;
    }

    if (action === 'recent') {
      const { selectedRecent } = await inquirer.prompt<{
        selectedRecent: number;
      }>([
        {
          type: 'list',
          name: 'selectedRecent',
          message: 'Select recent action to repeat:',
          choices: [
            ...recentSelections.map((item, index) => ({
              name: `[${index + 1}] ${item.action.padEnd(6)} ${item.type.padEnd(8)} ${formatPaths(item.paths)}`,
              value: index,
            })),
            new inquirer.Separator(),
            { name: 'Back to main menu', value: -1 },
          ],
          pageSize: 10,
        },
      ]);

      if (selectedRecent === -1) continue;

      const selected = recentSelections[selectedRecent];
      await executeAction(selected.action, selected.type, selected.paths);

      recentSelections[selectedRecent].timestamp = Date.now();
      recentSelections.sort((a, b) => b.timestamp - a.timestamp);
      continue;
    }

    if (action === 'test') {
      const recentGenItems = recentSelections
        .filter((item) => item.action === 'gen')
        .slice(0, MAX_RECENT_ITEMS);

      const choices = [
        ...recentGenItems.map((item, index) => ({
          name: `[${index + 1}] ${item.type.padEnd(8)} ${formatPaths(item.paths)}`,
          value: index,
        })),
        new inquirer.Separator(),
        { name: 'Test all recent generated items', value: 'all' },
        { name: 'Test with k6', value: 'k6' },
        { name: 'Manual selection', value: 'manual' },
      ];

      const { quickTestChoice } = await inquirer.prompt<{
        quickTestChoice: string | number;
      }>([
        {
          type: 'list',
          name: 'quickTestChoice',
          message: 'Select items to test:',
          choices:
            recentGenItems.length > 0
              ? choices
              : [
                { name: 'Test with k6', value: 'k6' },
                { name: 'Manual selection', value: 'manual' },
              ],
          pageSize: 10,
        },
      ]);

      if (quickTestChoice === 'all') {
        const allPaths = recentGenItems.flatMap((item) => item.paths);
        console.log(
          `\n🔍 Testing all recently generated items (${allPaths.length}):`,
        );
        allPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

        await executeAction('test', 'request', allPaths);

        addToRecentSelections({
          action: 'test',
          type: 'request',
          paths: allPaths,
          timestamp: Date.now(),
        }, recentSelections);
        continue;
      } else if (quickTestChoice === 'k6') {
        // Xử lý Test with k6
        const selectedPayloads = await selectFoldersRecursive(false);
        if (selectedPayloads.length === 0) {
          console.log('No payload file selected.');
          continue;
        }
        const payloadPath = selectedPayloads[0]; // Chỉ lấy file đầu tiên

        const {
          k6ScriptPath,
          vus,
          executor,
          stages,
          thresholds,
          gracefulRampDown,
          iterations,
        } = await inquirer.prompt([
          {
            type: 'input',
            name: 'k6ScriptPath',
            message: 'Enter path to k6 script:',
            default: 'C:/Users/duy/Documents/k6-studio/Scripts/',
            validate: (input) => {
              try {
                fs.accessSync(input, fs.constants.R_OK);
                return true;
              } catch {
                return 'Invalid or inaccessible k6 script path';
              }
            },
          },
          {
            type: 'input',
            name: 'executor',
            message:
              'Enter executor(per-vu-iterations, constant-vus, ramping-vus):',
            // validate: (input) => {
            //   return !input || /^\d+$/.test(input) ? true : 'VUs must be a number';
            // },
            default: 'per-vu-iterations'
          },
          {
            type: 'input',
            name: 'vus',
            message: 'Enter number of virtual users (vus):',
            default: '1',
            validate: (input) => {
              return !input || /^\d+$/.test(input)
                ? true
                : 'VUs must be a number';
            },
          },
          {
            type: 'input',
            name: 'iterations',
            message: 'Enter number of iterations (1):',
            default: '1',
            validate: (input) => {
              return !input || /^\d+$/.test(input)
                ? true
                : 'Iterations must be a number';
            },
          },
          {
            type: 'input',
            name: 'stages',
            message:
              'Enter stages (e.g., [{duration:"10s",target:10},{duration:"10s",target:0}]):',
            default: '',
            validate: (input) => {
              if (!input) return true;
              try {
                JSON.parse(input);
                return true;
              } catch {
                return 'Stages must be a valid JSON array';
              }
            },
          },
          {
            type: 'input',
            name: 'thresholds',
            message:
              'Enter thresholds (e.g., {"http_req_duration":"p(95)<700"}):',
            default: `{ "http_req_duration": ["p(95)<500"],
                  "passed_tests": ["count>=1"],
                  "failed_tests": ["count<2"]
              }`,
            // validate: (input) => {
            //   if (!input) return true;
            //   try {
            //     JSON.parse(input);
            //     return true;
            //   } catch {
            //     return 'Thresholds must be a valid JSON object';
            //   }
            // },
          },
          {
            type: 'input',
            name: 'gracefulRampDown',
            message: 'Enter gracefulRampDown (30s):',
            // validate: (input) => {
            //   return !input || /^\d+$/.test(input) ? true : 'VUs must be a number';
            // },
            default: '30s'
          },
        ]);

        console.log(
          `\n🔍 Running k6 tests with payload: ${payloadPath} and script: ${k6ScriptPath}`,
        );

        try {
          const folderName = path.basename(payloadPath);
          const targetDir = path.join(
            'C:/Users/duy/Documents/k6-studio/Scripts',
            folderName,
          );

          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
            console.log(`Đã tạo folder: ${targetDir}`);
          } else {
            console.log(`Folder đã tồn tại: ${targetDir}`);
          }

          const commonDir = path.join(targetDir, 'common');
          if (!fs.existsSync(commonDir)) {
            fs.mkdirSync(commonDir, { recursive: true });
            console.log(`Đã tạo folder common: ${commonDir}`);
          } else {
            console.log(`Folder common đã tồn tại: ${commonDir}`);
          }

          // Bước 7: Ghi file options.js
          const optionsPath = path.join(commonDir, 'options.k6.json');
          const optionsContent = mapOption(
            vus,
            executor,
            stages,
            thresholds,
            gracefulRampDown,
            iterations,
          );
          fs.writeFileSync(optionsPath, optionsContent, 'utf8');
          console.log(`Đã ghi file options.js tại: ${optionsPath}`);

          await executeAction(action, 'k6', [targetDir]);

          addToRecentSelections({
            action: 'test',
            type: 'k6',
            paths: [payloadPath, k6ScriptPath],
            timestamp: Date.now(),
          }, recentSelections);
        } catch (error) {
          console.error('❌ Error running k6 tests:', error.message);
        }
        continue;
      } else if (quickTestChoice !== 'manual') {
        const selectedItem = recentGenItems[quickTestChoice];
        console.log(
          `\n🔍 Testing selected items (${selectedItem.paths.length}):`,
        );
        selectedItem.paths.forEach((path, i) =>
          console.log(` ${i + 1}. ${path}`),
        );

        await executeAction('test', selectedItem.type, selectedItem.paths);

        addToRecentSelections({
          action: 'test',
          type: selectedItem.type,
          paths: selectedItem.paths,
          timestamp: Date.now(),
        }, recentSelections);
        continue;
      }
    }

    const { type } = await inquirer.prompt<{ type: string }>([
      {
        type: 'list',
        name: 'type',
        message: 'Select file type:',
        choices: [
          { name: 'Request', value: 'request' },
          { name: 'Response', value: 'response' },
          { name: 'Saga', value: 'saga' },
          { name: 'WebSocket', value: 'ws' },
          { name: 'Back to main menu', value: 'back' },
        ],
      },
    ]);

    if (type === 'back') continue;

    if (action === 'clear') {
      const { scope } = await inquirer.prompt<{ scope: string }>([
        {
          type: 'list',
          name: 'scope',
          message: 'Select clear scope:',
          choices: [
            { name: 'Clear all', value: 'all' },
            { name: 'Clear by DTO', value: 'dto' },
            { name: 'Back', value: 'back' },
          ],
        },
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
          timestamp: Date.now(),
        }, recentSelections);
        continue;
      }
    }

    const selectedPaths = await selectFoldersRecursive(false, type);
    if (selectedPaths.length === 0) {
      continue;
    }

    console.log(`\n📋 Selected ${selectedPaths.length} items:`);
    selectedPaths.forEach((path, i) => console.log(` ${i + 1}. ${path}`));

    const { confirm } = await inquirer.prompt<{ confirm: boolean }>([
      {
        type: 'confirm',
        name: 'confirm',
        message: `Proceed with ${action} ${type}?`,
        default: true,
      },
    ]);

    if (!confirm) {
      continue;
    }

    await executeAction(action, type, selectedPaths);

    addToRecentSelections({
      action,
      type,
      paths: selectedPaths,
      timestamp: Date.now(),
    }, recentSelections);
  }
}

export async function executeAction(
  action: string,
  type: string,
  filePaths: string[],
): Promise<{ path: string; success: boolean; error?: string }[]> {
  console.log(`\n📌 Starting ${action} ${type} for ${filePaths.length} items:`);
  console.log('----------------------------------------');

  filePaths.forEach((filePath, index) => {
    console.log(`${index + 1}. ${filePath}`);
  });

  console.log('----------------------------------------');

  const results: { path: string; success: boolean; error?: string }[] = [];

  if (action === 'test' && type !== 'k6') {
    try {
      const normalizedPaths = filePaths.map((filePath) =>
        normalizePath(filePath),
      );
      const successfulTests = (await actionHandlers.test[type][0](
        normalizedPaths,
      )) as string[];

      results.push(
        ...successfulTests.map((path: string) => ({ path, success: true })),
        ...filePaths
          .filter((path) => !successfulTests.includes(normalizePath(path)))
          .map((path) => ({
            path: normalizePath(path),
            success: false,
            error: 'Test failed',
          })),
      );

      const { generateReport } = await inquirer.prompt<{
        generateReport: boolean;
      }>([
        {
          type: 'confirm',
          name: 'generateReport',
          message: `Generate test reports for all ${successfulTests.length} items?`,
          default: true,
        },
      ]);

      if (generateReport) {
        try {
          const reportPromises = successfulTests.map(
            async (filePath: string) => {
              try {
                const normalizedPath = normalizePath(filePath);
                const parsed = path.parse(normalizedPath);
                const reportName = parsed.name;

                await actionHandlers.report.single[0](reportName);
                return reportName;
              } catch (error) {
                console.error(
                  `❌ Failed to generate report for ${filePath}:`,
                  (error as Error).message,
                );
                return null;
              }
            },
          );

          const reportNames = (await Promise.all(reportPromises)).filter(
            Boolean,
          ) as string[];

          if (reportNames.length > 0 && reportNames.length <= REPORT_LENGTH) {
            console.log('\n📜 TEST REPORTS SUMMARY');
            console.log('======================');

            const displayPromises = reportNames.map(async (reportName) => {
              console.log(`\n🔍 Report for: ${reportName}`);
              console.log('----------------------');
              await actionHandlers.report.view[0](reportName);
              console.log('----------------------');
            });

            await Promise.all(displayPromises);

            console.log('\n======================');
            console.log(`🎉 Displayed ${reportNames.length} reports`);
          }
        } catch (error) {
          console.error(
            '❌ Error in report generation:',
            (error as Error).message,
          );
        }
      }
    } catch (error) {
      console.error('❌ Error in test execution:', (error as Error).message);
      results.push(
        ...filePaths.map((path) => ({
          path: normalizePath(path),
          success: false,
          error: (error as Error).message,
        })),
      );
    }
  } else if (action === 'test' && type === 'k6') {
    try {
      for (const filePath of filePaths) {
        const normalizedPath = normalizePath(filePath);
        console.log(`\n🔄 Processing: ${normalizedPath}`);
        for (const handler of actionHandlers[action][type]) {
          const finalPath = normalizedPath;
          await handler(finalPath);
        }
      }
    } catch (error) { }
  } else {
    for (const filePath of filePaths) {
      const normalizedPath = normalizePath(filePath);
      try {
        console.log(`\n🔄 Processing: ${normalizedPath}`);

        for (const handler of actionHandlers[action][type]) {
          let finalPath = normalizedPath;

          if (action === 'report' && type !== 'view') {
            const parsed = path.parse(normalizedPath);
            finalPath = parsed.base;
          }

          await handler(finalPath);
        }

        console.log(`✅ Success: ${normalizedPath}`);
        results.push({ path: normalizedPath, success: true });
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error(`❌ Failed: ${normalizedPath} - ${errorMsg}`);
        results.push({ path: normalizedPath, success: false, error: errorMsg });
      }
    }
  }

  return results;
}

async function selectFoldersRecursive(
  isReport = false,
  type = 'request',
  basePathOverride?: string,
): Promise<string[]> {
  const selectedPaths: string[] = [];
  let currentPath = '';
  let basePath =
    basePathOverride ||
    (isReport
      ? path.join(__dirname, '../test-requests', '.reports')
      : path.join(__dirname, '../test-requests'));
  let fullPath: string;

  while (true) {
    fullPath = path.join(basePath, currentPath);

    try {
      const entries = fs.readdirSync(fullPath, { withFileTypes: true });

      const items = entries
        .filter((entry) => {
          if (entry.isDirectory()) return true;
          if (isReport && entry.isFile() && entry.name.endsWith('.md'))
            return true;
          if (
            !isReport &&
            type === 'json' &&
            entry.isFile() &&
            entry.name.endsWith('.json')
          )
            return true;
          if (
            !isReport &&
            type !== 'json' &&
            entry.isFile() &&
            entry.name.endsWith('.spec.ts')
          )
            return true;
          return false;
        })
        .map((entry) => ({
          name: entry.name,
          value: entry.name,
          checked: selectedPaths.includes(
            path.join(basePath, currentPath, entry.name),
          ),
        }));

      const currentFullPath = path.join(basePath, currentPath);
      const isCurrentSelected =
        selectedPaths.includes(currentFullPath) && currentFullPath !== '';

      const { selectedOptions } = await inquirer.prompt<{
        selectedOptions: string[];
      }>([
        {
          type: 'checkbox',
          name: 'selectedOptions',
          message: `Select items in ${currentPath || 'root'}:`,
          choices: [
            ...(currentPath !== '' && type !== 'json'
              ? [
                {
                  name: `📁 ${isCurrentSelected ? '✓ ' : ''}[SELECT CURRENT] ${currentPath}`,
                  value: '__CURRENT__',
                  checked: isCurrentSelected,
                },
              ]
              : []),
            ...items.map((item) => ({
              ...item,
              name: `${item.name.endsWith('.md') || item.name.endsWith('.spec.ts') || item.name.endsWith('.json') ? '📄' : '📂'} ${selectedPaths.includes(path.join(basePath, currentPath, item.value)) ? '✓ ' : ''}${item.name}`,
            })),
            new inquirer.Separator(),
            ...(type !== 'json'
              ? [{ name: '🔍 Search DTO', value: '__SEARCH__' }]
              : []),
            { name: '✅ Confirm selection', value: '__CONFIRM__' },
            { name: '↩ Back', value: '__BACK__' },
          ],
          pageSize: 20,
        },
      ]);

      if (selectedOptions.includes('__CURRENT__') && type !== 'json') {
        if (!selectedPaths.includes(currentFullPath)) {
          if (!isReport) {
            const testFiles = await glob(path.join(fullPath, '**/*.spec.ts'), {
              nodir: true,
            });
            testFiles.forEach((file) => {
              const relativePath = path
                .relative(path.join(__dirname, '../test-requests'), file)
                .replace(/\\/g, '/');
              if (!selectedPaths.includes(relativePath)) {
                selectedPaths.push(relativePath);
              }
            });
          } else if (!selectedPaths.includes(currentFullPath)) {
            selectedPaths.push(currentFullPath);
          }
        }
      } else {
        const index = selectedPaths.indexOf(currentFullPath);
        if (index !== -1) {
          selectedPaths.splice(index, 1);
        }
      }

      if (selectedOptions.includes('__SEARCH__') && type !== 'json') {
        while (true) {
          const { dtoName } = await inquirer.prompt<{ dtoName: string }>([
            {
              type: 'input',
              name: 'dtoName',
              message: 'Enter DTO name to search (e.g., send-dm-message):',
              validate: async (input: string) => {
                if (!input) return 'DTO name is required.';
                if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
                  return 'DTO name can only contain letters, numbers, hyphens, and underscores.';
                }
                const result = validateDtoName(input);
                if (!result.status) {
                  return result.data as string;
                }

                const matches = await searchDtoInTestRequests(input);
                if (matches.length === 0) {
                  return `DTO '${input}' not found in test-requests folder.`;
                }
                return true;
              },
            },
          ]);

          const matches = await searchDtoInTestRequests(dtoName);
          let dtoPath: string;

          if (matches.length === 1) {
            dtoPath = matches[0];
          } else if (matches.length > 1) {
            const { selectedPath } = await inquirer.prompt<{
              selectedPath: string;
            }>([
              {
                type: 'list',
                name: 'selectedPath',
                message: `Multiple matches found for '${dtoName}'. Please select one:`,
                choices: matches.map((match) => ({
                  name: match,
                  value: match,
                })),
              },
            ]);
            dtoPath = selectedPath;
          } else {
            console.error(
              `No matches found for DTO '${dtoName}' after validation.`,
            );
            continue;
          }

          if (!selectedPaths.includes(dtoPath)) {
            selectedPaths.push(dtoPath);
          }

          console.log(
            `\n📋 Selected DTO for generation: ${dtoName} (Type: ${type}, Path: ${dtoPath})`,
          );

          const { continueSearch } = await inquirer.prompt<{
            continueSearch: string;
          }>([
            {
              type: 'list',
              name: 'continueSearch',
              message: 'What would you like to do next?',
              choices: [
                {
                  name: 'Continue searching for another DTO',
                  value: 'continue',
                },
                { name: 'Return to folder selection', value: 'folder' },
                { name: 'Confirm selection and proceed', value: 'confirm' },
              ],
              default: 'continue',
            },
          ]);

          if (continueSearch === 'confirm') {
            return selectedPaths.filter((f) => f !== '');
          } else if (continueSearch === 'folder') {
            break;
          }
        }
        continue;
      }

      items.forEach((item) => {
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
        return selectedPaths.filter((f) => f !== '');
      }

      if (selectedOptions.includes('__BACK__')) {
        if (!basePathOverride && !basePath) {
          return [];
        }
        const parentPath = path.dirname(basePath);
        currentPath = path.basename(basePath);
        basePath = parentPath;
        continue;
      }

      const nextItem = selectedOptions.find(
        (opt) =>
          !['__CURRENT__', '__SEARCH__', '__CONFIRM__', '__BACK__'].includes(
            opt,
          ),
      );

      if (nextItem) {
        const nextItemPath = path.join(fullPath, nextItem);
        if (fs.statSync(nextItemPath).isDirectory()) {
          basePath = path.join(basePath, currentPath);
          currentPath = nextItem;
        }
      }
    } catch (error) {
      console.error(`Error reading directory: ${(error as Error).message}`);
      return [];
    }
  }
}
