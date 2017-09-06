import React from "react";
import Main from '../Main';
import ItemThumbnailList from "../ItemThumbnailList";


export default class extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Main className="div--item-list">
                <ItemThumbnailList apiRoute="videos" />
            </Main>
        );
    }


}