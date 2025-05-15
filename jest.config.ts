import dotenv from 'dotenv';
export default {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testRegex: '\\.spec\\.ts$',
    verbose: false,
    reporters: ['default'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },

    setupFiles: ['dotenv/config'],
    setupFilesAfterEnv: ['./setup/jest.setup.ts'],
    globalTeardown: './setup/jest.teardown.ts',

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
    maxWorkers: '50%',
    cache: true,
    bail: true,
    collectCoverage: false, 

};
