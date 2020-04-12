import React, { useCallback } from "react";
import styles from "./cell.scss";
import { CellProps, HeaderCellProps } from "./types";
import { makeClassName } from "../utils";

export const Cell = (props: CellProps) => {
    const { className, children, overrideStyles } = props;
    const classes = makeClassName([styles.cell, className]);

    return (
        <div style={overrideStyles} className={classes}>
            {children}
        </div>
    );
};

export const HeaderCell = (props: HeaderCellProps) => {
    const { overrideStyles, onSort, className, children, dataField } = props;
    const sortable = !!onSort ? styles.sortable : null;
    const classes = makeClassName([styles.cell, styles.headerCell, className, sortable]);

    const onClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            sortable && onSort(dataField);
        },
        [sortable, dataField]
    );

    return (
        <div style={overrideStyles} onClick={onClick} className={classes}>
            {children}
        </div>
    );
};
