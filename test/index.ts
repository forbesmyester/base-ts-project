import * as I from '../src/index';
import * as Types from '../src/types';
import {expect} from 'chai';

describe('Can', function() {

    it('can do math', function() {
        expect(I.m(1, 2)).to.eql({
            a: 1,
            b: 2,
            equals: 3
        });
    });

});
