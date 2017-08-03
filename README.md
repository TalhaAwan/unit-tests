# Unit Tests

Unit tests with mocha, sinon and chai for simple javascript utility functions.

## Helper Functions
1. `generateRandomNum(min, max)` generates random number between min and max.
2. `convertArrToStatment(array)` converts the elements of provided array into listed elements (statement) with "and" appeneded before the last one.
3. `logger(fileName)` makes fileName a closure property and returns a function that takes message to be logged. The inner function `console.log` to print fileName and message.

## How to use
- Clone the project and `cd unit-tests`
- Install mocha and istanbul globally `npm install mocha istanbul -g`
- Install other dev dependencies `npm install`
- `npm test` to run the unit tests under `utils` directory
- To see the coverage report open `unit-tests/coverage/lcov-report/index.html` in browser


