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
