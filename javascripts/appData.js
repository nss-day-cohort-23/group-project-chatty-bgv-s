"use strict";

let msgArr = [];

module.exports.getMessages = () => {
    console.log(msgArr);
};

module.exports.addNewMessage = (newMsg) => {
    msgArr = msgArr.concat(newMsg);
};
