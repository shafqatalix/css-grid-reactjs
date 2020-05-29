# CSS-Grid-ReactJS

React layout component based on [CSS Grid Spec](https://www.w3.org/TR/css-grid-2/)

[![Build Status][travis-badge]][travis]

[travis-badge]: https://travis-ci.com/xalisys/css-grid-reactjs.svg?branch=master
[travis]: https://travis-ci.com/github/xalisys/css-grid-reactjs

[Storybook Examples](https://xalisys.github.io/css-grid-reactjs/docs/index.html)

[API Styleguide](https://xalisys.github.io/css-grid-reactjs/styleguide/index.html)

[Code Sandbox Example](https://codesandbox.io/s/exciting-pine-rgxn5?file=/src/App.js)

```sh
npm i css-grid-reactjs
or
yarn add css-grid-reactjs
```

```jsx
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

## Features

-   Typescript support.
-   No media queries, purely based on css-grid spec.
-   Fully declarative.
-   Simple and liner API.
-   Responsive by default without any additional css.
-   Allows Fixed size gird with scrollbar on content overflow.
-   Allow full customization of styles.
-   Supports up to 30 grid columns without distorting UI.

## TODO

-   Improve Docs & Examples.
-   Pagination component.
-   Add unit-tests.

## Browser Support

See http://caniuse.com/#feat=css-grid

## Related

-   [React CSS Grid](https://github.com/jxnblk/react-css-grid)

[MIT License](LICENSE.md)
