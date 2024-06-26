const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html'})
    ],
    devServer: {
        static: './dist',
        open: true,
        compress: true,
        port: 9000,
    },
};