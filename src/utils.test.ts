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

    it("Smart with Date fields: Asc", () => {
        const input = [
            {
                startDate: "08 Apr 2018",
            },
            {
                startDate: "19 Dec 2098",
            },
            {
                startDate: "22 Jan 2019",
            },
        ];
        const output = sortSmart(input, "startDate", SortDirection.Ascending);
        expect(output[0].startDate).toBe("08 Apr 2018");
        expect(output[2].startDate).toBe("19 Dec 2098");
    });

    it("Smart with Date fields: Des", () => {
        const input = [
            {
                startDate: "08 Apr 2018",
            },
            {
                startDate: "19 Dec 2098",
            },
            {
                startDate: "22 Jan 2019",
            },
        ];
        const output = sortSmart(input, "startDate", SortDirection.Descending);
        expect(output[0].startDate).toBe("19 Dec 2098");
        expect(output[2].startDate).toBe("08 Apr 2018");
    });

    it("Smart with Date fields with custom fieldNameRegex: Asc", () => {
        const input = [
            {
                start: "08 Apr 2018",
            },
            {
                start: "19 Dec 2098",
            },
            {
                start: "22 Jan 2019",
            },
        ];
        const output = sortSmart(input, "start", SortDirection.Ascending, {
            dateFieldRegex: /start/i,
        });
        expect(output[0].start).toBe("08 Apr 2018");
        expect(output[2].start).toBe("19 Dec 2098");
    });

    it("Smart with Date fields with custom fieldNameRegex: Des", () => {
        const input = [
            {
                start: "08 Apr 2018",
            },
            {
                start: "19 Dec 2098",
            },
            {
                start: "22 Jan 2019",
            },
        ];
        const output = sortSmart(input, "start", SortDirection.Descending, {
            dateFieldRegex: /start/i,
        });

        expect(output[0].start).toBe("19 Dec 2098");
        expect(output[2].start).toBe("08 Apr 2018");
    });
});
