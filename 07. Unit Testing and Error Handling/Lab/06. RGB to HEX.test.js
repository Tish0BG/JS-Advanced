describe("Test", () => {
    describe("Invalid inputs", () => {
        it("Input including string", () => {
            assert.isUndefined(rgbToHexColor("5", 0, 0));
        });

        it("Input including array", () => {
            assert.isUndefined(rgbToHexColor([], 0, 0));
        });

        it("Input including object", () => {
            assert.isUndefined(rgbToHexColor({}, 0, 0));
        });

        it("Input including negative number", () => {
            assert.isUndefined(rgbToHexColor(-1, 0, 0))
        });

        it("Input over 255", () => {
            assert.isUndefined(rgbToHexColor(256, 0, 0));
        });

        it("Only green invalid (negative)", () => {
            assert.isUndefined(rgbToHexColor(0, -1, 0));
        });

        it("Only blue invalid (above 255)", () => {
            assert.isUndefined(rgbToHexColor(0, 0, 300));
        });

        it("Input with fractional number", () => {
            assert.isUndefined(rgbToHexColor(3.14, 0, 0));
        });
    });

    describe("Valid inputs", () => {
        it("Lower borders", () => {
            assert.equal(rgbToHexColor(0, 0, 0), "#000000");
        });

        it("Higher borders", () => {
            assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
        });

        it("Random values", () => {
            assert.equal(rgbToHexColor(12, 13, 14), "#0C0D0E");
        });
    })
});