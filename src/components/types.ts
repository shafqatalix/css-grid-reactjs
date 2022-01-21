import { CSSProperties } from "react";
import { SortDirection } from "../utils";

type DefaultElementProps = {
    overrideStyles?: CSSProperties;
    className?: string;
    children?: any;
};

export type GridProps = DefaultElementProps & {columnCount?:number};

export type CellProps = DefaultElementProps & {};

export type HeaderCellProps = DefaultElementProps & {
    dataField: string;
    width?: number;
    onSort?: (dataField) => any;
    sortedBy?: string;
    sortDirection?: SortDirection;
};

export type RowProps = DefaultElementProps & {
    rowData?: any;
    onHover?: (rowData?: any) => any;
    onHoverExit?: (rowData?: any) => any;
    onClick?: (rowData?: any) => any;
};
