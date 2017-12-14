"use strict";

let messageController = require("./appData");
let input = document.getElementById("input");


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
        
        input.value="";// remove text from input after enter key 
          
    }
});

