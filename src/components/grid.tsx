import React, { useState } from "react";
import styles from "./grid.scss";
import { GridContext } from "../context";
import { GridProps } from "./types";

export const Grid = (props: GridProps) => {
    const { children, className, overrideStyles } = props;

    const [columnCount, setColumnCount] = useState<number>(0);
    const classes = `${styles.grid} ${className || ""}`;

    return (
        <GridContext.Provider value={{ columnCount, setColumnCount }}>
            <div style={overrideStyles} className={classes}>
                {children}
            </div>
        </GridContext.Provider>
    );
};
