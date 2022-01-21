import React, { useState } from "react";
import styles from "./grid.scss";
import { GridContext } from "../context";
import { GridProps } from "./types";
import { makeClassName } from "../utils";

export const Grid = (props: GridProps) => {
    const { children, className, overrideStyles } = props;

    const [columnCount, setColumnCount] = useState<number>(props.columnCount || 0);
    const classes = makeClassName([styles.grid, className]);

    return (
        <GridContext.Provider value={{ columnCount, setColumnCount }}>
            <div style={overrideStyles} className={classes}>
                {children}
            </div>
        </GridContext.Provider>
    );
};
