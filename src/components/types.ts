import { CSSProperties } from "react";

type DefaultElementProps = {
    overrideStyles?: CSSProperties;
    className?: string;
    children?: any;
};

export type GridProps = DefaultElementProps & {};

export type CellProps = DefaultElementProps & {};

export type HeaderCellProps = DefaultElementProps & {
    dataField: string;
    width?: number;
    onSort?: (dataField) => any;
};

export type RowProps = DefaultElementProps & {};
