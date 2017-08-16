import React from "react";
//custom modules:
//this is where we keep some commonly used components, i like to keep them separate from the larger components for easier access and readability
import { Glyphicon } from "../components/common"; 

//this is where we keep the mobile controls, each page can have different controls
import mobileMenuItems from "../data/mobileTopMenu"; 
 
//this is where we keep the main menu controls, each page can have different controls
import mainMenuItems from "../data/mainMenu"; 

//this is where we keep the pages, each page can have its own output or it can depend on a content object
//the content objects can be obtained from within the mainPages module which imports the mainContent module
import fetchPage from "../data/mainPages"; 

//helper methods that execute general tasks
import { getUrlParameter, buildApiUrl } from "../helpers/common"; 

/**
 * The main container is the main wrapper component that's responsible for 
 * controlling which page (and inner content) should be displayed
 * 
 * the changeContent method is solely responsible for the actual changing of pages and their content
 * a page is a "section" with a title and potential specific controls
 * a content is whatever is to be displayed within each page, it is possible to list content items or visualize a single item
 */  
class MainContainer extends React.PureComponent {

    constructor(props) {
        super(props);
        //binding events, more info on each at their declaration
        this.toggleElement = this.toggleElement.bind(this);
        this.requestList = this.requestList.bind(this);
        this.requestItem = this.requestItem.bind(this);
        this.loadMoreResults = this.loadMoreResults.bind(this);
        this.addToDocumentTitle = this.addToDocumentTitle.bind(this);
        this.moreResultsAction = this.moreResultsAction.bind(this);
        this.pageRequestBuilder = this.pageRequestBuilder.bind(this);

        //if a get request exists with the variable "video" in it, capture the value
        this.getRequestVideo = getUrlParameter('video');

        //the content array is where our current content is sitting, waiting to get rendered somehow
        this.contentArray = [];
        //how many items should we load per request?
        this.maxItemsPerPage = 9;
        //the main content page object that's currently going to be rendered as the central scene
        this.centerPage = {};
        //overlay related css classes for when an element should be visible or invisible due to an overlay being present or not
        this.visibleClass = "elementVisible";
        this.hiddenClass = "elementHidden";
        //the title of the window
        this.DocumentTitle = "OLX Challenge"; 

        this.state = {
            //this represents a content item
            contentId:null, 
            //the default page when the user opens the app
            pageId:"video-list", 
            //this is the default page title
            pageTitle:null, 
            //the page title before it change since the last time, this is useful for when the user navigates from A to B then goes back to A
            previousPageTitle:null,
            //is the mobile menu visible or not?
            mobileMenu:false, 
            //is the search box visible in the mobile menu or not?
            mobileSearch:false, 
            //when true, the content has done fetching from server
            contentLoaded:false,
            //what's the currently searched term?
            currSearchTerm:null, 
            //the current page that's been requested, starting at one
            currRequestPage:1, 
            //how many items have been loaded so far?
            currLoadedItems:null, 
            //what's the max items the server found for the current request?
            maxContentItems:null,
            //how many items did the last request return?
            lastRequestItemsCount:null
        };
    }

    /**
     * Method to set the window title before anything else.
     */
    componentWillMount() {
        this.setDocumentTitle(this.DocumentTitle);
    }

    /**
     * Initial request once this main component has done mounting for the first time.
     */
    componentDidMount() {
        this.pageRequestBuilder(false);
    }

