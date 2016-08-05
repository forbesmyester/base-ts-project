import math from '../src/index';
import * as Types from '../src/types';
import test from 'ava';

test('Can do math', function(t) {
    t.deepEqual(
        math(1, 2),
        {
            a: 1,
            b: 2,
            equals: 3
        }
    );
});
