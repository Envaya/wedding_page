const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        })
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                },
            },
        ]
    }
}