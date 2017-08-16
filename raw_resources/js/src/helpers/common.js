/**
 * A helper method that builds a URL based on some parameters
 * 
 * @param {string} requestSearchTerm - The search term to send to the server.
 * @param {string} reqPage - The page the user is requesting.
 * @param {int} itemLimit - The item limit to return.
 * @param {int} itemId - A specific item ID.
 */
function buildApiUrl(requestSearchTerm, reqPage, itemLimit, itemId) {
    let apiUrl = "http://api.joinolx.com/api/v1/videos";
    let apiToken = "olx-token=0a896ba98dacbd3f438050fc80d2a9e359059276";

    if(itemId) {
        return apiUrl+"/"+itemId+"?"+apiToken;
    }

    apiUrl += requestSearchTerm ? "/search?q="+ requestSearchTerm + "&" : "?" ;
    let apiPage = "&page="+reqPage;
    let apiLimit = "&limit="+itemLimit;
    return apiUrl+apiToken+apiPage+apiLimit;
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