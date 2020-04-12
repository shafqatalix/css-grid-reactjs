import React, { useEffect, useContext } from "react";
import styles from "./row.scss";
import { GridContext } from "../context";
import { RowProps } from "./types";

export const HeaderRow = (props: RowProps) => {
    const { className, children, overrideStyles } = props;
    const context = useContext(GridContext);
    const classes = `${styles.headerRow} ${className || ""} `;

    useEffect(() => {
        context.setColumnCount(React.Children.count(props.children));
    }, []);

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
    const classes = `${styles.row} ${columnsClass} ${className || ""} `;

    return (
        <div style={overrideStyles} className={classes}>
            {children}
        </div>
    );
};
