import { configure, addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

const req = require.context("../src", true, /\.story\.(ts|tsx)$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

const optionsCallback = options => ({
    panelExclude: [...options.panelExclude, /(Warning|exp)/],
});
addDecorator((storyFn, context) => withConsole(optionsCallback)(storyFn)(context));
configure(loadStories, module);
