const seriesSum = require("../src/js/index.js");

describe("Sum of Series", () => {
    test("should return 1.00 for n = 1", () => {
        expect(seriesSum(1)).toBe(1.0);
	});
	test("should return 1.25 for n = 2", () => {
		expect(seriesSum(2)).toBe(1.25);
    });
    test("should return 1.39 for n = 3", () => {
		expect(seriesSum(3)).toEqual(1.39);
	});
	test("should return 1.49 for n = 4", () => {
		expect(seriesSum(4)).toEqual(1.49);
	});
});