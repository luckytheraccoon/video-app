import React, { Component } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { Link, Route } from 'react-router-dom';

export default () => (
    <div>
        <Route path="/" exact component={VideoList} />
        <Route path="/video/:id" component={VideoDetail} />
    </div>
);