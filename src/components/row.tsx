import React, { useEffect, useContext } from "react";
import styles from "./row.scss";
import { GridContext } from "../context";
import { RowProps } from "./types";
import { makeClassName } from "../utils";

export const HeaderRow = (props: RowProps) => {
    const { className, children, overrideStyles } = props;
    const context = useContext(GridContext);
    const classes = `${styles.headerRow} ${className || ""} `;

    useEffect(() => {
        context.setColumnCount(React.Children.count(children));
    }, [children]);

    return (
        <Row overrideStyles={overrideStyles} className={classes}>
            {children}
        </Row>
    );
};

export const Row = (props: RowProps) => {
    const { className, children, overrideStyles } = props;
    const context = useContext(GridContext);
    const columnsClass = styles[`columns-${context.columnCount}`];
    const classes = makeClassName([styles.row, columnsClass, className]);

    return (
        <div style={overrideStyles} className={classes}>
            {children}
        </div>
    );
};
