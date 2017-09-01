import React, { Component } from 'react';
import Main from './Main';
import MainMenu from './MainMenu';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Footer from './Footer';
import { canUseDOM } from './common';
import { Link, Route } from 'react-router-dom';

export default () => (
    <div className="div-main">
        <MainMenu />
        <div className="div-maincontent-wrapper">
            <Route path="/" exact component={VideoList} />
            <Route path="/video/:id" component={VideoDetail} />
        </div>
        <Footer />
    </div>
);