/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    /**
     * A helper method that builds a URL based on some parameters
     * 
     * @param {string} requestSearchTerm - The search term to send to the server.
     * @param {string} reqPage - The page the user is requesting.
     * @param {int} itemLimit - The item limit to return.
     * @param {int} itemId - A specific item ID.
     */
    buildApiUrl: function buildApiUrl(query) {
        return "http://localhost:8080/" + query;
    }
    /**
     * In order to implement a very basic URL router, this method helps with retrieving URL data.
     * 
     * @param {string} paramName - Parameter name to get from the URL.
     */
    /* getUrlParameter: function (paramName) {
         let url = window.location.href;
         paramName = paramName.replace(/[\[\]]/g, "\\$&");
         var regex = new RegExp("[?&]" + paramName + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
         if (!results) return null;
         if (!results[2]) return '';
         return decodeURIComponent(results[2].replace(/\+/g, " "));
     },*/
    /*optimizedResize: (function () {
        
            var callbacks = [],
                running = false;
        
            // fired on resize event
            function resize() {
        
                if (!running) {
                    running = true;
        
                    if (window.requestAnimationFrame) {
                        window.requestAnimationFrame(runCallbacks);
                    } else {
                        setTimeout(runCallbacks, 66);
                    }
                }
        
            }
        
            // run the actual callbacks
            function runCallbacks() {
        
                callbacks.forEach(function (callback) {
                    callback.method(callback.params);
                });
        
                running = false;
            }
        
            // adds callback to loop
            function addCallback(callback) {
                if (callback) {
                    callbacks.push(callback);
                }
            }
              function removeCallBack(callback) {
                callbacks = [];
            }
        
            return {
                // public method to add additional callback
                add: (callback) => {
                    if (!callbacks.length) {
                        window.addEventListener('resize', resize);
                    }
                    addCallback(callback);
                },
                remove: () => {
                    removeCallBack();
                    window.removeEventListener('resize', resize);
                }
            }
        }())*/
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a simple icon that can have a callback attached to it for all your needs.
 * Granted, the callback system right now is not fully developed, it could be more robust, as you can see the callback takes a pre-defined stack of parameters.
 * To-Do: Make use of spread or some other way to allow for truly flexible callbacks.
 */
