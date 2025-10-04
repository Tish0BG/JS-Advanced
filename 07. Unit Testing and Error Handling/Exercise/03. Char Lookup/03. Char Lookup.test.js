describe("Test", () => {
    describe("Returns Undefined", () => {
        it("Different string type", () => {
            assert.isUndefined(lookupChar(123, 0));
            assert.isUndefined(lookupChar([], 0));
            assert.isUndefined(lookupChar({}, 0));
        });

        it("Different index type", () => {
            assert.isUndefined(lookupChar("hello", "5"));
            assert.isUndefined(lookupChar("hello", 3.4));
        });
    });

    describe("Returns Incorrect Index", () => {
        it("Index below 0", () => {
            assert.equal(lookupChar("hello", -1), "Incorrect index", "Index below 0");
        });

        it("Index is bigger than string length", () => {
            assert.equal(lookupChar("hello", 6), "Incorrect index", "Index is bigger than string length");
        });

        it("Index is equal to string length", () => {
            assert.equal(lookupChar("hello", 5), "Incorrect index", "Index is equal to string length");
        });
    });

    describe("Returns Char at Specified Index", () => {
        it("Returns first character", () => {
            assert.equal(lookupChar("hello", 0), "h");
        });

        it("Returns last character", () => {
            assert.equal(lookupChar("hello", 4), "o");
        });

        it("Returns middle character", () => {
            assert.equal(lookupChar("hello", 2), "l");
        });
    });
});