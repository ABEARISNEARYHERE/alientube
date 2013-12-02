/* browser: true */
/* global require */

var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var simplePrefs = require("simple-prefs");

var localFiles = {
    "error.png" : data.url("error.png")
};

pageMod.PageMod({
    include: ["https://www.youtube.com/watch*", "http://www.youtube.com/watch*"],
    contentScriptOptions : localFiles,
    contentStyleFile: [
        data.url('style.css')
    ],
    contentScriptFile: [
        data.url("jquery-1.9.1.min.js"),
        data.url("purl.js"),
        data.url("snuownd.js"),
        data.url("underscore-min.js"),
        data.url("raven.min.js"),
        data.url("script.js"), 
    ],
    onAttach: function(worker) {
        worker.postMessage(simplePrefs);
    }
});