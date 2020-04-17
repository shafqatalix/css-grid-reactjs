import { storiesOf } from "@storybook/react";
import React from "react";
import { HeaderRow, HeaderCell, Cell, Grid, Row } from ".."; //"css-grid-reactjs"
import { userData } from "../mocked-data";
import style from "./variable-size-columns.scss";

const VariableSizeColumns = () => {
    return (
        <Grid className={style.grid}>
            <HeaderRow className={style.headerRow}>
                {userData.headerRow.map(header => (
                    <HeaderCell className={style.headerCell} key={header.dataField} dataField={header.dataField}>
                        {header.label}
                    </HeaderCell>
                ))}
            </HeaderRow>
            {userData.dataRows.map((row, i) => (
                <Row className={style.row} rowData={row} key={i} hoverClassName={style.hoverRow}>
                    <Cell className={style.cell}>{row.name}</Cell>
                    <Cell className={style.cell}>{row.address}</Cell>
                    <Cell className={style.cell}>{row.city}</Cell>
                    <Cell className={style.cell}>{row.state}</Cell>
                    <Cell className={style.cell}>{row.zip}</Cell>
                </Row>
            ))}
        </Grid>
    );
};

storiesOf("Grid", module).add("Variable Size Columns Example", () => <VariableSizeColumns />);
