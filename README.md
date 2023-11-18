# Install

```shell
yarn install
```

# Run

```shell
yarn start
```

The result should be as follows.

```
xboy@XBOYs-MacBook-Pro ssl-code-test % yarn start
yarn run v1.22.19
$ ts-node-esm src/index.mts
公司: OQB, 股价增值: 850.000000
✨  Done in 0.79s.
```

# Test

```shell
yarn test
```

The result should show a 100% percent coverage
```
xboy@XBOYs-MacBook-Pro ssl-code-test % jest
 PASS  test/getMaxIncrease.test.ts
 PASS  test/readCSV.test.ts
 PASS  test/parseDate.test.ts
 PASS  test/parseValue.test.ts
--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------|---------|----------|---------|---------|-------------------
All files           |     100 |      100 |     100 |     100 |                   
 getMaxIncrease.mts |     100 |      100 |     100 |     100 |                   
 parseDate.mts      |     100 |      100 |     100 |     100 |                   
 parseValue.mts     |     100 |      100 |     100 |     100 |                   
 readCSV.mts        |     100 |      100 |     100 |     100 |                   
--------------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        1.056 s
```

# Performance

The time complexity should be `O(m + n)`

The space complexity should be `O(m)`

> `m` stands for **Number of Company**
>
> `n` stands for **Number of records in csv** (`m <= n`)

# Notes

For simplicity, I only introduced `prettier` for formatting the code base.

I'm not introducing `eslint`,`lint-stage`,`husky` or other tools yet, which
could definitely increase the complexity of the project.

But yes, the tools mentioned above are very useful, and I'm familiar using them
in production projects.

**This is just a demo project after all.**

Thanks very much.
