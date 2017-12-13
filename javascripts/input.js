"use strict";

let messageController = require("./appData");
let input = document.getElementById("input");
let output = require ("./outputToDom");

input.addEventListener("keypress", (e) => {
    const key = e.which || e.keyCode;
    if (key === 13){
        let message = input.value;
        let msgObject = {};
        msgObject.msg = message;
        messageController.addNewMessage(msgObject);
        console.log(messageController.getMessages());
        
        
        // output.NewOutputToDom(messageController.getMessages()); 
    }
});

