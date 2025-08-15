# Mocha issue 5422: Bug: timeout() chain call on describe not working as expected

https://github.com/mochajs/mocha/issues/5422

Bash `fnum use && npm i && npm run test` should give a passing test, but instead gives "Error: Timeout of 100ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves."

`DEBUG=* npm run debug` gives debug logs but Mocha currently doesn't have debug logs for setting timeout from what I can see.