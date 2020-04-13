import { storiesOf } from "@storybook/react";
import React, { useCallback } from "react";
import { HeaderRow, HeaderCell, Cell, Grid, Row } from ".."; //"css-grid-reactjs"
import { userData } from "../mocked-data";
import style from "./style.scss";

const StylingExample = () => {
    const onHover = useCallback((rowData: any) => {
        console.log(rowData);
    }, []);

    return (
        <Grid>
            <HeaderRow>
                {userData.headerRow.map(header => (
                    <HeaderCell key={header.dataField} dataField={header.dataField}>
                        {header.label}
                    </HeaderCell>
                ))}
            </HeaderRow>
            {userData.dataRows.map((row, i) => (
                <Row rowData={row} onHover={onHover} key={i} hoverClassName={style.hoverRow}>
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

storiesOf("Grid", module).add("Styling Example", () => <StylingExample />);
