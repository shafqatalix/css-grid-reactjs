import React, { useCallback, useState, useEffect, useContext } from "react";
import styles from "./row.scss";
import { GridContext } from "../context";
import { RowProps } from "./types";
import { makeClassName } from "../utils";

export const HeaderRow = (props: RowProps) => {
    const { rowData, onHover, onHoverExit, hoverClassName, className, children, overrideStyles } = props;
    const context = useContext(GridContext);
    const classes = makeClassName([styles.headerRow, className]);

    useEffect(() => {
        let count = React.Children.toArray(children).length;
        context.setColumnCount(count);
    }, [children]);

    return (
        <Row
            //@ts-ignore
            isHeader={true}
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
    ///@ts-ignore
    const isHeader = props.isHeader;
    const { onClick, rowData, onHover, onHoverExit, className, hoverClassName, children, overrideStyles } = props;
    const [currentHoverClass, setCurrentHoverClass] = useState<string>("");
    const context = useContext(GridContext);
    const columnsClass = styles[`columns-${context.columnCount}`];
    const classes = makeClassName([styles.row, columnsClass, className, currentHoverClass]);
    const onMouseOver = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            //@ts-ignore
            if (!isHeader) {
                setCurrentHoverClass(makeClassName([styles.defaultHoverRow, hoverClassName]));
            }
            onHover && onHover(rowData);
        },
        [rowData, hoverClassName, isHeader]
    );

    const onMouseOut = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault();
            if (!isHeader) {
                setCurrentHoverClass("");
            }
            onHoverExit && onHoverExit(rowData);
        },
        [rowData, hoverClassName, isHeader]
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
