import React, { useCallback } from "react";
import styles from "./cell.scss";
import { CellProps, HeaderCellProps } from "./types";

export const Cell = (props: CellProps) => {
    const { className, children, overrideStyles } = props;

    return (
        <div style={overrideStyles} className={`${styles.cell} ${className}`}>
            {children}
        </div>
    );
};

export const HeaderCell = (props: HeaderCellProps) => {
    const { overrideStyles, onSort, className, children, dataField } = props;
    const sortable = !!onSort;
    const classes = `${styles.cell} ${styles.headerCell} ${className || ""} ${sortable ? styles.sortable : ""}`;

    const onClick = useCallback(
        (e: any) => {
            if (sortable) {
                onSort(dataField);
            }
        },
        [sortable]
    );

    return (
        <div style={overrideStyles} onClick={onClick} className={classes}>
            {children}
        </div>
    );
};
