
import dotenv from 'dotenv';
export default {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: '\\.spec\\.ts$',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
      },
      
    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: ['./jest.setup.ts'],
    preset: 'ts-jest',
    moduleNameMapper: {
        '#ansi-styles': 'ansi-styles',
    },
    globals: {  
        'ts-jest': {
            useESM: true,
        },
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    maxWorkers: 2, 
};
