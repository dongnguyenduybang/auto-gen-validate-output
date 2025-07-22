import fs, { readFileSync } from 'fs';
import path, { resolve } from 'path';
import * as yaml from 'js-yaml';
import get from 'lodash/get';
import merge from 'lodash/merge';
import set from 'lodash/set';
import { RecentSelection } from '../types/prediction.types';
import yargs from 'yargs';

class ConfigException extends Error { }

function loadFromEnv(
  env: Record<string, string | undefined>,
  { delimiter = '__' } = {},
): Record<string, string> {
  return Object.entries(env).reduce((acc, [key, value]) => {
    set(acc, key.toLowerCase().replace(delimiter, '.'), value);
    return acc;
  }, {});
}

function loadFromYaml(env = 'development'): Record<string, unknown> {
  const configFile = `env.${env}.yaml`;
  const configPath = resolve(process.cwd(), configFile);
  console.log(`Loading configuration from: ${configPath}`);
  return yaml.load(readFileSync(configPath, 'utf8')) as Record<string, unknown>;
}

function loadConfiguration(): Record<string, unknown> {
  const fromYaml = loadFromYaml(process.env.NODE_ENV || 'development');
  const fromProcess = loadFromEnv(process.env);
  return merge(fromYaml, fromProcess);
}

let CONFIG_DATA: Record<string, unknown> | undefined;

export function setupConfiguration(): void {
  if (!CONFIG_DATA) {
    CONFIG_DATA = loadConfiguration();
  }
}

export function getConfig<T>(key: string, fallback?: T): T {
  return get(CONFIG_DATA, key, fallback) as T;
}
export function getOrThrow<T>(key: string): T {
  const result = get(CONFIG_DATA, key);
  if (result === undefined) {
    throw new ConfigException(`Invalid ${key} config`);
  }
  return result as T;
}

// Khai báo interface cho ErrorMessage
interface ErrorMessage {
  DEFINED?: string; // Adjust based on actual properties in error.ts
  [key: string]: string | undefined; // Allow other string properties
}

// Khai báo interface cho cấu hình YAML
interface Config {
  setupRequestFile?: string;
  teardownRequestFile?: string;
  errorMessageFile?: string;
}


export const MAX_RECENT_ITEMS = 20; // recent selection inquirer
export const REPORT_LENGTH = 5; // length report show log
export const recentSelections: RecentSelection[] = [];
export const MAX_TEST_CASES_PER_FILE = 500;
export const CHUNK_SIZE = 500;

// Initialize constants asynchronously
let CONST: any;
let VAR: any;
let schemas: any;
let schemas1: any;
let METHOD: any;
let ACTION_CONFIG: any;
let ErrorMessage: ErrorMessage;
let HEADER_LIST: any;

// Cache variables
let cachedConst: any = null;
let cachedSwagger: any = null;
let cachedVar: any = null;
let cachedMethod: any = null;
let cachedSwaggerFaker: any = null;
let cachedActionConfig: any = null;
let cachedErrorMessage: any = null;
let cachedHeaderList: any = null;
let cachedClients: Record<string, string> | null = null;


async function initializeConstants() {
  // Ưu tiên 1: Tham số dòng lệnh
  const argv = yargs(process.argv.slice(2)).options({
    errorMessageFile: { type: 'string' },
  }).argv;

  let errorMessageFilePath: string = argv.errorMessageFile;

  // Ưu tiên 2: Biến môi trường
  if (!errorMessageFilePath) {
    errorMessageFilePath = process.env.ERROR_MESSAGE_FILE;
  }

  // Ưu tiên 3: File YAML
  if (!errorMessageFilePath) {
    const configPath = path.resolve(process.cwd(), 'config.yaml');
    try {
      const configContent = fs.readFileSync(configPath, 'utf8');
      const config = yaml.load(configContent) as Config;
      errorMessageFilePath = config.errorMessageFile;
    } catch (error) {
      console.warn('No config.yaml found or no errorMessageFile specified, using default path');
    }
  }

  // Ưu tiên 4: Đường dẫn mặc định
  if (!errorMessageFilePath) {
    errorMessageFilePath = 'src/constants/error.ts';
  }

  // Resolve all constants
  ErrorMessage = await loadErrorMessage(errorMessageFilePath);
  CONST = await loadConst();
  VAR = await loadVar();
  schemas = await loadSchemaSwagger();
  schemas1 = await loadSchemaSwaggerFaker();
  METHOD = await loadMethod();
  ACTION_CONFIG = await loadActionConfig();
  HEADER_LIST = await loadHeaderList();
}

// Run initialization
initializeConstants().catch((error) => {
  console.error('Failed to initialize constants:', error);
  process.exit(1);
});

export async function loadConst(userRootDir?: string): Promise<any> {
  if (cachedConst) return cachedConst;

  const baseDir = userRootDir || process.cwd();
  const constPath = path.resolve(baseDir, 'src/constants/const.ts');

  if (!fs.existsSync(constPath)) {
    throw new Error(`❌ CONST file not found at ${constPath}`);
  }

  const imported = await import(constPath);

  if (!imported.CONST || !imported.CONST.versionSwagger) {
    throw new Error(`❌ CONST.versionSwagger not found in ${constPath}`);
  }

  cachedConst = imported.CONST;
  return cachedConst;
}

