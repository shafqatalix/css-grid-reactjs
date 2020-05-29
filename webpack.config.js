const path = require("path");
const { CSSModuleLoader, postCSSLoader } = require("./config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const config = {
    devtool: "source-map",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        libraryTarget: "commonjs2",
        globalObject: "this",
        path: path.resolve("dist"),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, CSSModuleLoader, postCSSLoader, "sass-loader"],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: true,
                        },
                    },
                ],
            },
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
                test: /\.(png|jpg|jpeg|svg)(\?.+)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 80192,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "lib.css" })],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                    keep_fnames: true,
                },
                extractComments: true,
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: { removeAll: true },
                    map: {
                        inline: false,
                        annotation: true,
                    },
                },
            }),
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    externals: {
        react: "react",
        "react-dom": "react-dom",
    },
    stats: "minimal",
};

module.exports = config;
