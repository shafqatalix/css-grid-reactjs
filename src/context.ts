import React from "react";

export const GridContext = React.createContext({
  columnCount: 0,
  setColumnCount: (value: number) => {}
});
