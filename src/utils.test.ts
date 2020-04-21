const { makeClassName, sort, SortDirection, toggleDirection } = require("./utils");

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

    it("toggleDirection", () => {
        expect(toggleDirection(SortDirection.Ascending)).toBe(SortDirection.Descending);
        expect(toggleDirection(SortDirection.Descending)).toBe(SortDirection.Ascending);
    });

    it("sortAsc", () => {
        const input = [
            {
                rank: 41,
            },
            {
                rank: 6,
            },
            {
                rank: 671,
            },
            {
                rank: 87,
            },
        ];
        const output = sort(input, "rank", SortDirection.Ascending);
        expect(output[0].rank).toBe(6);
    });

    it("sortDesc", () => {
        const input = [
            {
                rank: 41,
            },
            {
                rank: 6,
            },
            {
                rank: 671,
            },
            {
                rank: 87,
            },
        ];
        const output = sort(input, "rank", SortDirection.Descending);
        expect(output[0].rank).toBe(671);
    });
});
