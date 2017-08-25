import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//helper methods that execute general tasks
import { getUrlParameter, buildApiUrl } from "helpers/common";

//custom modules:
//this is where we keep some commonly used components, i like to keep them separate from the larger components for easier access and readability
import Footer from "components/Footer";
import UserBlock from "components/UserBlock";
import MainMenu from "components/MainMenu";
import Searchform from "components/Searchform";
import Glyphicon from "components/Glyphicon";
import LoadMoreButton from "components/LoadMoreButton";
import VideoDetail from "components/pages/VideoDetail";
import VideoList from "components/pages/VideoList";
import SideVideoList from "components/SideVideoList";

//this is where we keep the mobile controls, each page can have different controls
import MobileMenuItems from "data/MobileMenuItems";

//this is where we keep the pages, each page can have its own output or it can depend on a content object
//the content objects can be obtained from within the mainPages module which imports the mainContent module
import Pages from "data/Pages";

/**
 * The main container is the main wrapper component that's responsible for 
 * controlling which page (and inner content) should be displayed
 * 
 * the changeContent method is solely responsible for the actual changing of pages and their content
 * a page is a "section" with a title and potential specific controls
 * a content is whatever is to be displayed within each page, it is possible to list content items or visualize a single item
 */
export default class extends React.PureComponent {

    constructor(props) {
        super(props);
        //binding events, more info on each at their declaration
        this.toggleElement = this.toggleElement.bind(this);
        this.addToDocumentTitle = this.addToDocumentTitle.bind(this);

        //if a get request exists with the variable "video" in it, capture the value
        this.getRequestVideo = getUrlParameter('video');

        //the content array is where our current content is sitting, waiting to get rendered somehow
        this.contentArray = {};
        //how many items should we load per request?
        this.maxItemsPerPage = 9;
        //the main content page object that's currently going to be rendered as the central scene
        this.centerPage = {};
        //overlay related css classes for when an element should be visible or invisible due to an overlay being present or not
        this.visibleClass = "elementVisible";
        this.hiddenClass = "elementHidden";
        //the title of the window
        this.DocumentTitle = "Video App";

        this.state = {
            //the default page when the user opens the app
            pageId: "video-list",
            //this is the default page title
            pageTitle: null,
            //the page title before it change since the last time, this is useful for when the user navigates from A to B then goes back to A
            previousPageTitle: null,
            //is the mobile menu visible or not?
            mobileMenu: false,
            //is the search box visible in the mobile menu or not?
            mobileSearch: false
        };
    }

    /**
     * Method to set the window title before anything else.
     */
    componentWillMount() {
        if (this.getRequestVideo) {
            this.setState({
                pageId: "video-detail"
            });
        }
        this.setDocumentTitle(this.DocumentTitle);
    }


    /**
     * Adds to the current window title
     * 
     * @param {string} newTitle - What to concatenate to the title
     */
    addToDocumentTitle(newTitle) {
        this.setDocumentTitle(this.DocumentTitle + " - " + newTitle);
    }

    /**
     * Sets the window title
     * 
     * @param {string} title - What to set the window title to
     */
    setDocumentTitle(title) {
        document.title = title;
    }


    /**
     * This method is single-handedly responsible for deciding what to render on the main scene.
     * Previously this was in the component's render method but that was not very pretty. 
     */
    getSceneToRender() {
        //
        //a bit of mumbo jumbo going on here:
        //toggle visibility of elements based on the state of said elements
        let mobileMenuVisibleClass = this.state.mobileMenu ? this.visibleClass : this.hiddenClass;
        let mobileSearchVisibleClass = this.state.mobileSearch && !this.state.mobileMenu ? this.visibleClass : this.hiddenClass;
        //the main scene should be hidden when the mobile menu appears
        let pageVisibleClass = this.state.mobileMenu ? this.hiddenClass : this.visibleClass;

        let mobileIcons, pageTitle, centerPageComponent, sideListComponent;

        pageTitle = this.centerPage.title;
        centerPageComponent = this.centerPage.component;

        //only fetch the side video list when user is in the video-detail page
        if (this.state.pageId === "video-detail") {
            sideListComponent = <SideVideoList loadMoreAction={this.moreResultsAction} />;
        }

        mobileIcons = MobileMenuItems(this.state.pageId, this.toggleElement, this.state.pageTitle, this.state.mobileMenu);

        return (<Router>
            <div className="div-main">
                {mobileIcons}
                <MainMenu className={mobileMenuVisibleClass} />
                <div className={"div-maincontent-wrapper " + pageVisibleClass}>
                    <Searchform currRequestPage={this.state.currRequestPage} onSubmit={this.requestList} className={mobileSearchVisibleClass} />
                    

                    <Route path="/" exact component={VideoList}/>
                    <Route path="/video/:id" component={VideoDetail}/>
                    <Route path="/video/:id" component={SideVideoList}/>
                    
                </div>
                <Footer />
            </div>
            </Router>
        );
    }

    /**
     * Set the page to an object that can be rendered later.
     * 
     * @param {string} pageId - The page Id according to mainPages module.
     */
    setPage(pageId) {
        this.centerPage = Pages(this.contentArray, pageId, this.moreResultsAction, this.addToDocumentTitle);
        this.addToDocumentTitle(this.centerPage.title);
    }

    /**
     * This is used to toggle something into/outof visibility, like an overlay or an element.
     * 
     * When an element is toggled into visibility, it can redefine the page title.
     * 
     * @param {string} stateEntry - The state entry that controls the toggle state.
     * @param {string} newPageTitle - The page title for when toggle is "visible".
     */
    toggleElement(stateEntry, newPageTitle) {
        let stateToChange = {};
        if (this.state[stateEntry]) {
            stateToChange[stateEntry] = false;
            stateToChange.pageTitle = this.state.previousPageTitle;
        } else {
            stateToChange[stateEntry] = true;
            stateToChange.pageTitle = newPageTitle;
            stateToChange.previousPageTitle = this.state.pageTitle;
        }
        this.setState(stateToChange);
    }

    /**
     * Where most of the magic actually happens.
     * Pretty much on rendering the scene, we decide which elements to show or hide based on specific conditions.
     */
    render() {
        return this.getSceneToRender();
    }
}

/*this.props.match.params.id*/