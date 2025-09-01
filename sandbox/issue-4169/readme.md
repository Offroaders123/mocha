# Issue 4169: 🐛 Bug: Mocha quits watching when all tests file are removed

https://github.com/mochajs/mocha/issues/4169

```
npm i
npm test
```

Expected: Continues watching

Actual: Quits process with `Error: No test file found: "test"`

Mocha version: 11.7.2
Node version (likely irrelevant): 22.13.0
