"use strict";

module.exports.firstOutputToDom = (objectArr) => {
    let outputDiv = document.getElementById("output");
    
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}">${objectArr[i].msg}<button id ="${i}">Delete</button></div>`;
    }

};

// module.exports.newOutputToDom = (newMessage) => {

// }