import { storiesOf } from "@storybook/react";
import React, { useCallback, useState } from "react";
import { HeaderRow, HeaderCell, Cell, Grid, Row } from ".."; //"css-grid-reactjs"
import { userData } from "../mocked-data";
import style from "./style.scss";

const StylingExample = () => {
    const [sortedBy, setSortedBy] = useState<any>(null);
    const [sortDirection, setSortDirection] = useState<any>(null);

    const onHover = useCallback((rowData: any) => {
        console.log(rowData);
    }, []);

    const onSort = useCallback(
        (field: string) => {
            const direction = sortDirection === "asc" ? "des" : "asc";
            setSortedBy(field);
            setSortDirection(direction);
        },
        [sortedBy, sortDirection]
    );

    return (
        <Grid className={style.grid}>
            <HeaderRow className={style.headerRow}>
                {userData.headerRow.map(header => (
                    <HeaderCell
                        sortedBy={sortedBy}
                        sortDirection={sortDirection}
                        className={style.headerCell}
                        key={header.dataField}
                        dataField={header.dataField}
                        onSort={onSort}
                    >
                        {header.label}
                    </HeaderCell>
                ))}
            </HeaderRow>
            {userData.dataRows.map((row, i) => (
                <Row rowData={row} onHover={onHover} key={i} hoverClassName={style.hoverRow}>
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

storiesOf("Grid", module).add("Styling Example", () => <StylingExample />);