export async function loadVar(userRootDir?: string): Promise<any> {
  if (cachedVar) return cachedVar;

  const baseDir = userRootDir || process.cwd();
  const varPath = path.resolve(baseDir, 'src/constants/var.ts');

  if (!fs.existsSync(varPath)) {
    throw new Error(`❌ varPath file not found at ${varPath}`);
  }

  const imported = await import(varPath);

  cachedVar = imported.VAR;
  return cachedVar;
}

export async function loadSchemaSwagger(userRootDir?: string): Promise<any> {
  if (cachedSwagger) return cachedSwagger;
  const baseDir = userRootDir || process.cwd();
  const swaggerPath = path.resolve(baseDir, 'src/swagger/swagger-hono.json');

  if (!fs.existsSync(swaggerPath)) {
    throw new Error(`❌ swaggerPath file not found at ${swaggerPath}`);
  }

  const imported = await import(swaggerPath);

  cachedSwagger = imported.swaggerPath;
  return cachedSwagger;
}

export async function loadSchemaSwaggerFaker(userRootDir?: string): Promise<any> {
  if (cachedSwaggerFaker) return cachedSwaggerFaker;
  const baseDir = userRootDir || process.cwd();
  const swaggerFakerPath = path.resolve(baseDir, 'src/swagger/swagger-faker.json');

  if (!fs.existsSync(swaggerFakerPath)) {
    throw new Error(`❌ swaggerFakerPath file not found at ${swaggerFakerPath}`);
  }

  const imported = await import(swaggerFakerPath);

  cachedSwaggerFaker = imported.swaggerFakerPath;
  return cachedSwaggerFaker;
}

export async function loadSwaggerClientsFromFolder(userRootDir?: string): Promise<Record<string, any>> {
  if (cachedClients) return cachedClients;

  const baseDir = userRootDir || process.cwd();
  const clientsDir = path.resolve(baseDir, 'src/swagger/swagger-clients');

  const files = fs.readdirSync(clientsDir);
  const clients: Record<string, any> = {};

  for (const file of files) {
    const fullPath = path.join(clientsDir, file);
    const isFile = fs.statSync(fullPath).isFile();

    if (!isFile || (!file.endsWith('.ts') && !file.endsWith('.js'))) continue;

    const nameWithoutExt = path.basename(file, path.extname(file));
    const mod = await import(fullPath);

    const clientExport = mod.default || mod[nameWithoutExt];

    if (!clientExport) {
      console.warn(`⚠️ No export found in ${file}`);
      continue;
    }

    const instance = typeof clientExport === 'function' ? new clientExport() : clientExport;

    clients[nameWithoutExt] = instance;
  }

  cachedClients = clients;
  return cachedClients;
}

export async function loadMethod(userRootDir?: string): Promise<any> {
  if (cachedMethod) return cachedMethod;

  const baseDir = userRootDir || process.cwd();
  const methodPath = path.resolve(baseDir, 'src/constants/method.ts');

  if (!fs.existsSync(methodPath)) {
    throw new Error(`❌ methodPath file not found at ${methodPath}`);
  }

  const imported = await import(methodPath);

  cachedMethod = imported.METHOD;
  return cachedMethod;
}

export async function loadActionConfig(userRootDir?: string): Promise<any> {
  if (cachedActionConfig) return cachedActionConfig;

  const baseDir = userRootDir || process.cwd();
  const actionConfigPath = path.resolve(baseDir, 'src/constants/action.ts');

  if (!fs.existsSync(actionConfigPath)) {
    throw new Error(`❌ actionConfigPath file not found at ${actionConfigPath}`);
  }

  const imported = await import(actionConfigPath);

  cachedActionConfig = imported.ACTION_CONFIG;
  return cachedActionConfig;
}

export async function loadErrorMessage(userRootDir?: string): Promise<ErrorMessage> {
  if (cachedErrorMessage) return cachedErrorMessage;

  const baseDir = userRootDir || process.cwd();
  const errorMessagePath = userRootDir || path.resolve(baseDir, 'src/constants/error.ts');

  if (!fs.existsSync(errorMessagePath)) {
    throw new Error(`❌ errorMessagePath file not found at ${errorMessagePath}`);
  }

  const imported = await import(errorMessagePath);

  cachedErrorMessage = imported.ErrorMessage;
  return cachedErrorMessage;
}

export async function loadHeaderList(userRootDir?: string): Promise<any> {
  if (cachedHeaderList) return cachedHeaderList;

  const baseDir = userRootDir || process.cwd();
  const headerListPath = path.resolve(baseDir, 'src/constants/header-list.ts');

  if (!fs.existsSync(headerListPath)) {
    throw new Error(`❌ headerListPath file not found at ${headerListPath}`);
  }

  const imported = await import(headerListPath);

  cachedHeaderList = imported.HEADER_LIST;
  return cachedHeaderList;
}

// Export resolved constants
export { CONST, VAR, schemas, schemas1, METHOD, ACTION_CONFIG, ErrorMessage, HEADER_LIST };