import React, { Component } from 'react';
import MainMenu from './MainMenu';
import SearchForm from './SearchForm';
import Footer from './Footer';

export default (props) => {
    return (
        <div className={"div-main " + props.columnClass}>
            <MainMenu />
            <SearchForm />
            {props.children}
            <Footer />
        </div>
    );
}