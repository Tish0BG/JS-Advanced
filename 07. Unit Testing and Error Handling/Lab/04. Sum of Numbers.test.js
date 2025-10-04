import { expect } from 'chai';
import { sum } from './testFunc.js'

describe('Test', function() {
    it('should return correct sum for positive numbers', () => {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    });

    it('should return 0 for empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('should return correct sum with negative numbers', () => {
        expect(sum([1, -2, 3, -4, 5])).to.equal(3);
    });

    it('should work with numbers in string format', () => {
        expect(sum(['1', '2', '3'])).to.equal(6);
    });

    it('should return NaN if array contains non-numeric string', () => {
        expect(sum(['1', 'two', '3'])).to.be.NaN;
    });
}); 