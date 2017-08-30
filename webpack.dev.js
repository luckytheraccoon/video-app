const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread", "transform-decorators-legacy"]
        }
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
    // new ExtractTextPlugin({ filename: './css/main.css', disable: false, allChunks: true }),
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ],
  entry: './src/js/index.js',
  output: {
    filename: './js/dev.bundle.js',
    path: path.resolve(__dirname, 'js')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src/js"),
      "node_modules"
    ]
  }
}