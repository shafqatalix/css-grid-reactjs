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

function sortAsc(a: any, b: any) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

function sortByDate(a: string, b: string) {
    return Date.parse(a) - Date.parse(b);
}

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
const defaultSortOptions: SortOptions = {
    autoCheckDateFields: true,
    dateFieldRegex: /date/i,
    rawFieldSuffix: "Raw",
};
type SortOptions = {
    autoCheckDateFields: boolean;
    dateFieldRegex: RegExp;
    rawFieldSuffix: string;
};
/**
 * Sorts list of objects, by auto checking for raw field, if field with [fieldName]Raw exists
 * then uses that for sorting otherwise fall back to field name provided
 * @param data Array of objects to be sorted
 * @param field name of sort fields
 * @param direction sort direction
 * @param options options {
 *  autoCheckDateFields: boolean, default: true
 *  dateFieldRegex: RegExp, to check for date fields default: /date/i
 *  rawFieldSuffix: string, default: 'Raw'
 * }
 */
export function sortSmart<T = any>(data: Array<T>, field: string, direction: SortDirection, options?: SortOptions) {
    const { autoCheckDateFields, dateFieldRegex, rawFieldSuffix } = Object.assign({}, defaultSortOptions, options);
    const sorted = data.sort((a, b) => {
        const rawName = `${field}${rawFieldSuffix}`;
        const actualField = a.hasOwnProperty(rawName) ? rawName : field;
        const first = a[actualField];
        const second = b[actualField];
        const isDateField = autoCheckDateFields && actualField.match(dateFieldRegex);
        if (isDateField) {
            return sortByDate(first, second);
        }
        return sortAsc(first, second);
    });
    if (direction === SortDirection.Descending) {
        return sorted.reverse();
    }
    return sorted;
}
