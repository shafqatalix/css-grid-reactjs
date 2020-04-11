import React from "react";
import { storiesOf } from "@storybook/react";
import { HeaderRow, HeaderCell, Cell, Grid, Row } from ".."; //"css-grid-reactjs"

const BasicExample = () => {
    const onSort = (field: string) => {
        console.log(field);
    };
    return (
        <Grid>
            <HeaderRow>
                <HeaderCell onSort={onSort} dataField="name">
                    Name
                </HeaderCell>
                <HeaderCell onSort={onSort} dataField="address">
                    Address
                </HeaderCell>
                <HeaderCell onSort={onSort} dataField="city">
                    City
                </HeaderCell>
                <HeaderCell dataField="state">State</HeaderCell>
                <HeaderCell dataField="zip">Zip</HeaderCell>
                <HeaderCell dataField="year">Year</HeaderCell>
            </HeaderRow>
            <Row>
                <Cell>John Doe</Cell>
                <Cell>23 Randolph St</Cell>
                <Cell>San Francisco</Cell>
                <Cell>CA</Cell>
                <Cell>1234</Cell>
                <Cell>2015</Cell>
            </Row>
            <Row>
                <Cell>Dexter White</Cell>
                <Cell>918 Windsor Avenue</Cell>
                <Cell>Ashland</Cell>
                <Cell>OH</Cell>
                <Cell>44805</Cell>
                <Cell>2018</Cell>
            </Row>
            <Row>
                <Cell>Henrietta Burke</Cell>
                <Cell>40 Hilldale Ave</Cell>
                <Cell>Atlanta</Cell>
                <Cell>GA</Cell>
                <Cell>30303</Cell>
                <Cell>2019</Cell>
            </Row>
            <Row>
                <Cell>Mary Elliott</Cell>
                <Cell>386 Trusel St</Cell>
                <Cell>Newburgh</Cell>
                <Cell>NY</Cell>
                <Cell>12550</Cell>
                <Cell>2017</Cell>
            </Row>
            <Row>
                <Cell>Jo Freeman</Cell>
                <Cell>8 Griffin Court</Cell>
                <Cell>Middletown</Cell>
                <Cell>CT</Cell>
                <Cell>06457</Cell>
                <Cell>2016</Cell>
            </Row>
        </Grid>
    );
};

storiesOf("Grid", module).add("Basic Example", () => <BasicExample />);
