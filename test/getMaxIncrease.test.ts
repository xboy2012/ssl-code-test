import { Readable } from 'node:stream'
import { getMaxIncrease } from '../src/core/getMaxIncrease.mjs'

describe('getMaxIncrease()', () => {
  it('test demo1', async () => {
    const stream = Readable.from(
      'Name,Date,notes,Value,Change\n' +
        'IQZ,2015-7-8,notes,656.36,INCREASED\n' +
        'DLV,2015-8-8,notes,173.35,INCREASED\n' +
        'DLV,2015-10-4,notes,231.67,INCREASED\n' +
        'DLV,2015-9-7,notes,209.57,DECREASED\n' +
        'IQZ,2015-9-7,notes,641.23,DECREASED\n' +
        'IQZ,2015-10-4,notes,657.32,INCREASED\n' +
        'DLV,2015-8-18,notes,233.43,INCREASED\n' +
        'DLV,2015-9-15,notes,158.73,DECREASED\n' +
        'IQZ,2015-10-8,notes,537.53,DECREASED\n' +
        'IQZ,2015-10-6,notes,Invalid,UNKNOWN'
    )

    const result = await getMaxIncrease(stream)

    expect(result).toBeTruthy()
    expect(result![0]).toBe('DLV')
    expect(result![1].toFixed(6)).toBe('58.320000')
  })
  it('test demo2', async () => {
    const stream = Readable.from(
      'Name,Date,notes,Value,Change\n' +
        'IQZ,2015-7-8,notes,656.36,DECREASED\n' +
        'DLV,2015-8-8,notes,773.35,DECREASED\n' +
        'DLV,2015-10-4,notes,231.67,DECREASED\n' +
        'DLV,2015-9-7,notes,299.57,DECREASED'
    )

    const result = await getMaxIncrease(stream)
    expect(result).toBeUndefined()
  })

  it('test empty name', async () => {
    const stream = Readable.from(
      'Name,Date,notes,Value,Change\n' +
        ',2015-7-8,notes,656.36,DECREASED\n' +
        'DLV,2015-8-8,notes,173.35,INCREASED\n' +
        'DLV,2015-10-4,notes,231.67,INCREASED\n'
    )

    const result = await getMaxIncrease(stream)
    expect(result).toBeTruthy()
    expect(result![0]).toBe('DLV')
    expect(result![1].toFixed(6)).toBe('58.320000')
  })

  it('test invalid date', async () => {
    const stream = Readable.from(
      'Name,Date,notes,Value,Change\n' +
        'IQZ,,notes,656.36,DECREASED\n' +
        'DLV,2015-8-8,notes,173.35,INCREASED\n' +
        'DLV,2015-10-4,notes,231.67,INCREASED\n'
    )

    const result = await getMaxIncrease(stream)
    expect(result).toBeTruthy()
    expect(result![0]).toBe('DLV')
    expect(result![1].toFixed(6)).toBe('58.320000')
  })

  it('test messed order', async () => {
    const stream = Readable.from(
      'Name,Date,notes,Value,Change\n' +
        'IQZ,,notes,656.36,DECREASED\n' +
        'DLV,2015-10-4,notes,231.67,INCREASED\n' +
        'DLV,2015-8-8,notes,173.35,INCREASED\n'
    )

    const result = await getMaxIncrease(stream)
    expect(result).toBeTruthy()
    expect(result![0]).toBe('DLV')
    expect(result![1].toFixed(6)).toBe('58.320000')
  })
})
