import React, { useCallback, useState, useEffect, useContext } from "react";
import styles from "./row.scss";
import { GridContext } from "../context";
import { RowProps } from "./types";
import { makeClassName } from "../utils";

export const HeaderRow = (props: RowProps) => {
    const { rowData, onHover, onHoverExit, hoverClassName, className, children, overrideStyles } = props;
    const context = useContext(GridContext);
    const classes = `${styles.headerRow} ${className || ""} `;

    useEffect(() => {
        context.setColumnCount(React.Children.count(children));
    }, [children]);

    return (
        <Row
            rowData={rowData}
            onHover={onHover}
            onHoverExit={onHoverExit}
            overrideStyles={overrideStyles}
            className={classes}
            hoverClassName={hoverClassName}
        >
            {children}
        </Row>
    );
};

export const Row = (props: RowProps) => {
    const { rowData, onHover, onHoverExit, className, hoverClassName, children, overrideStyles } = props;
    const [currentHoverClass, setCurrentHoverClass] = useState<string>("");
    const context = useContext(GridContext);
    const columnsClass = styles[`columns-${context.columnCount}`];
    const classes = makeClassName([styles.row, columnsClass, className, currentHoverClass]);
    const onMouseOver = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            setCurrentHoverClass(hoverClassName);
            onHover && onHover(rowData);
        },
        [rowData, hoverClassName]
    );

    const onMouseOut = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            setCurrentHoverClass("");
            onHoverExit && onHoverExit(rowData);
        },
        [rowData, hoverClassName]
    );

    return (
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} style={overrideStyles} className={classes}>
            {children}
        </div>
    );
};
