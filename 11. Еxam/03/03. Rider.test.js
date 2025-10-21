describe("Tests for motorcycleRider", function() {

    describe("licenseRestriction", function() {
        it("should return correct message for category AM", function() {
            expect(motorcycleRider.licenseRestriction("AM")).to.equal(
                "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
            );
        });

        it("should return correct message for category A1", function() {
            expect(motorcycleRider.licenseRestriction("A1")).to.equal(
                "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
            );
        });

        it("should return correct message for category A2", function() {
            expect(motorcycleRider.licenseRestriction("A2")).to.equal(
                "Motorcycles with maximum power of 35KW. and the minimum age is 18."
            );
        });

        it("should return correct message for category A", function() {
            expect(motorcycleRider.licenseRestriction("A")).to.equal(
                "No motorcycle restrictions, and the minimum age is 24."
            );
        });

        it("should throw error for invalid category", function() {
            expect(() => motorcycleRider.licenseRestriction("B")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction("something")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.licenseRestriction(123)).to.throw("Invalid Information!");
        });
    });

    describe("motorcycleShowroom", function() {

        it("should throw error for invalid parameters", function() {
            expect(() => motorcycleRider.motorcycleShowroom("notArray", 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom([], 100)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250"], "200")).to.throw("Invalid Information!");
            expect(() => motorcycleRider.motorcycleShowroom(["125"], 40)).to.throw("Invalid Information!");
        });

        it("should return correct result for valid input (some match)", function() {
            expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 250)).to.equal(
                "There are 2 available motorcycles matching your criteria!"
            );
        });

        it("should return correct result when all match", function() {
            expect(motorcycleRider.motorcycleShowroom(["50", "100"], 150)).to.equal(
                "There are 2 available motorcycles matching your criteria!"
            );
        });

        it("should return correct result when none match", function() {
            expect(motorcycleRider.motorcycleShowroom(["500", "600"], 100)).to.equal(
                "There are 0 available motorcycles matching your criteria!"
            );
        });
    });

    describe("otherSpendings", function() {

        it("should throw error for invalid parameters", function() {
            expect(() => motorcycleRider.otherSpendings("helmet", ["engine oil"], true)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], "oil filter", false)).to.throw("Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], "true")).to.throw("Invalid Information!");
        });

        it("should calculate total price without discount", function() {
            expect(
                motorcycleRider.otherSpendings(["helmet", "jacket"], ["engine oil", "oil filter"], false)
            ).to.equal("You spend $600.00 for equipment and consumables!");
        });

        it("should calculate total price with discount", function() {
            expect(
                motorcycleRider.otherSpendings(["helmet"], ["engine oil"], true)
            ).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
        });

        it("should handle empty arrays correctly", function() {
            expect(
                motorcycleRider.otherSpendings([], [], false)
            ).to.equal("You spend $0.00 for equipment and consumables!");
        });
    });
});