import { storiesOf } from "@storybook/react";
import React, { useCallback, useState } from "react";
import { HeaderRow, HeaderCell, Cell, Grid, Row } from ".."; //"css-grid-reactjs"
import { userData } from "../mocked-data";
import style from "./style.scss";
import { utils } from "../";

const StylingExample = () => {
    const [currentData, setCurrentData] = useState<any>(userData);
    const [sortedBy, setSortedBy] = useState<any>(null);
    const [sortDirection, setSortDirection] = useState<utils.SortDirection | null>(null);

    const onHover = useCallback((rowData: any) => {
        console.log("onHover");
    }, []);

    const onClick = useCallback((rowData: any) => {
        console.log("onClick");
    }, []);

    const onSort = useCallback(
        (field: string) => {
            const direction =
                sortDirection === utils.SortDirection.Ascending
                    ? utils.SortDirection.Descending
                    : utils.SortDirection.Ascending;
            setSortedBy(field);
            setSortDirection(direction);
            const data = Object.assign({}, currentData);
            data.dataRows = utils.sort<any>(data.dataRows, field, direction);
            setCurrentData(data);
        },
        [sortedBy, sortDirection, currentData]
    );

    return (
        <Grid className={style.grid}>
            <HeaderRow className={style.headerRow}>
                {currentData.headerRow.map(header => (
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
            {currentData.dataRows.map((row, i) => (
                <Row onClick={onClick} rowData={row} onHover={onHover} key={i} hoverClassName={style.hoverRow}>
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
