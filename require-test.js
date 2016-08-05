var assert = require('assert');
var m = require('./exported.js');
assert.deepEqual(m(1, 2), { a: 1, b: 2, equals: 3 });
