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

