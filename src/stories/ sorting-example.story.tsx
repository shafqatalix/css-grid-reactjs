import { storiesOf } from "@storybook/react";
import React, { useCallback, useState } from "react";
import { HeaderRow, HeaderCell, Cell, Grid, Row, utils } from ".."; //"css-grid-reactjs"
import { userData } from "../mocked-data";
import style from "./sorting-example.scss";

const SortingExample = () => {
    const [currentData, setCurrentData] = useState<any>(userData);
    const [sortedBy, setSortedBy] = useState<any>(null);
    const [sortDirection, setSortDirection] = useState<utils.SortDirection | null>(null);

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
        [sortDirection, sortedBy, currentData]
    );

    return (
        <Grid className={style.grid}>
            <HeaderRow className={style.headerRow}>
                {currentData.headerRow.map((header, i) => (
                    <HeaderCell
                        sortDirection={sortDirection}
                        sortedBy={sortedBy}
                        key={header.dataField}
                        onSort={onSort}
                        dataField={header.dataField}
                    >
                        {header.label}
                    </HeaderCell>
                ))}
            </HeaderRow>
            {currentData.dataRows.map((row, i) => (
                <Row key={i}>
                    <Cell>{row.name}</Cell>
                    <Cell>{row.address}</Cell>
                    <Cell>{row.city}</Cell>
                    <Cell>{row.state}</Cell>
                    <Cell>{row.score}</Cell>
                </Row>
            ))}
        </Grid>
    );
};

storiesOf("Grid", module).add("Sorting Example", () => <SortingExample />);
