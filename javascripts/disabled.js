"use strict";

let messageController = require("./appData");

module.exports.toggleDisabled = () => {
    if (messageController.getMessages().length === 0) {
        document.getElementById("clear").disabled = true;
    } else {
        document.getElementById("clear").disabled = false;    
    }
};
