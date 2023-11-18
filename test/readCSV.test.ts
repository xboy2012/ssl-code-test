import { Readable } from 'node:stream'
import { readCSV } from '../src/core/readCSV.mjs'

describe('readCSV()', () => {
  it('test', (callback) => {
    const stream = Readable.from('foo,bar\na,b\r\n\n c,\td\r')
    const onRow = jest.fn()
    const onEnd = jest.fn()
    readCSV(
      stream,
      (data) => {
        expect(onEnd).not.toHaveBeenCalled()
        onRow(data)
      },
      () => {
        expect(onEnd).not.toHaveBeenCalled()
        onEnd()
        expect(onRow.mock.calls).toStrictEqual([[['a', 'b']], [['c', 'd']]])
        callback()
      }
    )
  })
})
