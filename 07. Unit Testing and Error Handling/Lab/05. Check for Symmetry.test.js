describe('Test', function() {
    it('should return true for symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    });

    it('should return false for non-symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
    });

    it('should return true for symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.true;
    });

    it('should return false for non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });

    it('should return false for mixed-type array (1, "1")', () => {
        expect(isSymmetric([1, '1'])).to.be.false;
    });

    it('should return true for single-element array', () => {
        expect(isSymmetric([42])).to.be.true;
    });

    it('should return true for empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return false when input is not an array (number)', () => {
        expect(isSymmetric(123)).to.be.false;
    });

    it('should return false when input is not an array (string)', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('should return false when input is object', () => {
        expect(isSymmetric({ a: 1, b: 2 })).to.be.false;
    });
});