import React from "react";
import Main from './Main';
import ContentItemList from "./ContentItemList";
import LoadMoreButton from "./LoadMoreButton";
import { buildApiUrl } from "./common";

/**
 * Video list page.
 * @param {object} props - The component properties from within the react context.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.fetchVideos = this.fetchVideos.bind(this);
        this.state = {
            requestVideos: null,
            nextPage: 0,
            loadedVideosCount: 0,
            limit: 3,
            loadedVideos: [],
            total: null,
            contentLoading: false
        }
    }

    fetchVideos() {

        if (this.state.contentLoading) {
            return; //halt because we're currently loading
        }

        this.setState({
            contentLoading: true
        });

        fetch(buildApiUrl(["videos", this.state.nextPage, this.state.limit].join("/"))).then(function (response) {
            return response.json();
        }).then(function (response) {

            const loadedVideos = this.state.loadedVideos;

            response.videos.map((video) => {
                loadedVideos.push(
                    <ContentItemList
                        pageId="video-list"
                        key={video._id}
                        contentData={video}
                    />
                );
            });

            this.setState({
                requestVideos: response.videos,
                loadedVideosCount: this.state.loadedVideosCount + response.videos.length,
                nextPage: this.state.nextPage + this.state.limit,
                loadedVideos: loadedVideos,
                total: response.total,
                contentLoading: false
            });
        }.bind(this));
    }

    componentDidMount() {
        this.fetchVideos();
    }

    render() {

        //this will return null if we can't actually load more
        let allLoaded = false,
            loading = false,
            loadMoreAction = this.fetchVideos;

        if (this.state.loadedVideosCount >= this.state.total) {
            allLoaded = true;
            loadMoreAction = null;
        }

        if (this.state.contentLoading) {
            loading = true;
        }

        return (
            <Main columnClass="div--video-list">
                <div className="div--video-list-wrapper">
                    <div className="div--video-wrapper-inner">
                        {this.state.loadedVideos}
                    </div>
                    <LoadMoreButton loading={loading} allLoaded={allLoaded} clickAction={loadMoreAction} />
                </div>
            </Main>
        );
    }


}