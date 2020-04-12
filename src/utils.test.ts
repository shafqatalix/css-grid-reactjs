const { makeClassName, sortAsc, sortDesc } = require("./utils");

describe("makeClassNames()", () => {
    it("empty classes", () => {
        expect(makeClassName([])).toBe("");
        expect(makeClassName([null])).toBe("");
        expect(makeClassName([undefined])).toBe("");
        expect(makeClassName([" "])).toBe(" ");
    });

    it("class names", () => {
        expect(makeClassName(["a"])).toBe("a");
        expect(makeClassName(["a", "b"])).toBe("a b");
    });

    it("sortAsc", () => {
        const input = [10, 5, 2];
        const output = input.sort(sortAsc);
        expect(output[0]).toBe(2);
    });

    it("sortDesc", () => {
        const input = [2, 5, 45];
        const output = input.sort(sortDesc);
        expect(output[0]).toBe(45);
    });
});
