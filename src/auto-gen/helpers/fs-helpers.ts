import * as path from 'path';
import * as fs from 'fs';
import 'reflect-metadata';
import { ActionHandler } from '../types/shared.types';
import { getOrThrow, setupConfiguration } from '../utils/get-config';

// setup config
setupConfiguration()

// get all file
export function getAllFiles(dirPath: string): string[] {
    let files: string[] = [];
    const items = fs.readdirSync(dirPath);
    items.forEach((item) => {
        const itemPath = path.join(dirPath, item);
        if (fs.statSync(itemPath).isDirectory()) {
            files = files.concat(getAllFiles(itemPath));
        } else {
            files.push(itemPath);
        }
    });

    return files;
}

// read json file 
export function readJsonFile(filePath: string): any {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
}

// find all folder from file dto & file request
export function findAllFoldersWithDtoAndRequest(basePath: string) {
    const results: {
        path: string;
        dtoFiles: string[];
        requestFiles: string[];
    }[] = [];

    function scanDirectory(dir: string) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        // Check current directory first
        const currentDtoFiles = entries
            .filter(
                (e) =>
                    !e.isDirectory() &&
                    (e.name.endsWith('.dto.ts') || e.name.endsWith('.dto.js'))
            )
            .map((e) => e.name);

        const currentRequestFiles = entries
            .filter(
                (e) =>
                    !e.isDirectory() &&
                    (e.name.endsWith('.request.ts') || e.name.endsWith('.request.js'))
            )
            .map((e) => e.name);


        if (currentDtoFiles.length > 0 && currentRequestFiles.length > 0) {
            results.push({
                path: dir,
                dtoFiles: currentDtoFiles,
                requestFiles: currentRequestFiles,
            });
        }

        // Then scan subdirectories
        entries
            .filter((e) => e.isDirectory())
            .forEach((e) => {
                scanDirectory(path.join(dir, e.name));
            });
    }

    scanDirectory(basePath);
    // results.forEach((r) => console.log(`- ${r.path}`));
    return results;
}

// get match file
export function getMatchedFilePaths(
    foundFolders: Array<{
        path: string;
        dtoFiles: string[];
        requestFiles: string[];
    }>,
): string[] {
    const result: string[] = [];

    for (const folder of foundFolders) {
        // Thêm đường dẫn đầy đủ cho các file .dto.ts
        folder.dtoFiles.forEach((file) => {
            result.push(path.join(folder.path, file));
        });

        // Thêm đường dẫn đầy đủ cho các file .request.ts
        folder.requestFiles.forEach((file) => {
            result.push(path.join(folder.path, file));
        });
    }

    return result;
}

// clear file recursive
export function clearAllFilesRecursively(dir: string) {
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

// clear file 
export function clearFiles(testType: string): ActionHandler {
    const handler = async (dtoName: string) => {
        const baseDir = path.join(__dirname, '../', testType);

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
        writable: false,
    });

    return handler;
}

// find file dto in folder test-requests
export async function searchDtoInTestRequests(
    dtoName: string,
): Promise<string[]> {
    const basePath = path.join(__dirname, '../test-requests');

    const matches: string[] = [];

    async function walkDir(currentPath: string) {
        try {
            const entries = await fs.promises.readdir(currentPath, {
                withFileTypes: true,
            });

            for (const entry of entries) {
                const fullPath = path.join(currentPath, entry.name);

                if (entry.isDirectory()) {
                    // Check if the folder name matches dtoName exactly
                    if (path.basename(entry.name) === dtoName) {
                        // Add the relative path from basePath
                        const relativePath = path.relative(basePath, fullPath);
                        matches.push(relativePath);
                    }
                    // Recursively search subdirectories
                    await walkDir(fullPath);
                } else {
                    // Check if the file name (without extension) matches dtoName
                    const baseName = path.parse(entry.name).name;
                    if (baseName === dtoName) {
                        // Add the relative path from basePath
                        const relativePath = path.relative(basePath, fullPath);
                        matches.push(relativePath);
                    }
                }
            }
        } catch (error) {
            console.error(
                `Error reading directory ${currentPath}: ${(error as Error).message}`,
            );
        }
    }

    await walkDir(basePath);
    return matches;
}

// get path folder dto 
export function getDtoFolderPath(dtoName: string): string | null {
    function searchDir(currentPath: string): string | null {
        const entries = fs.readdirSync(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            // 👉 Bỏ qua folder .reports
            if (entry.isDirectory()) {
                if (entry.name === '.reports') continue;

                const found = searchDir(fullPath);
                if (found) return found;
            } else if (entry.isFile() && entry.name.startsWith(dtoName)) {
                return path.dirname(fullPath);
            }
        }

        return null;
    }

    return searchDir(globalThis.testRequestDir);
}

// gen file swagger 
export const getFilesSwagger = (dirPath: string): string[] => {
  let jsonFiles: string[] = [];

  // Read directory contents
  const filesAndDirs = fs.readdirSync(dirPath);

  for (const item of filesAndDirs) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      jsonFiles = jsonFiles.concat(getAllFiles(fullPath));
    } else if (stat.isFile() && fullPath.endsWith('.json')) {
      jsonFiles.push(fullPath);
    }
  }

  return jsonFiles;
};