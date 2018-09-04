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
        port: 5500,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'play',
        template: 'src/index.html',
        minify: {
            collapseWhitespace: true
        }
    })],
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};