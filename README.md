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

[Code Sandbox Example](https://codesandbox.io/s/exciting-pine-rgxn5?file=/src/App.js)

## Features

-   No external dependencies.
-   Typescript support.
-   No media queries, purely based on css-grid spec.
-   FUlly declarative.
-   Simple and liner API.
-   Responsive by default without any additional css.
-   Allow full customization of styles.
-   Supports up to 25 grid columns without distorting UI.

## TODO

-   Improve Docs & Examples.
-   Handle more then 25 columns.

## Browser Support

See http://caniuse.com/#feat=css-grid

## Related

-   [CSS Grid Spec](https://www.w3.org/TR/css-grid-2/)
-   [React CSS Grid](https://github.com/jxnblk/react-css-grid)

[MIT License](LICENSE.md)
