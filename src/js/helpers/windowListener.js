/** 
* On window resize, adjust the iframes width and height
*/
var iframeComponentId;
window.onresize = function() {
    if(typeof iframeComponentId != "undefined") {
        let videoIframe = document.getElementById(iframeComponentId);
        videoIframe.width = videoIframe.parentElement.parentElement.offsetWidth;
        videoIframe.height = Math.floor(videoIframe.width / 1.77);
        videoIframe.parentElement.style.height = videoIframe.height + "px";
    }
}