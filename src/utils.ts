export const makeClassName = (args: string[]): string => {
    return args.join(" ");
};

export const sortAsc = (a: any, b: any) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
};

export const sortDesc = (a: any, b: any) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    // a must be equal to b
    return 0;
};
