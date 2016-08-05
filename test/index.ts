import math from '../src/index';
import * as Types from '../src/types';
import test from 'ava';

test('Can do math easy', function(t) {
    // t.deepEqual(
    //     math(1, 2),
    //     {
    //         a: 1,
    //         b: 2,
    //         equals: 3
    //     }
    // );
});

test('Can do math difficult', function(t) {
    t.deepEqual(
        math(2, 3),
        {
            a: 2,
            b: 3,
            equals: 5
        }
    );
});
