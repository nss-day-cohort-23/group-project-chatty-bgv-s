(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let msgArr = [];

module.exports.getMessages = () => {
    return msgArr;
};

module.exports.addNewMessage = (newMsg) => {
    msgArr = msgArr.concat(newMsg);
};

},{}],2:[function(require,module,exports){
"use strict";

let messageController = require("./appData");
let output = require ("./outputToDom");

module.exports.getjsonData =() => {
    let preMsg = null;
    const msgReq = new XMLHttpRequest();
    msgReq.addEventListener("load", parseMsg);
    msgReq.open("GET", "messages.json");
    msgReq.send(); 
};

const parseMsg = () => {
    const msgData = JSON.parse(event.target.responseText).messages;
    messageController.addNewMessage(msgData); 
    output.outputToDom(messageController.getMessages());
};

},{"./appData":1,"./outputToDom":4}],3:[function(require,module,exports){
"use strict";

let json = require("./jsonData");
let messages = require("./appData");

json.getjsonData();


},{"./appData":1,"./jsonData":2}],4:[function(require,module,exports){
"use strict";

module.exports.outputToDom = (objectArr) => {
    console.log("output to dom called");
    let outputDiv = document.getElementById("output");
    
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}">${objectArr[i].msg}<button id ="${i}">Delete</button></div>`;
    }

};
},{}]},{},[3]);
