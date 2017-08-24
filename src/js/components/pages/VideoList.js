import React from "react";
import ContentItemList from "components/ContentItemList";
import LoadMoreButton from "components/LoadMoreButton";
import { buildApiUrl } from "helpers/common";
/**
 * Video list page.
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

        //this will return null if we can't actually load more
        const loadMoreAction = this.props.loadMoreAction(),
            pageComponents = [];

        if (this.state.videos) {
            this.state.videos.map((video) => {
                pageComponents.push(
                    <ContentItemList 
                        pageId="video-list" 
                        key={video._id} 
                        contentData={video} 
                    />
                );
            });
        }

        return (
            <div className="div-content-list">
                {pageComponents}
                <LoadMoreButton clickAction={loadMoreAction} />
            </div>
        );
    }


}