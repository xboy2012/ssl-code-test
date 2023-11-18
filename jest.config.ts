import type { JestConfigWithTsJest } from 'ts-jest'

export default async (): Promise<JestConfigWithTsJest> => {
  return {
    resolver: 'ts-jest-resolver',
    transform: {
      '^.+\\.m?tsx?$': [
        '<rootDir>/node_modules/ts-jest/legacy.js',
        {
          useESM: true,
        },
      ],
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.mts'],
  }
}
