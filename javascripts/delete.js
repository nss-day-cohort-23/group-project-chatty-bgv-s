"use strict";

let messageController = require("./appData");
let msgArr = messageController.getMessages();



module.exports.removeMessage = () => {
   
    let parentClass = event.target.closest(".parent");
    parentClass.remove();
    console.log(typeof parentClass.id);

    msgArr.splice(parseInt(parentClass.id),1);
    console.log(parentClass.id);
    console.log("this should be the message array",msgArr);
    return msgArr;

    
};

