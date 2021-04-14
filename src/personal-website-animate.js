import './personal-website.js';

export function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent(`on${eventName}`, callback);
    } else {
        element["on" + eventName] = callback;
    }
}

/* <div id="profile1" style = {{display: `${'none'}`}}><img id="profile2" src={profile1} alt="profile1"/></div> */

export function elementGet(){
    var element1 = ['m','o','m','m','a','c','h','e','e','s','e','2','4'];
    return element1 
}