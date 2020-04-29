export enum SortDirection {
    Ascending = "asc",
    Descending = "des",
}

export const makeClassName = (args: string[]): string => {
    return args.join(" ");
};

/**
 * Simple guid generator.
 */
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

/**
 * Toggle sort direction.
 * @param inputDirection Toggles sort direction.
 */
export const toggleDirection = inputDirection => {
    const direction = inputDirection === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending;
    return direction;
};

/**
 * Sort list of objects by provide field.
 * @param data Array of objects to be sorted
 * @param field name of sort fields
 * @param direction sort direction
 */
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

/**
 * Sorts list of objects, by auto checking for raw field, if field with [fieldName]Raw exists
 * then uses that for sorting otherwise fall back to field name provided
 * @param data Array of objects to be sorted
 * @param field name of sort fields
 * @param direction sort direction
 */
export function sortSmart<T = any>(data: Array<T>, field: string, direction: SortDirection) {
    const sorted = data.sort((a, b) => {
        const rawName = `${field}Raw`;
        const actualField = a.hasOwnProperty(rawName) ? rawName : field;
        const first = a[actualField];
        const second = b[actualField];
        return sortAsc(first, second);
    });
    if (direction === SortDirection.Descending) {
        return sorted.reverse();
    }
    return sorted;
}
