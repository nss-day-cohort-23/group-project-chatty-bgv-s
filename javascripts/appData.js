"use strict";

let msgArr = [];

module.exports.getMessages = () => {
    return msgArr;
};

module.exports.addNewMessage = (newMsg) => {
    msgArr.push(newMsg);
};

module.exports.clearAllMessages = () => {
    msgArr = [];
    return msgArr;
};