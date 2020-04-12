# CSS-Grid-ReactJS

React layout component based on [CSS Grid Spec](https://www.w3.org/TR/css-grid-2/)

[![Build Status][travis-badge]][travis]

[travis-badge]: https://travis-ci.com/xalisys/css-grid-reactjs.svg?branch=master
[travis]: https://travis-ci.com/github/xalisys/css-grid-reactjs

```sh
npm i css-grid-reactjs
or
yarn add css-grid-reactjs
```

```jsx
import { HeaderRow, HeaderCell, Cell, Grid, Row } from "css-grid-reactjs";
import "css-grid-reactjs/dist/lib.css";

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

## Features

-   Responsive grid layout with zero media queries
-   Simple API

## Browser Support

See http://caniuse.com/#feat=css-grid

## Related

-   [CSS Grid Spec](https://www.w3.org/TR/css-grid-2/)
-   [React CSS Grid](https://github.com/jxnblk/react-css-grid)

[MIT License](LICENSE.md)
