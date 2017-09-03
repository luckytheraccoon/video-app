import React, { Component } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ImageList from './ImageList';
import MusicList from './MusicList';
import { Link, Route } from 'react-router-dom';

export default () => (
    <div>
        <Route path="/" exact component={VideoList} />
        <Route path="/videos" exact component={VideoList} />
        <Route path="/images" exact component={ImageList} />
        <Route path="/music" exact component={MusicList} />
        <Route path="/video/:id" component={VideoDetail} />
    </div>
);