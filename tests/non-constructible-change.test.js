const assert = require('assert').strict;
const { nonConstructibleChange } = require("../src/non-constructible-change");

assert.equal(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]), 20)
assert.equal(nonConstructibleChange([1, 1, 1, 1, 1]), 6)
assert.equal(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]), 55)
assert.throws(() => nonConstructibleChange(), Error('Imposible to calculate'))
assert.throws(() => nonConstructibleChange([]), Error('Imposible to calculate'))

console.log('All test passsed.')
