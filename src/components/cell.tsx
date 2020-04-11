import React, { useCallback, CSSProperties } from "react";
import styles from "./cell.scss";

type CellProps = {
  overrideStyles?: CSSProperties;
  className?: string;
  children?: any;
};
type HeaderCellProps = CellProps & {
  dataField: string;
  width?: number;
  onSort?: (dataField) => any;
};

export const Cell = (props: CellProps) => {
  const { className, children } = props;

  return <div className={`${styles.cell} ${className}`}>{children}</div>;
};

export const HeaderCell = (props: HeaderCellProps) => {
  const { overrideStyles, onSort, className, children, dataField } = props;
  const sortable = !!onSort;
  const classes = `${styles.cell} ${styles.headerCell} ${className || ""} ${
    sortable ? styles.sortable : ""
  }`;

  const onClick = useCallback(
    (e: any) => {
      if (sortable) {
        onSort(dataField);
      }
    },
    [sortable]
  );

  return (
    <div style={overrideStyles} onClick={onClick} className={classes}>
      {children}
    </div>
  );
};
