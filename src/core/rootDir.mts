import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/* istanbul ignore next */
export const rootDir = resolve(fileURLToPath(import.meta.url), '../../..')
