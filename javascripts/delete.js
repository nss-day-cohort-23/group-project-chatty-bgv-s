"use strict";

let messageController = require("./appData");



module.exports.removeMessage = () => {
    let msgArr = messageController.getMessages();
   
    let parentClass = event.target.closest(".parent");
    parentClass.remove();
    console.log(typeof parentClass.id);

    msgArr.splice(parseInt(parentClass.id),1);
    console.log(parentClass.id);
    console.log("this should be the message array",msgArr);
    return msgArr;    
};

module.exports.clearAllMessages = () => {
    let clearedArr = messageController.clearAllMessages();
    console.log("delete mod msgArr", clearedArr);
    return clearedArr;
};

