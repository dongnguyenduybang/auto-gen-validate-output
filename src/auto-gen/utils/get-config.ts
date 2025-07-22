import fs, { readFileSync } from 'fs';
import path, { resolve } from 'path';
import * as yaml from 'js-yaml';
import get from 'lodash/get';
import merge from 'lodash/merge';
import set from 'lodash/set';
import { RecentSelection } from '../types/prediction.types';
import yargs from 'yargs';
import { register } from 'ts-node';

// Đăng ký ts-node để xử lý file .ts
register({
  transpileOnly: true,
  compilerOptions: {
    module: 'CommonJS', // Đổi từ ESNext sang CommonJS
    target: 'ES2020',
    moduleResolution: 'Node',
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
  },
});

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

function loadFromYaml(env): Record<string, unknown> {
  const configFile = `env.${env}.yaml`;
  
  // Tìm config file từ working directory (repo cá nhân)
  const workingDir = process.cwd();
  const configPath = resolve(workingDir, configFile);
  
  // Kiểm tra file có tồn tại không
  if (!fs.existsSync(configPath)) {
    throw new Error(`❌ Config file not found at: ${configPath}`);
  }
  
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
  // Đảm bảo config đã được setup
  if (!CONFIG_DATA) {
    setupConfiguration();
  }
  return get(CONFIG_DATA, key, fallback) as T;
}

export function getOrThrow<T>(key: string): T {
  // Đảm bảo config đã được setup
  if (!CONFIG_DATA) {
    setupConfiguration();
  }
  
  const result = get(CONFIG_DATA, key);
  if (result === undefined) {
    throw new ConfigException(`Invalid ${key} config`);
  }
  return result as T;
}

// Khai báo interface cho ErrorMessage
interface ErrorMessage {
  DEFINED?: string;
  [key: string]: string | undefined;
}

// Khai báo interface cho cấu hình YAML
interface Config {
  setupRequestFile?: string;
  teardownRequestFile?: string;
  errorMessageFile?: string;
}

export const MAX_RECENT_ITEMS = 20;
export const REPORT_LENGTH = 5;
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
  try {
    // Setup configuration trước
    setupConfiguration();
    
    let errorMessageFilePath: string;
    let constFilePath: string;
    let varFilePath: string;
    let methodFilePath: string;
    let actionConfigFilePath: string;
    let headerListFilePath: string;

    // Lấy đường dẫn từ working directory (repo cá nhân)
    const workingDir = process.cwd();
    
    errorMessageFilePath = getConfig('errorMessageFile') as string;
    constFilePath = getConfig('constFilePath') as string;
    varFilePath = getConfig('varFilePath') as string;
    methodFilePath = getConfig('methodFilePath') as string;
    actionConfigFilePath = getConfig('actionConfigFilePath') as string;
    headerListFilePath = getConfig('headerListFilePath') as string;

    // Resolve paths tương đối với working directory
    const resolvedPaths = {
      errorMessageFilePath: path.resolve(workingDir, errorMessageFilePath),
      constFilePath: path.resolve(workingDir, constFilePath),
      varFilePath: path.resolve(workingDir, varFilePath),
      methodFilePath: path.resolve(workingDir, methodFilePath),
      actionConfigFilePath: path.resolve(workingDir, actionConfigFilePath),
      headerListFilePath: path.resolve(workingDir, headerListFilePath)
    };

    // Resolve all constants
    if (errorMessageFilePath) {
      ErrorMessage = await loadErrorMessage(resolvedPaths.errorMessageFilePath);
    }
    if (constFilePath) {
      CONST = await loadConst(resolvedPaths.constFilePath);
    }
    if (varFilePath) {
      VAR = await loadVar(resolvedPaths.varFilePath);
    }
    if (methodFilePath) {
      METHOD = await loadMethod(resolvedPaths.methodFilePath);
    }
    if (actionConfigFilePath) {
      ACTION_CONFIG = await loadActionConfig(resolvedPaths.actionConfigFilePath);
    }
    if (headerListFilePath) {
      HEADER_LIST = await loadHeaderList(resolvedPaths.headerListFilePath);
    }
    
    console.log('✅ Constants initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize constants:', error);
    throw error;
  }
}

// Hàm helper để load file an toàn
async function safeImport(filePath: string) {
  try {
    // Kiểm tra file có tồn tại không
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️ File not found: ${filePath}`);
      return null;
    }

    // Sử dụng require cho CommonJS
    if (filePath.endsWith('.ts')) {
      delete require.cache[filePath]; // Clear cache
      return require(filePath);
    } else {
      return await import(filePath);
    }
  } catch (error) {
    console.error(`❌ Error importing ${filePath}:`, error);
    return null;
  }
}

export async function loadConst(constPath: string): Promise<any> {
  if (cachedConst) return cachedConst;

  const imported = await safeImport(constPath);
  if (!imported) {
    throw new Error(`❌ CONST file not found or failed to import: ${constPath}`);
  }

  if (!imported.CONST || !imported.CONST.versionSwagger) {
    console.warn(`⚠️ CONST.versionSwagger not found in ${constPath}`);
  }

  cachedConst = imported.CONST;
  return cachedConst;
}

export async function loadVar(varPath: string): Promise<any> {
  if (cachedVar) return cachedVar;

  const imported = await safeImport(varPath);
  if (!imported) {
    throw new Error(`❌ VAR file not found or failed to import: ${varPath}`);
  }

  cachedVar = imported.VAR;
  return cachedVar;
}

export async function loadMethod(methodPath: string): Promise<any> {
  if (cachedMethod) return cachedMethod;

  const imported = await safeImport(methodPath);
  if (!imported) {
    throw new Error(`❌ METHOD file not found or failed to import: ${methodPath}`);
  }

  cachedMethod = imported.METHOD;
  return cachedMethod;
}

export async function loadActionConfig(actionConfigPath: string): Promise<any> {
  if (cachedActionConfig) return cachedActionConfig;

  const imported = await safeImport(actionConfigPath);
  if (!imported) {
    throw new Error(`❌ ACTION_CONFIG file not found or failed to import: ${actionConfigPath}`);
  }

  cachedActionConfig = imported.ACTION_CONFIG;
  return cachedActionConfig;
}

export async function loadErrorMessage(errorMessagePath: string): Promise<ErrorMessage> {
  if (cachedErrorMessage) return cachedErrorMessage;

  const imported = await safeImport(errorMessagePath);
  if (!imported) {
    throw new Error(`❌ ErrorMessage file not found or failed to import: ${errorMessagePath}`);
  }

  cachedErrorMessage = imported.ErrorMessage;
  return cachedErrorMessage;
}

export async function loadHeaderList(headerListPath: string): Promise<any> {
  if (cachedHeaderList) return cachedHeaderList;

  const imported = await safeImport(headerListPath);
  if (!imported) {
    throw new Error(`❌ HEADER_LIST file not found or failed to import: ${headerListPath}`);
  }

  cachedHeaderList = imported.HEADER_LIST;
  return cachedHeaderList;
}

// Chạy initialization và export một Promise
export const initPromise = initializeConstants();

// Export resolved constants
export { CONST, VAR, schemas, schemas1, METHOD, ACTION_CONFIG, ErrorMessage, HEADER_LIST };