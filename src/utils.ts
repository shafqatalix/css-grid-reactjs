export enum SortDirection {
    Ascending = "asc",
    Descending = "des",
}

export const makeClassName = (args: string[]): string => {
    return args.join(" ");
};

export const guid = () => {
    return "uuid-" + (new Date().getTime().toString(16) + Math.floor(1e7 * Math.random()).toString(16));
};

const sortAsc = (a: any, b: any) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
};

export const toggleDirection = inputDirection => {
    const direction = inputDirection === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending;
    return direction;
};

export function sort<T = any>(data: Array<T>, field: string, direction: SortDirection) {
    const sorted = data.sort((a, b) => {
        const first = a[field];
        const second = b[field];
        return sortAsc(first, second);
    });
    if (direction === SortDirection.Descending) {
        return sorted.reverse();
    }
    return sorted;
}
