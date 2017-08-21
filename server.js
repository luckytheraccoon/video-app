/*var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});*/

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path'),
    webpack = require("webpack"),
    webpackMiddleware = require("webpack-dev-middleware"),
    mongoose = require('mongoose'),
    Video = require('./api/models/videoModel'), //created model loading here
    bodyParser = require('body-parser'),
    cors = require('cors');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/VideoApp');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./api/routes/videoRoutes'); //importing route
routes(app); //register the route


app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/bootstrap", express.static(__dirname + '/bootstrap'));

app.listen(port);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.use(webpackMiddleware(webpack({
	module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
            query: {
              presets: ["es2015","react"],
              plugins: ["transform-object-rest-spread","transform-decorators-legacy"]
            } 
          }
        ]
    },
    entry: './raw_resources/js/src/index.js',
    output: {
      filename: 'dev.bundle.js',
      path: path.resolve(__dirname, 'js')
    }
})));

console.log('todo list RESTful API server started on: ' + port);