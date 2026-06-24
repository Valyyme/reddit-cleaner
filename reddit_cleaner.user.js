// ==UserScript==
// @name        Reddit Cleaner
// @namespace   Reddit Scripts
// @iconUrl     https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://reddit.com&size=16
// @version     1.0.0
//
// @match       https://www.reddit.com/r/*
// @grant       none
//
// @author      valyyme
// @description Removes superfluous elements from subreddits for a better layout in streams and videos. Could be better but works.
// @run-at      document-idle
// ==/UserScript==

document.getElementsByTagName("reddit-header-large")[0].remove()
document.getElementById("left-sidebar-container").remove()
document.getElementById("right-sidebar-container").remove()
document.getElementsByClassName("community-highlight-carousel")[0].remove()
