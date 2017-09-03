import React from "react";
import ContentItemList from "./ContentItemList";
import LoadMoreButton from "./LoadMoreButton";
import { buildApiUrl } from "./common";

/**
 * Side Video list block, not an actual page, just a block that is embedded within other pages.
 * @param {object} props - The component properties from within the react context.
 */
const initialState = {
    requestVideos: null,
    nextPage: 0,
    loadedVideosCount: 0,
    limit: 2,
    loadedVideos: null,
    total: null,
    contentLoading: false
};

export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.fetchVideos = this.fetchVideos.bind(this);
        this.state = initialState;
    }

    fetchVideos() {

        let loadedVideos = [];

        if (this.state.contentLoading) {
            return; //halt because we're currently loading
        }

        if (this.state.loadedVideos) {
            loadedVideos = this.state.loadedVideos;
        }

        this.setState({
            contentLoading: true
        });

        fetch(buildApiUrl(["videos", this.state.nextPage, this.state.limit, this.props.currVideo].join("/"))).then(function (response) {
            return response.json();
        }).then(function (response) {

            response.videos.map((video) => {
                loadedVideos.push(
                    <ContentItemList
                        pageId="side-video-list"
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

    componentDidUpdate(prevProps) {
        const oldV = prevProps.currVideo,
            newV = this.props.currVideo;
        if (newV !== oldV) {
            this.setState(
                initialState,
                ()=>{
                    this.fetchVideos()
                }
            );
        }
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
            <div className="div-side-content-list">
                {this.state.loadedVideos}
                <LoadMoreButton loading={loading} allLoaded={allLoaded} clickAction={loadMoreAction} />
            </div>
        );
    }
}