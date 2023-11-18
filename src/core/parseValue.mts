export const parseValue = (str: string | null | undefined): number => {
  if (!str) {
    return NaN
  }
  return +str
}
