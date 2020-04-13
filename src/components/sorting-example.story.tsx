import { storiesOf } from "@storybook/react";
import React, { useCallback, useState } from "react";
import { HeaderRow, HeaderCell, Cell, Grid, Row, utils } from ".."; //"css-grid-reactjs"

const data = {
    headerRow: [
        {
            dataField: "name",
            label: "Name",
        },
        {
            dataField: "address",
            label: "Address",
        },
        {
            dataField: "city",
            label: "City",
        },
        {
            dataField: "state",
            label: "State",
        },
        {
            dataField: "zip",
            label: "Zip",
        },
    ],
    dataRows: [
        {
            name: "John Doe",
            address: "23 Randolph St",
            city: "San Francisco",
            state: "CA",
            zip: "1234",
        },
        {
            name: "Dexter White",
            address: "918 Windsor Avenue",
            city: "Ashland",
            state: "OH",
            zip: "44805",
        },
        {
            name: "Henrietta Burke",
            address: "40 Hilldale Ave",
            city: "Atlanta",
            state: "GA",
            zip: "30303",
        },
        {
            name: "Mary Elliott",
            address: "386 Trusel St",
            city: "Newburgh",
            state: "NY",
            zip: "12550",
        },

        {
            name: "Jo Freeman",
            address: "8 Griffin Court",
            city: "Middletown",
            state: "CT",
            zip: "06457",
        },
    ],
};

const sort = (currentData, field, direction) => {
    let copy = JSON.parse(JSON.stringify(currentData));
    const sortFn = direction === "asc" ? utils.sortAsc : utils.sortDesc;
    const sorted = copy.dataRows.sort((a, b) => {
        const first = a[field];
        const second = b[field];
        return sortFn(first, second);
    });
    copy.dataRows = sorted;
    return copy;
};

const SortingExample = props => {
    const [currentData, setCurrentData] = useState<any>(data);
    const [sortField, setSortField] = useState<any>(null);
    const [direction, setDirection] = useState<any>(null);

    const onSort = useCallback(
        (field: string) => {
            let targetDirection = "asc";
            if (sortField === field) {
                targetDirection = direction === "asc" ? "desc" : "asc";
            }
            setSortField(field);
            setDirection(targetDirection);
            setCurrentData(sort(currentData, field, targetDirection));

            console.log(`field:${field}, sortedBy:${sortField}, direction:${direction} `);
        },
        [direction, sortField, currentData]
    );

    return (
        <Grid>
            <HeaderRow>
                {currentData.headerRow.map((d, i) => (
                    <HeaderCell key={d.dataField + i} onSort={onSort} dataField={d.dataField}>
                        {d.label}
                    </HeaderCell>
                ))}
            </HeaderRow>
            {currentData.dataRows.map((d, i) => (
                <Row key={i + d.name}>
                    <Cell>{d.name}</Cell>
                    <Cell>{d.address}</Cell>
                    <Cell>{d.city}</Cell>
                    <Cell>{d.state}</Cell>
                    <Cell>{d.zip}</Cell>
                </Row>
            ))}
        </Grid>
    );
};

storiesOf("Grid", module).add("Sorting Example", () => <SortingExample />);
