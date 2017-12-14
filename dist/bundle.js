(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let msgArr = [];

module.exports.getMessages = () => {
    return msgArr;
};

module.exports.addNewMessage = (newMsg) => {
    msgArr.push(newMsg);
    return msgArr;
};

module.exports.clearAllMessages = () => {
    msgArr = [];
    return msgArr;
};
},{}],2:[function(require,module,exports){
"use strict";

let messageController = require("./appData");



module.exports.removeMessage = () => {
    let msgArr = messageController.getMessages();
   
    let parentClass = event.target.closest(".parent");
    parentClass.remove();

    msgArr.splice(parseInt(parentClass.id),1);
    return msgArr;    
};

module.exports.clearAllMessages = () => {
    let clearedArr = messageController.clearAllMessages();
    return clearedArr;
};


},{"./appData":1}],3:[function(require,module,exports){
"use strict";

let messageController = require("./appData");

module.exports.toggleDisabled = () => {
    if (messageController.getMessages().length === 0) {
        document.getElementById("clear").disabled = true;
    } else {
        document.getElementById("clear").disabled = false;    
    }
};

},{"./appData":1}],4:[function(require,module,exports){
"use strict";

let messageController = require("./appData");
let input = document.getElementById("input");
let toggle = require("./disabled");


input.addEventListener("keypress", (e) => {
    let msgArr = messageController.getMessages();
    let output = require ("./outputToDom");
    const key = e.which || e.keyCode;
    if (key === 13){
        let message = input.value;
        let msgObject = {};
        msgObject.msg = message;
        messageController.addNewMessage(msgObject);
        
        let index = msgArr.indexOf(msgObject); 
        output.newOutputToDom(msgObject, index);
        toggle.toggleDisabled();
        input.value=""; 
          
    }
});


},{"./appData":1,"./disabled":3,"./outputToDom":7}],5:[function(require,module,exports){
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
    for (let i = 0; i < msgData.length; i++) {
        messageController.addNewMessage(msgData[i]); 
    }    
    output.firstOutputToDom(messageController.getMessages());
};

},{"./appData":1,"./outputToDom":7}],6:[function(require,module,exports){
"use strict";

let json = require("./jsonData");
let input = require("./input");
let del = require("./delete");
let output = require("./outputToDom");

// let darkTheme = require("./theme");





json.getjsonData();

let removeMessage = (event) => {
    if (event.target.className === "delete") {
        let arrayRemoved = del.removeMessage();
        output.updateDom(arrayRemoved);   
    }
};

document.querySelector("body").addEventListener("click", removeMessage);

let clearAll = () => {
    let clearedArr = del.clearAllMessages();
    console.log("main.js clearedArr", clearedArr);
    output.updateDom(clearedArr);
};

document.getElementById("clear").addEventListener("click", clearAll);



//theme
let isChecked = false; //is off;
let drkTheme = document.getElementById("dTheme");


drkTheme.addEventListener ("click", function (){
    let themeChng = document.getElementById("bGround");
        if (isChecked === false){
            isChecked = true;
        }  else {
            isChecked = false;
        }
        
        if (isChecked) {
            themeChng.style.backgroundColor = "black";
            themeChng.style.color = "#FFD134";
        } else {
                themeChng.style.backgroundColor = "white";
                themeChng.style.color = "black";
        }
    });

 

},{"./delete":2,"./input":4,"./jsonData":5,"./outputToDom":7}],7:[function(require,module,exports){
"use strict";
let outputDiv = document.getElementById("output");


module.exports.firstOutputToDom = (objectArr) => {
    
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}"class="parent">${objectArr[i].msg} <button class="delete">Delete</button></div>`;
    }

};

module.exports.newOutputToDom = (newMessage, index) => {
    outputDiv.innerHTML += `<div id = "${index}"class="parent">${newMessage.msg}<button class="delete">Delete</button></div>`;
};

module.exports.updateDom = (objectArr) => {
    outputDiv.innerHTML = "";
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}"class="parent">${objectArr[i].msg} <button class="delete">Delete</button></div>`;
    }
};
},{}]},{},[6]);
