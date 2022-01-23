//entry -> output
//https://webpack.js.org/concepts/

const path = require('path');
const isProd = false;

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: isProd ? false : 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};