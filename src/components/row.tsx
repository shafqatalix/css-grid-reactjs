import React, { useCallback, useEffect, useContext } from "react";
import styles from "./row.scss";
import { GridContext } from "../context";
import { RowProps } from "./types";
import { makeClassName } from "../utils";

export const HeaderRow = (props: RowProps) => {
    const { rowData, onHover, onHoverExit, className, children, overrideStyles } = props;
    const context = useContext(GridContext);
    const classes = makeClassName([styles.headerRow, className]);

    useEffect(() => {
        let count = React.Children.toArray(children).length;
        context.setColumnCount(count);
    }, [children]);

    return (
        <Row
            rowData={rowData}
            onHover={onHover}
            onHoverExit={onHoverExit}
            overrideStyles={overrideStyles}
            className={classes}
        >
            {children}
        </Row>
    );
};

export const Row = (props: RowProps) => {
    const { onClick, rowData, onHover, onHoverExit, className, children, overrideStyles } = props;

    const context = useContext(GridContext);
    const columnsClass = styles[`columns-${context.columnCount}`];
    const classes = makeClassName([styles.row, columnsClass, className]);
    const onMouseOver = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            onHover && onHover(rowData);
        },
        [rowData, onHover]
    );

    const onMouseOut = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            onHoverExit && onHoverExit(rowData);
        },
        [rowData, onHoverExit]
    );

    const onClickHandler = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            onClick && onClick(rowData);
        },
        [rowData, onClick]
    );

    return (
        <div
            onClick={onClickHandler}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            style={overrideStyles}
            className={classes}
        >
            {children}
        </div>
    );
};
