\* This library requires React v16.6 or later.

## Install ss-grid-reactjs

```bash
npm i css-grid-reactjs
#OR
yarn add css-grid-reactjs
```

## Basic Example

You can load basic components such has:

```js static
import { HeaderRow, HeaderCell, Cell, Grid, Row } from "css-grid-reactjs";
import "css-grid-reactjs/dist/lib.css";

const onSort = (field: string) => {
    console.log(`onSort has been called for data-field:${field}`);
};

<Grid>
    <HeaderRow>
        <HeaderCell onSort={onSort} dataField="name">
            Name
        </HeaderCell>
        <HeaderCell dataField="address">Address</HeaderCell>
    </HeaderRow>
    <Row>
        <Cell>John Doe</Cell>
        <Cell>23 Randolph St</Cell>
    </Row>
    <Row>
        <Cell>Dexter White</Cell>
        <Cell>918 Windsor Avenue</Cell>
    </Row>
</Grid>;
```
