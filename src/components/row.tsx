import React, { useEffect, useContext } from "react";
import styles from "./row.scss";
import { GridContext } from "../context";

type RowProps = { className?: string; children?: any };

export const HeaderRow = (props: RowProps) => {
  const { className, children } = props;
  const context = useContext(GridContext);
  const classes = `${styles.headerRow} ${className || ""} `;

  useEffect(() => {
    context.setColumnCount(React.Children.count(props.children));
  }, []);

  return <Row className={classes}>{children}</Row>;
};

export const Row = (props: RowProps) => {
  const { className, children } = props;
  const context = useContext(GridContext);
  const columnsClass = styles[`columns-${context.columnCount}`];
  const classes = `${styles.row} ${columnsClass} ${className || ""} `;

  return <div className={classes}>{children}</div>;
};
