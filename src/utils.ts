export const makeClassName = (args: string[]): string => {
    return args.join(" ");
};

// export const guid = () => {
//     return "uuid-" + (new Date().getTime().toString(16) + Math.floor(1e7 * Math.random()).toString(16));
// };

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
