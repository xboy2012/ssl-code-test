import moment from 'moment'

export const parseDate = (str: string): number => {
  // empty string must be invalid
  if (!str) {
    return NaN
  }
  // use `moment` to parse date SAFELY, in case of various invalid edge cases,
  // instead of manually split and parse the string
  const m = moment(str, 'YYYY-M-D')
  if (!m.isValid()) {
    return NaN
  }
  return m.year() * 10000 + (m.month() + 1) * 100 + m.date()
}