var _default = function (_React$PureComponent) {
    _inherits(_default, _React$PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(_default, [{
        key: "handleClick",
        value: function handleClick() {
            if (this.props.clickAction) {
                this.props.clickAction(this.props.target, this.props.pageTitle, this.props.contentId);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "span",
                { onClick: this.handleClick, className: "glyphicon glyphicon-" + this.props.iconSuffix },
                this.props.children
            );
        }
    }]);

    return _default;
}(_react2.default.PureComponent);

exports.default = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A simple component that renders a simple "load more" button. 
 * 
 * Its not very customizable, this one is for a single purpose.
 */
var LoadMoreButton = function (_React$PureComponent) {
    _inherits(LoadMoreButton, _React$PureComponent);

    function LoadMoreButton(props) {
        _classCallCheck(this, LoadMoreButton);

        var _this = _possibleConstructorReturn(this, (LoadMoreButton.__proto__ || Object.getPrototypeOf(LoadMoreButton)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(LoadMoreButton, [{
        key: "handleClick",
        value: function handleClick() {
            //if the clickAction came through as null, then if we click the button, nothing should happen
            //otherwise, run the action
            if (this.props.clickAction) {
                this.props.clickAction();
            }
        }
    }, {
        key: "render",
        value: function render() {

            //based on wether we can get more results or not, we define the button label
            var label = "Load More Videos";
            var className = "more-results-button";

            if (this.props.allLoaded === true) {
                label = "All Videos Loaded";
                className = "more-results-button-no-click";
            }

            if (this.props.loading === true) {
                label = "Loading...";
                className = "more-results-button-no-click";
            }

            return _react2.default.createElement(
                "div",
                { className: className, onClick: this.handleClick },
                label
            );
        }
    }]);

    return LoadMoreButton;
}(_react2.default.PureComponent);

exports.default = LoadMoreButton;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Glyphicon = __webpack_require__(2);

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple component that renders the user block.
 */
exports.default = function () {
    return _react2.default.createElement(
        "div",
        { className: "div-user-block" },
        _react2.default.createElement(
            "div",
            { className: "div-user-photo" },
            _react2.default.createElement(_Glyphicon2.default, { iconSuffix: "user" })
        ),
        _react2.default.createElement(
            "div",
            { className: "div-user-name" },
            "User Name"
        )
    );
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Glyphicon = __webpack_require__(2);

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _ListViewLink = __webpack_require__(7);

var _ListViewLink2 = _interopRequireDefault(_ListViewLink);

var _VideoIframe = __webpack_require__(18);

var _VideoIframe2 = _interopRequireDefault(_VideoIframe);

var _SideVideoList = __webpack_require__(8);

var _SideVideoList2 = _interopRequireDefault(_SideVideoList);

var _common = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Video detail page.
 * 
 * Sets the window title according to what video is being viewed.
 */
var _default = function (_React$PureComponent) {
    _inherits(_default, _React$PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.state = {
            videoUrl: null,
            title: null,
            description: null
        };
        return _this;
    }

    _createClass(_default, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            fetch((0, _common.buildApiUrl)(["video", this.props.match.params.id].join("/"))).then(function (response) {
                return response.json();
            }).then(function (response) {
                this.setState({
                    videoUrl: response.videoUrl,
                    title: response.title,
                    description: response.description
                });
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "div-content-detail" },
                _react2.default.createElement(
                    "div",
                    { className: "div-content-video" },
                    _react2.default.createElement(
                        _ListViewLink2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: "go-back-button" },
                            _react2.default.createElement(_Glyphicon2.default, { key: "triangle-left", iconSuffix: "triangle-left" }),
                            "Back to Video List"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(
                                "div",
                                { className: "div-iframe-container" },
                                _react2.default.createElement(_VideoIframe2.default, { videoUrl: this.state.videoUrl })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "title" },
                                this.state.title
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "description" },
                                this.state.description
                            )
                        )
                    )
                ),
                _react2.default.createElement(_SideVideoList2.default, null)
            );
        }
    }]);

    return _default;
}(_react2.default.PureComponent);

exports.default = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just a link that will send the user to the video list.
 * 
 * @param {object} props - The component properties from within the react context.
 */
exports.default = function (props) {
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/" },
        props.children
    );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentItemList = __webpack_require__(9);

var _ContentItemList2 = _interopRequireDefault(_ContentItemList);

var _LoadMoreButton = __webpack_require__(4);

var _LoadMoreButton2 = _interopRequireDefault(_LoadMoreButton);

var _common = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Side Video list block, not an actual page, just a block that is embedded within other pages.
 * @param {object} props - The component properties from within the react context.
 */
var _default = function (_React$PureComponent) {
    _inherits(_default, _React$PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.fetchVideos = _this.fetchVideos.bind(_this);
        _this.state = {
            requestVideos: null,
            nextPage: 0,
            loadedVideosCount: 0,
            loadedVideos: [],
            total: null,
            contentLoading: false
        };
        return _this;
    }

    _createClass(_default, [{
        key: "fetchVideos",
        value: function fetchVideos() {

            if (this.state.contentLoading) {
                return; //halt because we're currently loading
            }

            this.setState({
                contentLoading: true
            });

            fetch((0, _common.buildApiUrl)(["videos", this.state.nextPage, 1, null].join("/"))).then(function (response) {
                return response.json();
            }).then(function (response) {

                var loadedVideos = this.state.loadedVideos;

                response.videos.map(function (video) {

                    loadedVideos.push(_react2.default.createElement(_ContentItemList2.default, {
                        pageId: "side-video-list",
                        key: video._id,
                        contentData: video
                    }));
                });

                this.setState({
                    requestVideos: response.videos,
                    loadedVideosCount: this.state.loadedVideosCount + response.videos.length,
                    nextPage: this.state.nextPage + 1,
                    loadedVideos: loadedVideos,
                    total: response.total,
                    contentLoading: false
                });
            }.bind(this));
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.fetchVideos();
        }
    }, {
        key: "render",
        value: function render() {

            //this will return null if we can't actually load more
            var allLoaded = false,
                loading = false,
                loadMoreAction = this.fetchVideos;

            if (this.state.loadedVideosCount >= this.state.total) {
                allLoaded = true;
                loadMoreAction = null;
            }

            if (this.state.contentLoading) {
                loading = true;
            }

            return _react2.default.createElement(
                "div",
                { className: "div-side-content-list" },
                this.state.loadedVideos,
                _react2.default.createElement(_LoadMoreButton2.default, { loading: loading, allLoaded: allLoaded, clickAction: loadMoreAction })
            );
        }
    }]);

    return _default;
}(_react2.default.PureComponent);

