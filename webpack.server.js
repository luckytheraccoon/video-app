const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './src/js/components/server.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/components/servere.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                    query: {
                    presets: ["es2015", "react"],
                    plugins: ["transform-object-rest-spread", "transform-decorators-legacy"]
                    }
            }
        ]
    },
    externals: nodeExternals(),
   // devtool: 'source-map'
};