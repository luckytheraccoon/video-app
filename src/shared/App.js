import React, { Component } from 'react';

import VideoList from './pageComponents/VideoList';
import VideoDetail from './pageComponents/VideoDetail';
import ImageList from './pageComponents/ImageList';
import MusicList from './pageComponents/MusicList';

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