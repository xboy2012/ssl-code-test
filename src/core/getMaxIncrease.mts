import { parseDate } from './parseDate.mjs'
import { parseValue } from './parseValue.mjs'
import { readCSV } from './readCSV.mjs'

export const getMaxIncrease = (
  filePath: string
): Promise<[string, number] | undefined> => {
  return new Promise<[string, number] | undefined>((resolve) => {
    const nameSet = new Set<string>()
    const firstRecordMap = new Map<string, [number, number]>()
    const lastRecordMap = new Map<string, [number, number]>()

    const onRow = (arr: string[]) => {
      const name = arr[0]
      if (!name) {
        return // an empty name is invalid.
      }

      const date = parseDate(arr[1])
      if (isNaN(date)) {
        return // an invalid date found.
      }

      const value = parseValue(arr[3])
      if (isNaN(value)) {
        return // an invalid value found.
      }

      if (!nameSet.has(name)) {
        firstRecordMap.set(name, [date, value])
        lastRecordMap.set(name, [date, value])
        nameSet.add(name)
        return
      }

      const firstRecord = firstRecordMap.get(name)!
      if (date < firstRecord[0]) {
        firstRecord[0] = date
        firstRecord[1] = value
      }

      const lastRecord = lastRecordMap.get(name)!
      if (date > lastRecord[0]) {
        lastRecord[0] = date
        lastRecord[1] = value
      }
    }

    const onEnd = () => {
      let resultName = ''
      let resultIncrease = -Infinity

      for (const name of nameSet) {
        const first = firstRecordMap.get(name)!
        const last = lastRecordMap.get(name)!
        if (first[0] === last[0]) {
          continue
        }
        const increase = last[1] - first[1]

        if (increase > resultIncrease) {
          resultIncrease = increase
          resultName = name
        }
      }

      if (resultIncrease <= 0) {
        resolve(undefined)
      } else {
        resolve([resultName, resultIncrease])
      }
    }

    readCSV(filePath, onRow, onEnd)
  })
}
