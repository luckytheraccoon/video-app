/**
 * index.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
/* eslint-disable no-console */

import express from 'express';
import React from 'react';
import Main from './Main';
import { StaticRouter as Router, matchPath } from 'react-router';
import render from './render';
import fetch from 'node-fetch';

const routes = [
    '/',
    '/g/:gistId'
];

const app = express();

app.get('*', (req, res) => {
    //const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);


    res.status(200).send(render(
                (
                    <Router context={{}} location={req.url}>
                        <Main />
                    </Router>
                )
            ));
    /*if (!match) {
        res.status(404).send(render("XXX"));
        return;
    }
    fetch('https://api.github.com/gists')
        .then(r => r.json())
        .then(gists => {
            res.status(200).send(render(
                (
                    <Router context={{}} location={req.url}>
                        <Main />
                    </Router>
                ), gists
            ));
        }).catch(err => {
            console.error(err);
            res.status(500).send(render("XXX"));
        });*/
});

app.listen(8080, () => console.log('Demo app listening on port 8080'));