const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: './css/main.css', disable: false, allChunks: true })
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