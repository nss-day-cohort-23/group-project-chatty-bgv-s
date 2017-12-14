"use strict";

let messageController = require("./appData");
let input = document.getElementById("input");
let msgArr = messageController.getMessages();


input.addEventListener("keypress", (e) => {
    let output = require ("./outputToDom");
    const key = e.which || e.keyCode;
    if (key === 13){
        let message = input.value;
        let msgObject = {};
        msgObject.msg = message;
        messageController.addNewMessage(msgObject);
        
        let index = msgArr.indexOf(msgObject); 
        output.newOutputToDom(msgObject, index);
        
        input.value="";// remove text from input after enter key 
          
    }
});

