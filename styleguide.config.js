const path = require("path");
const { CSSModuleLoader, postCSSLoader } = require("./config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    ignore: ["**/*.js", "**/*.ts", "**/*.story.tsx"],
    propsParser: require("react-docgen-typescript").withCustomConfig("./tsconfig.json").parse,
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, ".tsx");
        return `import { ${name} } from 'css-grid-reactjs';`;
    },
    usageMode: "expand",
    webpackConfig: {
        output: {
            path: path.resolve("docsx"),
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: path.resolve(__dirname, "./src"),
                    use: [
                        {
                            loader: "ts-loader",
                        },
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, CSSModuleLoader, postCSSLoader, "sass-loader"],
                },
            ],
        },
        plugins: [new MiniCssExtractPlugin()],
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
    },
    sections: [
        {
            name: "Getting Started",
            content: "src/docs/getting-started.md",
        },
        {
            name: "Components",
            components: ["src/components/**/*.tsx"],
        },
    ],
};
