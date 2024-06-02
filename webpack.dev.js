const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html')})
    ],
    devServer: {
        static: './dist', 
        hot: true,
        open: true,
        compress: true,
        port: 9000,
    },
};