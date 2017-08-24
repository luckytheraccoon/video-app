import React from "react";

import ListViewLink from "components/ListViewLink";
import Glyphicon from "components/Glyphicon";
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
export default (page, toggleElement, mobilePageTitle, hideSearch) => {

    let searchIcon = hideSearch ? null : <Glyphicon key="search" iconSuffix="search" target="mobileSearch" pageTitle={mobilePageTitle} clickAction={toggleElement} />;

    switch (page) {
        case "video-detail":
            return [
                <div key="0" className="div-mobile-top-menu-left">
                    <ListViewLink>
                        <Glyphicon key="triangle-left" iconSuffix="triangle-left" />
                    </ListViewLink>
                    <Glyphicon key="list-alt" iconSuffix="list-alt" target="mobileMenu" pageTitle="Menu" clickAction={toggleElement} />
                </div>,
                <div key="1" className="div-mobile-top-menu-center">
                    {mobilePageTitle}
                </div>,
                <div key="2" className="div-mobile-top-menu-right">
                    {searchIcon}
                </div>
            ];
    }
    return [
        <div key="0" className="div-mobile-top-menu-left">
            <Glyphicon key="list-alt" iconSuffix="list-alt" target="mobileMenu" pageTitle="Menu" clickAction={toggleElement} />
        </div>,
        <div key="1" className="div-mobile-top-menu-center">
            {mobilePageTitle}
        </div>,
        <div key="2" className="div-mobile-top-menu-right">
            {searchIcon}
        </div>
    ];
}