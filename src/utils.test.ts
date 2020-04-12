const { makeClassName } = require("./utils");

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
});
