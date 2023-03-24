// ==UserScript==
// @name         ToggleSidebar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Toggle den dumme sidebar på Jira
// @author       You
// @match        https://jira.erst.dk/browse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=erst.dk
// @grant        none
// ==/UserScript==
​
(function() {
    'use strict';
​
    let btn = document.createElement('input');
    btn.id = "toggleDummeSideBar";
    btn.type = "button";
    btn.value = ">>";
    btn.className += "aui-button aui-button-subtl"
    btn.addEventListener('click', klik);
   document.getElementById("opsbar-jira.issue.tools").appendChild(btn);
​
})();
​
​
function klik(e) {
      let sidebar = document.getElementById('viewissuesidebar');
​
        if (sidebar.style.display == "none") {
            sidebar.style.display = ""
             e.target.value = ">>"
        } else {
            sidebar.style.display = "none"
             e.target.value = "<<"
        }
}