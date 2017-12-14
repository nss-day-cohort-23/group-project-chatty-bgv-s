"use strict";
let outputDiv = document.getElementById("output");


module.exports.firstOutputToDom = (objectArr) => {
    
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}"class="parent">${objectArr[i].msg} <button class="delete">Delete</button></div>`;
    }

};

module.exports.newOutputToDom = (newMessage, index) => {
    outputDiv.innerHTML += `<div id = "${index}"class="parent">${newMessage.msg}<button class="delete">Delete</button></div>`;
};

module.exports.updateDom = (objectArr) => {
    outputDiv.innerHTML = "";
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}"class="parent">${objectArr[i].msg} <button class="delete">Delete</button></div>`;
    }
};