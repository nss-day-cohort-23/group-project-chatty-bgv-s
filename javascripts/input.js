"use strict";

let messageController = require("./appData");
let input = document.getElementById("input");

input.addEventListener("keypress", (e) => {
    let output = require ("./outputToDom");
    const key = e.which || e.keyCode;
    if (key === 13){
        let message = input.value;
        let msgObject = {};
        msgObject.msg = message;
        messageController.addNewMessage(msgObject);
        
        let index = messageController.getMessages().indexOf(msgObject);
        
        console.log(messageController.getMessages()); //Looking to see if new message got added to array
        // console.log(messageController.getMessages().keys());
        
        output.newOutputToDom(msgObject, index);         
    }
});

