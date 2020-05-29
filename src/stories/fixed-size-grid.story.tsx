import { storiesOf } from "@storybook/react";
import React from "react";
import { HeaderRow, HeaderCell, Cell, FixedGrid, Row } from ".."; //"css-grid-reactjs"
import { userData } from "../mocked-data";
import style from "./fixed-size-grid.scss";

const FixedSizeGridExample = () => {
    return (
        <FixedGrid className={style.grid}>
            <HeaderRow className={style.headerRow}>
                {userData.headerRow.map(header => (
                    <HeaderCell
                        className={`${style.headerCell} ${style[header.dataField]}`}
                        key={header.dataField}
                        dataField={header.dataField}
                    >
                        {header.label}
                    </HeaderCell>
                ))}
            </HeaderRow>
            {userData.dataRows.map((row, i) => (
                <Row className={style.row} rowData={row} key={i} hoverClassName={style.hoverRow}>
                    <Cell className={style["name"]}>{row.name}</Cell>
                    <Cell className={style["address"]}>{row.address}</Cell>
                    <Cell className={style["city"]}>{row.city}</Cell>
                    <Cell className={style["state"]}>{row.state}</Cell>
                    <Cell className={style["score"]}>{row.score}</Cell>
                </Row>
            ))}
        </FixedGrid>
    );
};

storiesOf("Grid", module).add("Fixed Size Grid Example", () => <FixedSizeGridExample />);
