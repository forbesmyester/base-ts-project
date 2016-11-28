import { add } from '../src/index';
import test from 'ava';

test('Can do math', function(t) {
    t.deepEqual(add(1, 2), 3);
});
