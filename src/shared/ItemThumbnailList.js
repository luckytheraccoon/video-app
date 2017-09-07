import React from "react";
import ContentItemList from "./ContentItemList";
import LoadMoreButton from "./LoadMoreButton";
import { jsonFetch, buildApiUrl } from "./common";


const initialState = {
    requestItems: null, //the items that came along with the request
    nextPage: 0, //what the next page should be
    loadedItemsCount: 0, //the amount of items loaded so far
    limit: 1, //how many items to load per page
    loadedItems: null, //what items we already had loaded before requesting more
    total: null, //total items without pagination or limits
    contentLoading: false //bool to indicate loading state
};

export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        this.fetchItems = this.fetchItems.bind(this);
        this.state = initialState;
    }

    fetchItems() {

        let loadedItems = [];

        if (this.state.contentLoading) {
            return; //halt because we're currently loading
        }

        if (this.state.loadedItems) {
            loadedItems = this.state.loadedItems;
        }

        this.setState({
            contentLoading: true
        });

        jsonFetch(buildApiUrl([
            this.props.apiRoute,
            this.state.nextPage,
            this.state.limit,
            this.props.currItem
        ].join("/")),
            (response) => {

                response.items.map((item) => {
                    loadedItems.push(
                        <ContentItemList
                            key={item._id}
                            contentData={item}
                        />
                    );
                });

                this.setState({
                    requestItems: response.items,
                    loadedItemsCount: this.state.loadedItemsCount + response.items.length,
                    nextPage: this.state.nextPage + this.state.limit,
                    loadedItems: loadedItems,
                    total: response.total,
                    contentLoading: false
                });

            });

    }

    componentDidMount() {
        this.fetchItems();
    }

    componentDidUpdate(prevProps) {
        /**
         * Reset the state whenever we click an item, this resets the list back to the first page
         */
        if (typeof prevProps.currItem !== "undefined") {
            if (prevProps.currItem !== this.props.currItem) {
                this.setState(
                    initialState,
                    this.fetchItems
                );
            }
        }
    }

    render() {

        let allLoaded = false,
            loading = false,
            loadMoreAction = this.fetchItems;

        if (this.state.loadedItemsCount >= this.state.total) {
            allLoaded = true;
            loadMoreAction = null;
        }

        if (this.state.contentLoading) {
            loading = true;
        }

        return (
            <div className="div--item-list-wrapper">
                <div className="div--item-wrapper-inner">
                    {this.state.loadedItems}
                </div>
                <LoadMoreButton loading={loading} allLoaded={allLoaded} clickAction={loadMoreAction} />
            </div>
        );
    }
}