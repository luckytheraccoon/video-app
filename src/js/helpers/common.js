/**
 * A helper method that builds a URL based on some parameters
 * 
 * @param {string} requestSearchTerm - The search term to send to the server.
 * @param {string} reqPage - The page the user is requesting.
 * @param {int} itemLimit - The item limit to return.
 * @param {int} itemId - A specific item ID.
 */
function buildApiUrl(query) {
    return "http://localhost:3000/" + query;
}
/**
 * In order to implement a very basic URL router, this method helps with retrieving URL data.
 * 
 * @param {string} paramName - Parameter name to get from the URL.
 */
function getUrlParameter(paramName) {
    let url = window.location.href;
    paramName = paramName.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + paramName + "(=([^&#]*)|&|#|$)"),results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


export { getUrlParameter, buildApiUrl };