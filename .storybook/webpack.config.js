const path = require("path");
const { CSSModuleLoader, postCSSLoader } = require("../config");

const sbConfig = ({ src }) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", CSSModuleLoader, postCSSLoader, "sass-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        include: src,
        use: [
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.story\.tsx?$/,
        loaders: [
          {
            loader: "@storybook/source-loader",
            options: { parser: "typescript" },
          },
        ],
        enforce: "pre",
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".json", ".ts", ".tsx", ".js"],
  },
  stats: "minimal",
});

const getStorybookConfig = ({ config, src }) => {
  let myConfig = sbConfig({ src });

  config.module.rules = config.module.rules.concat(myConfig.module.rules);
  config.plugins = config.plugins.concat(myConfig.plugins);
  config.resolve.extensions = config.resolve.extensions.concat(
    myConfig.resolve.extensions
  );

  return config;
};

module.exports = ({ config }) =>
  getStorybookConfig({ config, src: path.resolve(__dirname, "../src") });
