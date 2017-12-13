"use strict";
let outputDiv = document.getElementById("output");

module.exports.firstOutputToDom = (objectArr) => {
    
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}">${objectArr[i].msg}<button id ="${i}">Delete</button></div>`;
    }

};

module.exports.newOutputToDom = (newMessage, index) => {
    outputDiv.innerHTML += `<div id = "${index}">${newMessage.msg}<button id ="${index}">Delete</button></div>`;
};