// ==UserScript==
// @name         Remove "Archive All" links in Inbox
// @namespace    http://example.com
// @version      0.1
// @description  Prevents you from accidentally archiving all tasks in your inbox.
// @author       Dominik Horn
// @match        https://app.asana.com/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.toolbar-no-grad, .show-archive-all-section, .MyTasksTaskRow-scheduleStatus, .TaskRow-detailsCaret, .HarvestButton { display: none ! important; } .TaskCommentComposer-toolbar { margin-bottom: 0px ! important; padding: 0px ! important;} .TaskCommentComposer-textEditor {height: 98px !important} #center_pane_container { max-width: 800px !important} #right_pane_container {max-width: 875px !important} .details-invisible #right_pane_container {margin-left: 15px !important;}');