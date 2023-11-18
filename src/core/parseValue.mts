export const parseValue = (str: string): number => {
  if (!str) {
    return NaN
  }
  return +str
}
