describe ("add five method", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.addFive("Alex"), "result must be undefine");
        assert.isUndefined(mathEnforcer.addFive([5]), "result must be undefine");
        assert.isUndefined(mathEnforcer.addFive({num: 10}), "result must be undefine");
    });

    it("test with valid value", () => {
        assert.deepEqual(mathEnforcer.addFive(10), 15, "result is correct (15)");
        assert.deepEqual(mathEnforcer.addFive(-5), 0, "result is correct (0)");
        assert.deepEqual(mathEnforcer.addFive(0), 5, "result is correct (5)");
        assert.deepEqual(mathEnforcer.addFive(-5.5), -0.5, "result is correct (0.5)");
    });
});

describe("subtract ten method", () => {
    describe("should return undefined when input is not a number", () => {
        it("test with string", () => {
            assert.isUndefined(mathEnforcer.subtractTen("5"), "must be undefine");
        });

        it("test with object", () => {
            assert.isUndefined(mathEnforcer.subtractTen({}), "must be undefine");            
        });

        it("test with array", () => {
            assert.isUndefined(mathEnforcer.subtractTen([]), "must be undefine");       
        });
    });

    describe("should return input minus 10 when input is a number", () => {
        it("test with negative value", () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.equal(mathEnforcer.subtractTen(-0.5), -10.5);
        });

        it("test with zero", () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(10), 0);
        });

        it("test with positive value", () => {
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
            assert.equal(mathEnforcer.subtractTen(20), 10);
        })
    });
});

describe("sum method", () => {
    describe("Test with input with only one correct parameter that returns undefined", () => {
        it("Test with string", () => {
            assert.isUndefined(mathEnforcer.sum("5", 5));
            assert.isUndefined(mathEnforcer.sum(5, "5"));
        });

        it("Test with object", () => {
            assert.isUndefined(mathEnforcer.sum({}, 5));
            assert.isUndefined(mathEnforcer.sum(5, {}));
        });

        it("Test with array", () => {
            assert.isUndefined(mathEnforcer.sum([], 5));
            assert.isUndefined(mathEnforcer.sum(5, []));
        });
    })

    describe("Test with input with only two not correct parameters that returns undefined", () => {
        it("Test with string", () => {
            assert.isUndefined(mathEnforcer.sum("5", "10"));
        });

        it("Test with object", () => {
            assert.isUndefined(mathEnforcer.sum({}, {}));
        });

        it("Test with array", () => {
            assert.isUndefined(mathEnforcer.sum([], []));
        });
    })

    describe('Test with input that have correct values', () => {
        it("Test with negative value and zero value", () => {
            assert.equal(mathEnforcer.sum(10, -10), 0);
            assert.equal(mathEnforcer.sum(0, -10.5), -10.5);
            assert.equal(mathEnforcer.sum(-0.5, 0.5), 0);
            assert.equal(mathEnforcer.sum(0, 0), 0);
        });

        it("Test with positive values", () => {
            assert.equal(mathEnforcer.sum(10, 10), 20);
            assert.equal(mathEnforcer.sum(0.5, 10), 10.5);
            assert.equal(mathEnforcer.sum(0, 10), 10);
        })
    })
})