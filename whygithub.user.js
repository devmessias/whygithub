// ==UserScript==
// @name         why github?
// @namespace http://brunomessias.com
// @include http://github.com/*
// @include https://github.com/*
// @include https://gist.github.com/*
// @version      1.0
// @description  Removes the dark menubar from GitHub.
// @author       devmessias
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
     document.querySelector('.header-dark').classList.remove('header-dark');
})();
