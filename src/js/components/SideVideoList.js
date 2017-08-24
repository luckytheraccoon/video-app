import React from "react";

import ContentItemList from "components/ContentItemList";
import LoadMoreButton from "components/LoadMoreButton";
import { getUrlParameter, buildApiUrl } from "helpers/common";

/**
 * Side Video list block, not an actual page, just a block that is embedded within other pages.
 * @param {object} props - The component properties from within the react context.
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            videos: null,
            total: null
        }
    }
    componentDidMount() {
        fetch(buildApiUrl(["videos", 0, 9, null].join("/"))).then(function (response) {
            return response.json();
        }).then(function (response) {
            this.setState({
                videos: response.videos,
                total: response.total
            });
        }.bind(this));
    }

    render() {

        const loadMoreAction = this.props.loadMoreAction(),
            pageComponents = [];

        if (this.state.videos) {
            this.state.videos.map((video) => {
                if (video._id !== getUrlParameter('video')) {
                    pageComponents.push(
                        <ContentItemList 
                            pageId="side-video-list" 
                            key={video._id} 
                            contentData={video} 
                        />
                    );
                }
            });
        }

        return (
            <div className="div-side-content-list">
                {pageComponents}
                <LoadMoreButton clickAction={loadMoreAction} />
            </div>
        );
    }
}