exports.default = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ContentItemList;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DetailViewLink = __webpack_require__(20);

var _DetailViewLink2 = _interopRequireDefault(_DetailViewLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This renders a content item's details when being listed. 
 * 
 * Uses a switch to decide on particular details before actually rendering.
 * 
 * @param {object} props - The component properties from within the react context.
 */
function ContentItemList(props) {

    var content = props.contentData;
    var thumbnailClass = void 0;

    //its possible to limit the amount of characters on a title or description this way
    var title = content.title.substring(0, 35) + "...";
    var description = content.description.substring(0, 55) + "...";

    switch (props.pageId) {
        case "video-list":
            thumbnailClass = "thumbnail-large";
            break;
        case "side-video-list":
            thumbnailClass = "thumbnail-medium";
            break;
    }

    return _react2.default.createElement(
        "div",
        { id: "content_" + content.index },
        _react2.default.createElement(
            "div",
            { className: thumbnailClass },
            _react2.default.createElement(
                _DetailViewLink2.default,
                { contentId: content._id },
                _react2.default.createElement("img", { src: content.thumbnailUrl })
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "title" },
            _react2.default.createElement(
                _DetailViewLink2.default,
                { contentId: content._id },
                title
            )
        ),
        _react2.default.createElement(
            "div",
            { className: "description" },
            description
        )
    );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContentItemList = __webpack_require__(9);

var _ContentItemList2 = _interopRequireDefault(_ContentItemList);

var _LoadMoreButton = __webpack_require__(4);

var _LoadMoreButton2 = _interopRequireDefault(_LoadMoreButton);

var _common = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Video list page.
 * @param {object} props - The component properties from within the react context.
 */
var _default = function (_React$PureComponent) {
    _inherits(_default, _React$PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.fetchVideos = _this.fetchVideos.bind(_this);
        _this.state = {
            requestVideos: null,
            nextPage: 0,
            loadedVideosCount: 0,
            loadedVideos: [],
            total: null,
            contentLoading: false
        };
        return _this;
    }

    _createClass(_default, [{
        key: "fetchVideos",
        value: function fetchVideos() {

            if (this.state.contentLoading) {
                return; //halt because we're currently loading
            }

            this.setState({
                contentLoading: true
            });

            fetch((0, _common.buildApiUrl)(["videos", this.state.nextPage, 1, null].join("/"))).then(function (response) {
                return response.json();
            }).then(function (response) {

                var loadedVideos = this.state.loadedVideos;

                response.videos.map(function (video) {
                    loadedVideos.push(_react2.default.createElement(_ContentItemList2.default, {
                        pageId: "video-list",
                        key: video._id,
                        contentData: video
                    }));
                });

                this.setState({
                    requestVideos: response.videos,
                    loadedVideosCount: this.state.loadedVideosCount + response.videos.length,
                    nextPage: this.state.nextPage + 1,
                    loadedVideos: loadedVideos,
                    total: response.total,
                    contentLoading: false
                });
            }.bind(this));
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.fetchVideos();
        }
    }, {
        key: "render",
        value: function render() {

            //this will return null if we can't actually load more
            var allLoaded = false,
                loading = false,
                loadMoreAction = this.fetchVideos;

            if (this.state.loadedVideosCount >= this.state.total) {
                allLoaded = true;
                loadMoreAction = null;
            }

            if (this.state.contentLoading) {
                loading = true;
            }

            return _react2.default.createElement(
                "div",
                { className: "div-content-list" },
                this.state.loadedVideos,
                _react2.default.createElement(_LoadMoreButton2.default, { loading: loading, allLoaded: allLoaded, clickAction: loadMoreAction })
            );
        }
    }]);

    return _default;
}(_react2.default.PureComponent);

exports.default = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Main = __webpack_require__(13);

var _Main2 = _interopRequireDefault(_Main);

var _reactRouter = __webpack_require__(23);

var _render = __webpack_require__(24);

var _render2 = _interopRequireDefault(_render);

var _nodeFetch = __webpack_require__(26);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * index.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
/* eslint-disable no-console */

var routes = ['/', '/g/:gistId'];

var app = (0, _express2.default)();

app.get('*', function (req, res) {
    //const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);


    res.status(200).send((0, _render2.default)(_react2.default.createElement(
        _reactRouter.StaticRouter,
        { context: {}, location: req.url },
        _react2.default.createElement(_Main2.default, null)
    )));
    /*if (!match) {
        res.status(404).send(render("XXX"));
        return;
    }
    fetch('https://api.github.com/gists')
        .then(r => r.json())
        .then(gists => {
            res.status(200).send(render(
                (
                    <Router context={{}} location={req.url}>
                        <Main />
                    </Router>
                ), gists
            ));
        }).catch(err => {
            console.error(err);
            res.status(500).send(render("XXX"));
        });*/
});

app.listen(8080, function () {
    return console.log('Demo app listening on port 8080');
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _common = __webpack_require__(1);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

var _UserBlock = __webpack_require__(5);

var _UserBlock2 = _interopRequireDefault(_UserBlock);

var _MainMenu = __webpack_require__(15);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Searchform = __webpack_require__(17);

var _Searchform2 = _interopRequireDefault(_Searchform);

var _Glyphicon = __webpack_require__(2);

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

var _LoadMoreButton = __webpack_require__(4);

var _LoadMoreButton2 = _interopRequireDefault(_LoadMoreButton);

var _VideoDetail = __webpack_require__(6);

var _VideoDetail2 = _interopRequireDefault(_VideoDetail);

var _VideoList = __webpack_require__(10);

var _VideoList2 = _interopRequireDefault(_VideoList);

var _SideVideoList = __webpack_require__(8);

var _SideVideoList2 = _interopRequireDefault(_SideVideoList);

var _MobileMenuItems = __webpack_require__(21);

var _MobileMenuItems2 = _interopRequireDefault(_MobileMenuItems);

var _Pages = __webpack_require__(22);

var _Pages2 = _interopRequireDefault(_Pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//helper methods that execute general tasks


//custom modules:
//this is where we keep some commonly used components, i like to keep them separate from the larger components for easier access and readability


//this is where we keep the mobile controls, each page can have different controls


//this is where we keep the pages, each page can have its own output or it can depend on a content object
//the content objects can be obtained from within the mainPages module which imports the mainContent module


var routes = [{ path: '/',
    exact: true,
    main: function main() {
        return _react2.default.createElement(_VideoList2.default, null);
    }
}, { path: '/video/:id',
    main: function main() {
        return _react2.default.createElement(_VideoDetail2.default, null);
    },
    sidebar: function sidebar() {
        return _react2.default.createElement(_SideVideoList2.default, null);
    }
}];

/**
 * The main container is the main wrapper component that's responsible for 
 * controlling which page (and inner content) should be displayed
 * 
 * the changeContent method is solely responsible for the actual changing of pages and their content
 * a page is a "section" with a title and potential specific controls
 * a content is whatever is to be displayed within each page, it is possible to list content items or visualize a single item
 */

var _default = function (_React$PureComponent) {
    _inherits(_default, _React$PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        //binding events, more info on each at their declaration
        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.toggleElement = _this.toggleElement.bind(_this);
        _this.addToDocumentTitle = _this.addToDocumentTitle.bind(_this);

        //if a get request exists with the variable "video" in it, capture the value
        //this.getRequestVideo = getUrlParameter('video');

        //the content array is where our current content is sitting, waiting to get rendered somehow
        _this.contentArray = {};
        //how many items should we load per request?
        _this.maxItemsPerPage = 9;
        //the main content page object that's currently going to be rendered as the central scene
        _this.centerPage = {};
        //overlay related css classes for when an element should be visible or invisible due to an overlay being present or not
        _this.visibleClass = "elementVisible";
        _this.hiddenClass = "elementHidden";
        //the title of the window
        _this.DocumentTitle = "Video App";

        _this.state = {
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
        return _this;
    }

    /**
     * Method to set the window title before anything else.
     */


    _createClass(_default, [{
        key: "componentWillMount",
        value: function componentWillMount() {
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

    }, {
        key: "addToDocumentTitle",
        value: function addToDocumentTitle(newTitle) {
            this.setDocumentTitle(this.DocumentTitle + " - " + newTitle);
        }

        /**
         * Sets the window title
         * 
         * @param {string} title - What to set the window title to
         */

    }, {
        key: "setDocumentTitle",
        value: function setDocumentTitle(title) {}
        //document.title = title;


        /**
         * This method is single-handedly responsible for deciding what to render on the main scene.
         * Previously this was in the component's render method but that was not very pretty. 
         */

    }, {
        key: "getSceneToRender",
        value: function getSceneToRender() {
            //
            //a bit of mumbo jumbo going on here:
            //toggle visibility of elements based on the state of said elements
            var mobileMenuVisibleClass = this.state.mobileMenu ? this.visibleClass : this.hiddenClass;
            var mobileSearchVisibleClass = this.state.mobileSearch && !this.state.mobileMenu ? this.visibleClass : this.hiddenClass;
            //the main scene should be hidden when the mobile menu appears
            var pageVisibleClass = this.state.mobileMenu ? this.hiddenClass : this.visibleClass;

            var mobileIcons = void 0,
                pageTitle = void 0,
                centerPageComponent = void 0,
                sideListComponent = void 0;

            pageTitle = this.centerPage.title;
            centerPageComponent = this.centerPage.component;

            //only fetch the side video list when user is in the video-detail page
            if (this.state.pageId === "video-detail") {
                sideListComponent = _react2.default.createElement(_SideVideoList2.default, { loadMoreAction: this.moreResultsAction });
            }

            mobileIcons = (0, _MobileMenuItems2.default)(this.state.pageId, this.toggleElement, this.state.pageTitle, this.state.mobileMenu);

            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "div-main" },
                    mobileIcons,
                    _react2.default.createElement(_MainMenu2.default, { className: mobileMenuVisibleClass }),
                    _react2.default.createElement(
                        "div",
                        { className: "div-maincontent-wrapper " + pageVisibleClass },
                        _react2.default.createElement(_Searchform2.default, { currRequestPage: this.state.currRequestPage, onSubmit: this.requestList, className: mobileSearchVisibleClass }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: "/", exact: true, component: _VideoList2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: "/video/:id", component: _VideoDetail2.default })
                    ),
                    _react2.default.createElement(_Footer2.default, null)
                )
            );
        }

        /*
        {routes.map((route, index) => (
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              component={route.main}
                            />
                        ))}
                        {routes.map((route, index) => (
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                              component={route.sidebar}
                            />
                        ))}
                        <Route path="/video/:id" component={SideVideoList}/>
        */

        /**
         * Set the page to an object that can be rendered later.
         * 
         * @param {string} pageId - The page Id according to mainPages module.
         */

    }, {
        key: "setPage",
        value: function setPage(pageId) {
            this.centerPage = (0, _Pages2.default)(this.contentArray, pageId, this.moreResultsAction, this.addToDocumentTitle);
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

    }, {
        key: "toggleElement",
        value: function toggleElement(stateEntry, newPageTitle) {
            var stateToChange = {};
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

    }, {
        key: "render",
        value: function render() {
            return this.getSceneToRender();
        }
    }]);

    return _default;
}(_react2.default.PureComponent);

/*this.props.match.params.id*/


exports.default = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple component that renders the footer.
 * Possible todo: implement external source for the content.
 */
exports.default = function () {
    return _react2.default.createElement(
        "div",
        { className: "div-footer" },
        _react2.default.createElement(
            "div",
            null,
            "Footer 1"
        ),
        _react2.default.createElement(
            "div",
            null,
            "Footer 2"
        ),
        _react2.default.createElement(
            "div",
            null,
            "Footer 3"
        ),
        _react2.default.createElement("div", null)
    );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MainMenuItems = __webpack_require__(16);

var _MainMenuItems2 = _interopRequireDefault(_MainMenuItems);

var _UserBlock = __webpack_require__(5);

var _UserBlock2 = _interopRequireDefault(_UserBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This renders the left menu.
 * 
 * @param {object} props - The component properties from within the react context.
 */


//this is where we keep the main menu controls, each page can have different controls
exports.default = function (props) {
    //gets the menu buttons from an "external" source
    var menuItems = (0, _MainMenuItems2.default)().map(function (item) {
        return _react2.default.createElement(
            "button",
            { key: item.id },
            item.label
        );
    });
    return _react2.default.createElement(
        "div",
        { className: "div-main-menu " + props.className },
        _react2.default.createElement(_UserBlock2.default, null),
        _react2.default.createElement(
            "div",
            { className: "div-main-menu-menu" },
            menuItems
        ),
        _react2.default.createElement(
            "div",
            { className: "div-main-menu-logout" },
            _react2.default.createElement(
                "button",
                null,
                "Logout"
            )
        )
    );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * This is where we will define all the menu buttons for the main menu.
 */
exports.default = function () {
    return [{ id: "0", label: "Menu 1" }, { id: "1", label: "Menu 2" }, { id: "2", label: "Menu 3" }];
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component that renders the search form.
 * Invokes ManContainer callback on submit.
 */
var _default = function (_React$PureComponent) {
    _inherits(_default, _React$PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = { value: '' };
        return _this;
    }

    /**
     * Keep the search box content in state for usage.
     * 
     * @param {object} event - Event info.
     */


    _createClass(_default, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ value: event.target.value });
        }

        /**
         * Whenever the form is submitted, don't actually refresh the page and call a MainContainer callback.
         * 
         * @param {object} event - Event info.
         */

    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            this.props.onSubmit(this.state.value, false, true);
            event.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "form",
                { className: "div-search-form " + this.props.className, onSubmit: this.handleSubmit },
                _react2.default.createElement("input", { className: "search-box", type: "text", value: this.state.value, onChange: this.handleChange, placeholder: "What are you looking for?" }),
                _react2.default.createElement("input", { className: "submit-button", type: "submit", value: "Search" })
            );
        }
    }]);

    return _default;
}(_react2.default.PureComponent);

exports.default = _default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A component to render an iframe with an external video url.
 */
var _default = function (_React$PureComponent) {
    _inherits(_default, _React$PureComponent);

    function _default(props) {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    }

    /**
     * This is so the resize method doesnt error out when an iframe isnt present.
     */


    _createClass(_default, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {}
    }, {
        key: "resize",
        value: function resize(params) {
            params.videoIframe.width = params.videoIframeParent.offsetWidth;
            params.videoIframe.height = Math.floor(params.videoIframeParent.offsetWidth / 1.77);
            params.videoIframe.parentElement.style.height = params.videoIframe.height + "px";
        }

        /**
         * Call the resize method as soon as an iframe is created, this way it shows up correctly sized immediatly.
         */

    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            /*  const resizeCallBackObj = {
                  "id":"iframe-resize",
                  "method": this.resize,
                  "params": {
                      "videoIframe": ReactDOM.findDOMNode(this),
                      "videoIframeParent": ReactDOM.findDOMNode(this).parentNode
                  }
              };
              optimizedResize.add(resizeCallBackObj);
              this.resize(resizeCallBackObj.params);*/
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("iframe", {
                className: "video-iframe",
                src: "https:" + this.props.videoUrl,
                frameBorder: "0" });
        }
    }]);

    return _default;
}(_react2.default.PureComponent);

