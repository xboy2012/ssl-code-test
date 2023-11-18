import { createReadStream } from 'node:fs'
import { parse } from 'csv-parse'

export const readCSV = (
  filePath: string,
  onRow: (data: string[]) => void,
  onEnd: () => void
) => {
  const stream = createReadStream(filePath)

  const parser = parse({
    skipEmptyLines: true,
    trim: true,
    fromLine: 2, // skip the first line
  })

  parser.on('data', (arr) => {
    onRow(arr)
  })

  parser.on('end', () => {
    onEnd()
  })

  // use `csv-parse` to parse csv file SAFELY,
  // instead of just split the string with ',', which introduces potential bugs.
  stream.pipe(parser)
}
