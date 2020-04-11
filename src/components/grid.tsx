import React, { useState } from "react";
import styles from "./grid.scss";
import { GridContext } from "../context";

export type GridProps = {
  className?: string;
  children?: any;
};

export const Grid = (props: GridProps) => {
  const [columnCount, setColumnCount] = useState<number>(0);
  const { children, className } = props;
  const classes = `${styles.grid} ${className || ""}`;

  return (
    <GridContext.Provider value={{ columnCount, setColumnCount }}>
      <div className={classes}>{children}</div>
    </GridContext.Provider>
  );
};
