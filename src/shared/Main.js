import React, { Component } from 'react';
import MainMenu from './MainMenu';
import Footer from './Footer';

export default (props) => {
    return (
        <div className={"div-main " + props.columnClass}>
            <MainMenu />
            {props.children}
            <Footer />
        </div>
    );
}