exports.default = _default;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Just a link that will send the user to the video detail.
 * 
 * @param {object} props - The component properties from within the react context.
 */
exports.default = function (props) {
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/video/" + props.contentId },
        props.children
    );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ListViewLink = __webpack_require__(7);

var _ListViewLink2 = _interopRequireDefault(_ListViewLink);

var _Glyphicon = __webpack_require__(2);

var _Glyphicon2 = _interopRequireDefault(_Glyphicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This allows for any kind of mobile navigation. Assuming you have 3 columns to work with in a grid.
 * The left, center and right cells are expected to be within a css grid system that spans exactly 3 columns.
 * Simply return an array of the 3 cells containing whatever elements you wish.
 * If you use a Glyphicon component, you can use the available callbacks to actually manage click events.
 * You may use other components granted you import them correctly.
 * If you wish, the current passed page can re-define the entire layout. This feature was the whole point of this module.
 * The last parameter is a bit of a hack, it hides the right-most cell based on a condition. I would like to have this feature for any cell and not just for a particular one.
 *
 * @param {string} page - The id of the current page.
 * @param {method} toggleElement - A possible callback for when a user clicks an icon.
 * @param {string} mobilePageTitle - The current title, so we can display it or use it for callbacks.
 * @param {bool} hideSearch - If false, hide the search icon, otherwise show it.
 */
exports.default = function (page, toggleElement, mobilePageTitle, hideSearch) {

    var searchIcon = hideSearch ? null : _react2.default.createElement(_Glyphicon2.default, { key: "search", iconSuffix: "search", target: "mobileSearch", pageTitle: mobilePageTitle, clickAction: toggleElement });

    switch (page) {
        case "video-detail":
            return [_react2.default.createElement(
                "div",
                { key: "0", className: "div-mobile-top-menu-left" },
                _react2.default.createElement(
                    _ListViewLink2.default,
                    null,
                    _react2.default.createElement(_Glyphicon2.default, { key: "triangle-left", iconSuffix: "triangle-left" })
                ),
                _react2.default.createElement(_Glyphicon2.default, { key: "list-alt", iconSuffix: "list-alt", target: "mobileMenu", pageTitle: "Menu", clickAction: toggleElement })
            ), _react2.default.createElement(
                "div",
                { key: "1", className: "div-mobile-top-menu-center" },
                mobilePageTitle
            ), _react2.default.createElement(
                "div",
                { key: "2", className: "div-mobile-top-menu-right" },
                searchIcon
            )];
    }
    return [_react2.default.createElement(
        "div",
        { key: "0", className: "div-mobile-top-menu-left" },
        _react2.default.createElement(_Glyphicon2.default, { key: "list-alt", iconSuffix: "list-alt", target: "mobileMenu", pageTitle: "Menu", clickAction: toggleElement })
    ), _react2.default.createElement(
        "div",
        { key: "1", className: "div-mobile-top-menu-center" },
        mobilePageTitle
    ), _react2.default.createElement(
        "div",
        { key: "2", className: "div-mobile-top-menu-right" },
        searchIcon
    )];
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _VideoDetail = __webpack_require__(6);

var _VideoDetail2 = _interopRequireDefault(_VideoDetail);

var _VideoList = __webpack_require__(10);

var _VideoList2 = _interopRequireDefault(_VideoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//the mainContent module is responsible for loading up specific a content item, or a list of content items

/**
 * This module contains the pages that get rendered on the scene.
 * A page is not a css overlay, it is rendered on demand. A page can be a main scene page which has a title or it can be a block that gets embedded in other pages.
 * Add pages as you wish by populating more entries on the availablePages object.
 *
 *
 * @param {string} pageId - Which page should we get?
 * @param {array} contentArray - Our content array that's getting passed down to components.
  * @param {string} loadMoreResultsAction - Pass down from parent component what action should occur when we try to load more content.
 */
exports.default = function (contentArray, pageId, loadMoreResultsAction, setTitleAction) {
    var pages = {
        "video-detail": {
            title: "Video Detail",
            component: _react2.default.createElement(_VideoDetail2.default, { contentArray: contentArray, setTitleAction: setTitleAction })
        },
        "video-list": {
            title: "Video List",
            component: _react2.default.createElement(_VideoList2.default, { loadMoreAction: loadMoreResultsAction, contentArray: contentArray })
        }
    };
    return pages[pageId];
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__(25);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
exports.default = function (renderMe) {
    return '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Universal React Router 4 Demo</title>\n      \n    </head>\n    <body>\n        <div id="app">' + (0, _server.renderToString)(renderMe) + '</div>\n    </body>\n</html>';
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ })
/******/ ]);