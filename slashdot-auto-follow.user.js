// ==UserScript==
// @name        Slashdot Auto Follow 
// @namespace   Violentmonkey Scripts
// @match       https://*.slashdot.org/*
// @grant       none
// @version     1.0
// @homepageURL https://github.com/heussd/slashdot-auto-follow
// @updateURL   https://github.com/heussd/slashdot-auto-follow/raw/main/slashdot-auto-follow.user.js
// ==/UserScript==

window.location.href = 
  document
    .getElementsByTagName("header")[0]
    .getElementsByClassName("story-sourcelnk")[0]
    .href