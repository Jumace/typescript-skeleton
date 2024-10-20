import { someFunction } from "../src/Index";

describe("someFunction", () => {
    it("returns an empty array", () => {
        const result = someFunction();

        expect(result).toStrictEqual([]);
    });
});
