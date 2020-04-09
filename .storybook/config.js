import { configure, addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { configureViewport } from "@storybook/addon-viewport";

const req = require.context("../src", true, /\.story\.(ts|tsx)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configureViewport({
  defaultViewport: "responsive",
  viewports: {
    responsive: {
      name: "Responsive",
      styles: {
        width: "100%",
        height: "100%",
      },
      type: "desktop",
    },
    "w1920px+": {
      name: "1920px ...",
      styles: {
        minWidth: "1920px",
        width: "100%",
        height: "100%",
      },
      type: "desktop",
    },
    "w1600-1919px": {
      name: "1600px - 1919px",
      styles: {
        minWidth: "1600px",
        maxWidth: "1919px",
        width: "100%",
        height: "100%",
      },
      type: "desktop",
    },
    "w1440-1599px": {
      name: "1440px - 1599px",
      styles: {
        minWidth: "1440px",
        maxWidth: "1599px",
        width: "100%",
        height: "100%",
      },
      type: "desktop",
    },
    "w1366-1439px": {
      name: "1366px - 1439px",
      styles: {
        minWidth: "1366px",
        maxWidth: "1439px",
        width: "100%",
        height: "100%",
      },
      type: "desktop",
    },
    "w1280-1365px": {
      name: "1280px - 1365px",
      styles: {
        minWidth: "1280px",
        maxWidth: "1365px",
        width: "100%",
        height: "100%",
      },
      type: "desktop",
    },
    "w1024-1279px": {
      name: "1024px - 1279px",
      styles: {
        minWidth: "1024px",
        maxWidth: "1279px",
        width: "100%",
        height: "100%",
      },
      type: "desktop",
    },
  },
});
const optionsCallback = (options) => ({
  panelExclude: [...options.panelExclude, /(Warning|exp)/],
});
addDecorator((storyFn, context) =>
  withConsole(optionsCallback)(storyFn)(context)
);
configure(loadStories, module);
