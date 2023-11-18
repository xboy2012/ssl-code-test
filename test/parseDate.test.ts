import { parseDate } from '../src/core/parseDate.mjs'

describe('parseDate()', () => {
  it('test', () => {
    expect(parseDate(null)).toBeNaN()
    expect(parseDate(undefined)).toBeNaN()
    expect(parseDate('')).toBeNaN()
    expect(parseDate('INVALID')).toBeNaN()
    expect(parseDate('2023-1-32')).toBeNaN()
    expect(parseDate('2023-13-1')).toBeNaN()
    expect(parseDate('2023-1-1')).toBe(20230101)
    expect(parseDate('2023-01-01')).toBe(20230101)
  })
})
