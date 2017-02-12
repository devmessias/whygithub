// ==UserScript==
// @name         why github?
// @include http://github.com/*
// @include https://github.com/*

// @version      0.1
// @description  Removes the dark menubar from GitHub.
// @author       devmessias
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    		document.querySelector('.header-dark').classList.remove('header-dark');
})();
