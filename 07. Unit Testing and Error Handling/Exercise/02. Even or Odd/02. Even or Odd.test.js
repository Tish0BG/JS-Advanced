describe("main-text", () => {
    it("test with non string value", () => {
        assert.equal(isOddOrEven(1223432423), undefined, "result must be undefine");
        assert.equal(isOddOrEven(['Pesho', 'Gosho']), undefined, "result must be undefine");
    });

    it("test with correct value and odd length", () => {
        assert.equal(isOddOrEven("abc"), "odd", '"result must be odd');
    });

    it("test with correct value with even length", () => {
        assert.equal(isOddOrEven("abcd"), "even", "result must be even");
    });
})