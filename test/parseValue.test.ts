import { parseValue } from '../src/core/parseValue.mjs'

describe('parseValue()', () => {
  it('test', () => {
    expect(parseValue(null)).toBeNaN()
    expect(parseValue(undefined)).toBeNaN()
    expect(parseValue('')).toBeNaN()
    expect(parseValue('123')).toBe(123)
    expect(parseValue('123.456')).toBe(123.456)
  })
})
