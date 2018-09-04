var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        open: true,
        overlay: true,
        port: 3000,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'play',
        template: 'src/index.html',
        minify: {
            collapseWhitespace: true
        }
    })],

};