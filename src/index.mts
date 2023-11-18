import { rootDir } from './core/rootDir.mjs'
import { getMaxIncrease } from './core/getMaxIncrease.mjs'

const main = async () => {
  // You may switch among the following sample csv files.
  const filePath = rootDir + '/resources/values.csv'
  // const filePath = rootDir + '/resources/demo1.csv'
  // const filePath = rootDir + '/resources/demo2.csv'

  const res = await getMaxIncrease(filePath)
  if (!res) {
    console.log('nil')
  } else {
    const [name, increase] = res
    console.log(`公司: ${name}, 股价增值: ${increase.toFixed(6)}`)
  }
}

main()
