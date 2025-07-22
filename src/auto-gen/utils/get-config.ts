import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import path, { resolve } from 'path';
import * as yaml from 'js-yaml';
import get from 'lodash/get';
import merge from 'lodash/merge';
import set from 'lodash/set';

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

let cachedConst: any = null;
let cachedSwagger: any = null;
let cachedVar: any = null;
let cachedMethod: any = null;
let cachedSwaggerFaker: any = null;
let cachedActionConfig: any = null;
let cachedErrorMessage: any = null;
let cachedHeaderList: any = null;
let cachedClients: Record<string, string> | null = null;

export function loadConst(userRootDir?: string): any {
  if (cachedConst) return cachedConst;

  const baseDir = userRootDir || process.cwd();
  const constPath = path.resolve(baseDir, 'src/constants/const.ts');

  if (!existsSync(constPath)) {
    throw new Error(`❌ CONST file not found at ${constPath}`);
  }

  const imported = require(constPath);

  if (!imported.CONST || !imported.CONST.versionSwagger) {
    throw new Error(`❌ CONST.versionSwagger not found in ${constPath}`);
  }

  cachedConst = imported.CONST;
  return cachedConst;
}

export function loadVar(userRootDir?: string): any {
  if (cachedVar) return cachedVar;

  const baseDir = userRootDir || process.cwd();
  const varPath = path.resolve(baseDir, 'src/constants/var.ts');

  if (!existsSync(varPath)) {
    throw new Error(`❌ varPath file not found at ${varPath}`);
  }

  const imported = require(varPath);

  cachedVar = imported.VAR;
  return cachedVar;
}


export function loadSchemaSwagger(userRootDir?: string): any {
  if (cachedSwagger) return cachedSwagger;
  const baseDir = userRootDir || process.cwd();
  const swaggerPath = path.resolve(baseDir, 'src/swagger/swagger-hono.json');

  if (!existsSync(swaggerPath)) {
    throw new Error(`❌ swaggerPath file not found at ${swaggerPath}`);
  }

  const imported = require(swaggerPath);


  cachedSwagger = imported.swaggerPath;
  return cachedSwagger;
}


export function loadSchemaSwaggerFaker(userRootDir?: string): any {
  if (cachedSwaggerFaker) return cachedSwaggerFaker;
  const baseDir = userRootDir || process.cwd();
  const swaggerFakerPath = path.resolve(baseDir, 'src/swagger/swagger-faker.json');

  if (!existsSync(swaggerFakerPath)) {
    throw new Error(`❌ swaggerFakerPath file not found at ${swaggerFakerPath}`);
  }

  const imported = require(swaggerFakerPath);


  cachedSwaggerFaker = imported.swaggerFakerPath;
  return cachedSwaggerFaker;
}

export function loadSwaggerClientsFromFolder(userRootDir?: string): Record<string, any> {
  if (cachedClients) return cachedClients;

  const baseDir = userRootDir || process.cwd();
  const clientsDir = path.resolve(baseDir, 'src/swagger/swagger-clients');

  const files = readdirSync(clientsDir);
  const clients: Record<string, any> = {};

  for (const file of files) {
    const fullPath = path.join(clientsDir, file);
    const isFile = statSync(fullPath).isFile();

    if (!isFile || (!file.endsWith('.ts') && !file.endsWith('.js'))) continue;

    const nameWithoutExt = path.basename(file, path.extname(file));
    const mod = require(fullPath);

    const clientExport = mod.default || mod[nameWithoutExt];

    if (!clientExport) {
      console.warn(`⚠️ No export found in ${file}`);
      continue;
    }

    // Nếu export là class, khởi tạo luôn (nếu cần)
    const instance =
      typeof clientExport === 'function' ? new clientExport() : clientExport;

    clients[nameWithoutExt] = instance;
  }

  cachedClients = clients;
  return cachedClients;
}


export function loadMethod(userRootDir?: string): any {
  if (cachedMethod) return cachedMethod;

  const baseDir = userRootDir || process.cwd();
  const methodPath = path.resolve(baseDir, 'src/constants/method.ts');

  if (!existsSync(methodPath)) {
    throw new Error(`❌ methodPath file not found at ${methodPath}`);
  }

  const imported = require(methodPath);

  cachedMethod = imported.METHOD;
  return cachedMethod;
}

export function loadActionConfig(userRootDir?: string): any {
  if (cachedActionConfig) return cachedActionConfig;

  const baseDir = userRootDir || process.cwd();
  const actionConfigPath = path.resolve(baseDir, 'src/constants/action.ts');

  if (!existsSync(actionConfigPath)) {
    throw new Error(`❌ actionConfigPath file not found at ${actionConfigPath}`);
  }

  const imported = require(actionConfigPath);

  cachedActionConfig = imported.ACTION_CONFIG;
  return cachedActionConfig;
}

export function loadErrorMessage(userRootDir?: string): any {
  if (cachedErrorMessage) return cachedErrorMessage;

  const baseDir = userRootDir || process.cwd();
  const errorMessagePath = path.resolve(baseDir, 'src/constants/error.ts');

  if (!existsSync(errorMessagePath)) {
    throw new Error(`❌ errorMessagePath file not found at ${errorMessagePath}`);
  }

  const imported = require(errorMessagePath);

  cachedErrorMessage = imported.ErrorMessage;
  return cachedErrorMessage;
}

export function loadHeaderList(userRootDir?: string): any {
  if (cachedHeaderList) return cachedHeaderList;

  const baseDir = userRootDir || process.cwd();
  const headerListPath = path.resolve(baseDir, 'src/constants/header-list.ts');

  if (!existsSync(headerListPath)) {
    throw new Error(`❌ headerListPath file not found at ${headerListPath}`);
  }

  const imported = require(headerListPath);

  cachedHeaderList = imported.HEADER_LIST;
  return cachedHeaderList;
}
