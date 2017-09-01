import express from 'express';
import React from 'react';
import App from '../shared/App';
import BadRoute from '../shared/BadRoute';
import Error from '../shared/Error';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
import render from './render';
import fetch from 'node-fetch';
import Video from './videoModel';
import controller from './controller';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/VideoApp', { useMongoClient: true }, function (err) {
    if (err) {
        console.err(err);
    } else {
        console.log('Connected to MongoDB');
    }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = [
    '/'
];

sourceMapSupport.install();

app.use('/static', express.static('./dist'));


app.route('/api/videos')
    .get(controller.list_all_videos)
    .post(controller.create_a_video);

app.route('/api/videos/:page?/:limit?/:search?')
    .get(controller.list_all_videos);

app.route('/api/video/:videoId')
    .get(controller.read_a_video)
    .put(controller.update_a_video)
    .delete(controller.delete_a_video);


app.get('*', (req, res) => {
    const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    if (!match) {
        res.status(404).send(render(<BadRoute />));
        return;
    }
    res.status(200).send(render(
        <Router context={{}} location={req.url}>
            <App />
        </Router>
    ));
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
