const { makeClassName, sort, sortSmart, SortDirection, toggleDirection } = require("./utils");

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

    it("Smart SortAsc", () => {
        const input = [
            {
                rank: 41,
                rankRaw: 3,
            },
            {
                rank: 133,
                rankRaw: 1,
            },
            {
                rank: 57,
                rankRaw: 2,
            },
        ];
        const output = sortSmart(input, "rank", SortDirection.Ascending);
        expect(output[0].rank).toBe(133);
        expect(output[1].rank).toBe(57);
        expect(output[2].rank).toBe(41);
    });

    it("Smart SortDes", () => {
        const input = [
            {
                rank: 41,
                rankRaw: 3,
            },
            {
                rank: 133,
                rankRaw: 1,
            },
            {
                rank: 57,
                rankRaw: 2,
            },
        ];
        const output = sortSmart(input, "rank", SortDirection.Descending);
        expect(output[0].rank).toBe(41);
        expect(output[1].rank).toBe(57);
        expect(output[2].rank).toBe(133);
    });
});
