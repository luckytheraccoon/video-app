module.exports = {

    /**
     * A helper method that builds a URL based on some parameters
     * 
     * @param {string} requestSearchTerm - The search term to send to the server.
     * @param {string} reqPage - The page the user is requesting.
     * @param {int} itemLimit - The item limit to return.
     * @param {int} itemId - A specific item ID.
     */
    buildApiUrl: function (query) {
        return "http://localhost:8080/" + query;
    },
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
}