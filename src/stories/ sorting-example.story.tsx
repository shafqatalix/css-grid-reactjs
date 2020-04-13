import { storiesOf } from "@storybook/react";
import React, { useCallback, useState } from "react";
import { HeaderRow, HeaderCell, Cell, Grid, Row, utils } from ".."; //"css-grid-reactjs"
import { userData } from "../mocked-data";

const SortingExample = () => {
    const [currentData, setCurrentData] = useState<any>(userData);
    const [sortField, setSortField] = useState<any>(null);
    const [direction, setDirection] = useState<any>(null);

    const onSort = useCallback(
        (field: string) => {
            let targetDirection: any = "asc";
            if (sortField === field) {
                targetDirection = direction === "asc" ? "desc" : "asc";
            }
            setSortField(field);
            setDirection(targetDirection);
            const data = Object.assign({}, currentData);
            data.dataRows = utils.sort<any>(data.dataRows, field, targetDirection);
            setCurrentData(data);
            console.log(`field:${field}, sortedBy:${sortField}, direction:${direction} `);
        },
        [direction, sortField, currentData]
    );

    return (
        <Grid>
            <HeaderRow>
                {currentData.headerRow.map((header, i) => (
                    <HeaderCell key={header.dataField} onSort={onSort} dataField={header.dataField}>
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
                    <Cell>{row.zip}</Cell>
                </Row>
            ))}
        </Grid>
    );
};

storiesOf("Grid", module).add("Sorting Example", () => <SortingExample />);