    /**
     * Creates the request system for when the user either enters the app or requests a new page from the current results.
     * 
     * @param {bool} newPageRequest - If this is true, user is requesting a new page for the current results. 
     *                                If false, he's requesting a whole new page, for example the first time the user comes in.
     */
    pageRequestBuilder(newPageRequest) {
        if(this.getRequestVideo) {
            if(newPageRequest === true) {
                this.requestList(this.state.currSearchTerm, true, false);
            } else {
                this.requestList(null, false, false);
            }

            this.requestItem(this.getRequestVideo);

        } else {
            if(newPageRequest) {
                this.requestList(this.state.currSearchTerm, true, true);
            } else {
                this.requestList(null, false, true);
            }
        }
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
     * For when a user requests more items by clicking the "load more" button
     * Its just a shortcut for another method, but can be used to change the button's style, for example.
     */
    loadMoreResults() {
        this.pageRequestBuilder(true);
    }

    /**
     * returns the loadMoreResults action only when its possible to load more results, if not, returns null
     */
    moreResultsAction() {
        //can more results be loaded?
        //this controls if the load more button should appear or not
        let moreResultsAction = this.loadMoreResults; //yes

        if(this.state.currLoadedItems >= this.state.maxContentItems) {
            moreResultsAction = null; //no
        }

        return moreResultsAction;
    }

    /**
     * This method is single-handedly responsible for deciding what to render on the main scene.
     * Previously this was in the component's render method but that was not very pretty. 
     */
    getSceneToRender() {

        //a bit of mumbo jumbo going on here:
        //toggle visibility of elements based on the state of said elements
        let mobileMenuVisibleClass = this.state.mobileMenu ? this.visibleClass : this.hiddenClass;
        let mobileSearchVisibleClass = this.state.mobileSearch && !this.state.mobileMenu  ? this.visibleClass : this.hiddenClass;
        //the main scene should be hidden when the mobile menu appears
        let pageVisibleClass = this.state.mobileMenu ? this.hiddenClass : this.visibleClass;

        let mobileIcons, pageTitle, centerPageComponent, sideList, sideListComponent;

        pageTitle = this.centerPage.title;
        centerPageComponent = this.centerPage.component;
        
        //only fetch the side video list when user is in the video-detail page
        if(this.state.pageId === "video-detail") {
            sideList = fetchPage(this.contentArray, "side-video-list", this.state.contentId, this.moreResultsAction);
            sideListComponent = sideList.component;
        }

        mobileIcons = mobileMenuItems(this.state.pageId, this.toggleElement, this.state.pageTitle, this.state.mobileMenu);
        
        return (
            <div className="div-main">
                {mobileIcons}
                <MainMenu className={mobileMenuVisibleClass}/>
                <div className={"div-maincontent-wrapper " + pageVisibleClass }>
                    <Searchform currRequestPage={this.state.currRequestPage} onSubmit={this.requestList} className={mobileSearchVisibleClass} />
                    {centerPageComponent}
                    {sideListComponent}
                </div>
                <Footer />
            </div>
        );
    }

    /**
     * Whenever a request is done to get more content.
     * Takes two arguments, one asks for a new search, the other simply requests a new page for the current search term.
     * 
     * @param {string} requestSearchTerm - A string to send to the server as a search parameter.
     * @param {bool} requestNextReqPage - If true, does not reset counters and does not redirect the user, simple gets next page. If false, always goes back to first page.
     * @param {bool} setPageWhenDone - If true, when this list is done fetching from the server, react can render the page. If false, don't render a page.
     */
    requestList(requestSearchTerm, requestNextReqPage, setPageWhenDone) {

        //if the search term changed, then we should start at page one
        //otherwise, just increment the page number and stack more items onto the contentArray
        //this also decides what state to change, so we dont change everything for no reason

        //the current requested page, we need to define this so we can increment it or reset it
        let currReqPage = this.state.currRequestPage;
        //itemcounter is used to compare with max results, if item counter is higher or equal to max results, then should not be possible to load more
        let itemIndexCounter = this.state.currLoadedItems;
        //stateToChange is used to i dont have to setState multiple times, which is saving some code lines
        let stateToChange = {};

        //i tend to stay away from if-else, but this is for readability:
        //if the search term is different from the previous one, then the user needs new data
        //if requestNextReqPage is false, then the user didnt click the "load more" button, he did a search 
        //otherwise he clicked the "load more" button and that means we only have to get a new page instead of resetting stuff
        if(this.state.currSearchTerm != requestSearchTerm || requestNextReqPage === false) {
            //set the new search term
            stateToChange.currSearchTerm = requestSearchTerm;
            //empty the contentArray const (remember, we can't redefine a const)
            for (var i = this.contentArray.length; i > 0; i--) {
                this.contentArray.pop();
            }
            //these are some "reset" instructions:
            //reset the counter, pageId, page title and set the new search term, reset the current request page
            itemIndexCounter=0;
            stateToChange.currLoadedItems = itemIndexCounter;
            currReqPage=1;
        } else {
            //increment the request page so the user gets a new fresh list of items
            currReqPage++;
        }
        
        //update state with current requested page
        stateToChange.currRequestPage = currReqPage;

        //call helper function to build the URL to fetch data from server
        let apiUrl = buildApiUrl(requestSearchTerm, currReqPage, this.maxItemsPerPage, null);

        //finally execute ajax request, process the json response from API
        fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (response) {

            let pageId = "video-list";

            //map each item onto an array of content 
            response.resource.map((item) => {
                item.index = itemIndexCounter;
                this.contentArray[item.id] = item;
                itemIndexCounter++;
            });
            
            //more state updates after processing the list of content
            //notify app that content has loaded and set a page only if we pass true on render page when done
            if(setPageWhenDone === true) {
                this.setPage(pageId);
                stateToChange.contentLoaded = true;
                stateToChange.pageId = pageId;
                stateToChange.pageTitle = this.centerPage.title;
            }
            
            stateToChange.currLoadedItems = itemIndexCounter;
            stateToChange.maxContentItems = response.total;
            
            //update state
            this.setState(stateToChange);
            
        }.bind(this)
        ).catch(function() {
        });
    }

