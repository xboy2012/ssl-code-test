import { createReadStream } from 'node:fs'
import { rootDir } from './core/rootDir.mjs'
import { getMaxIncrease } from './core/getMaxIncrease.mjs'

/* istanbul ignore next */
const main = async () => {
  // You may switch among the following sample csv files.
  const filePath = rootDir + '/resources/values.csv'
  // const filePath = rootDir + '/resources/demo1.csv'
  // const filePath = rootDir + '/resources/demo2.csv'

  const stream = createReadStream(filePath)

  const res = await getMaxIncrease(stream)
  if (!res) {
    console.log('nil')
  } else {
    const [name, increase] = res
    console.log(`公司: ${name}, 股价增值: ${increase.toFixed(6)}`)
  }
}

/* istanbul ignore next */
main()
