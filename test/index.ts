import math from '../src/index';
import * as Types from '../src/types';
import {expect} from 'chai';

describe('Can', function() {

    it('can do math', function() {
        expect(math(1, 2)).to.eql({
            a: 1,
            b: 2,
            equals: 3
        });
    });

});