    /**
     * Requests a single item from the server. 
     * Adds to the contentArray so the content get be fetched.
     * 
     * @param {string} contentId - An identifier for a single item.
     */
    requestItem(contentId) {

        //call helper function to build the URL to fetch data from server
        let apiUrl = buildApiUrl(null, null, null, contentId);
        //finally execute ajax request, process the json response from API
        fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (response) {

            let pageId = "video-detail";

            //map the obtained item onto an array of content 
            let item = response.resource;
            this.contentArray[item.id] = item;

            this.setPage(pageId, item.id);
            
            this.setState({
                pageId: pageId,
                contentId: item.id,
                contentLoaded: true,
                pageTitle: this.centerPage.title
            });

        }.bind(this)
        ).catch(function() {
        });
    }

    /**
     * Set the page to an object that can be rendered later.
     * 
     * @param {string} pageId - The page Id according to mainPages module.
     * @param {string} contentId - The content to load within the page.
     */
    setPage(pageId, contentId) {
        this.centerPage = fetchPage(this.contentArray, pageId, contentId, this.moreResultsAction, this.addToDocumentTitle);
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
        if(this.state[stateEntry]) {
            stateToChange[stateEntry]=false;
            stateToChange.pageTitle=this.state.previousPageTitle;
        } else {
            stateToChange[stateEntry]=true;
            stateToChange.pageTitle=newPageTitle;
            stateToChange.previousPageTitle=this.state.pageTitle;
        }
        this.setState(stateToChange);
    }

    /**
     * Where most of the magic actually happens.
     * Pretty much on rendering the scene, we decide which elements to show or hide based on specific conditions.
     */
    render() {

        //get the page to show, can be a list or a detail view
        //while the content is loading...
        let scene = <div className="div-loading"> Content is loading ... </div>;
        //once the content has finished loading:
        if(this.state.contentLoaded) {
            scene = this.getSceneToRender();
        }

        return scene;
    }
}
/**
 * Component that renders the search form.
 * Invokes ManContainer callback on submit.
 */
class Searchform extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: ''};
    }

    /**
     * Keep the search box content in state for usage.
     * 
     * @param {object} event - Event info.
     */
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    /**
     * Whenever the form is submitted, don't actually refresh the page and call a MainContainer callback.
     * 
     * @param {object} event - Event info.
     */
    handleSubmit(event) {
        this.props.onSubmit(this.state.value, false, true);
        event.preventDefault();
    }

    render() {
        return(
            <form className={"div-search-form " + this.props.className} onSubmit={this.handleSubmit}>
                <input className="search-box" type="text" value={this.state.value} onChange={this.handleChange} placeholder="What are you looking for?"/>
                <input className="submit-button" type="submit" value="Search" />
            </form>
        );
    }
}

/**
 * This renders the left menu.
 * 
 * @param {object} props - The component properties from within the react context.
 */
function MainMenu(props) {
    //gets the menu buttons from an "external" source
    const menuItems = mainMenuItems().map((item) => {
        return <button key={item.id}>{item.label}</button>;
    });
    return (
        <div className={"div-main-menu " + props.className}>
            <UserBlock />
            <div className="div-main-menu-menu">
                {menuItems}
            </div>
            <div className="div-main-menu-logout">
                <button>Logout</button>
            </div>
        </div>
    );
}

/**
 * Simple component that renders the user block.
 */
function UserBlock() {
    return(
        <div className="div-user-block">
            <div className="div-user-photo"><Glyphicon iconSuffix="user" /></div>
            <div className="div-user-name">User Name</div>
        </div>
    );
}

/**
 * Simple component that renders the footer.
 * Possible todo: implement external source for the content.
 */
function Footer() {
    return (
        <div className="div-footer">
            <div>Footer 1</div>
            <div>Footer 2</div>
            <div>Footer 3</div>
            <div>OLX Copyright 2017</div>
        </div>
    );
}


export { MainContainer, MainMenu, Searchform };