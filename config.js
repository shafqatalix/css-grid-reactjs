const autoprefixer = require("autoprefixer");

const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    sourceMap: true,
    localsConvention: "camelCase",
    modules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]"
    }
  }
};

const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    sourceMap: true,
    plugins: () => [autoprefixer()]
  }
};

module.exports = {
  CSSModuleLoader,
  postCSSLoader
};
