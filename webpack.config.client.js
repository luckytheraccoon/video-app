const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    context: srcPath,
    target: 'web',

    entry: './client/index.js',
    output: {
        path: distPath,
        filename: 'client.js',
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({ title: 'Client Build',alwaysNotify: true })
    ],
    devtool: 'source-map'
};

