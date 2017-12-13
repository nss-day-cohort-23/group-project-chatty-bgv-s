"use strict";

module.exports.outputToDom = (objectArr) => {
    console.log("output to dom called");
    let outputDiv = document.getElementById("output");
    
    for(let i = 0; i < objectArr.length; i++) {
        outputDiv.innerHTML += `<div id = "${i}">${objectArr[i].msg}<button id ="${i}">Delete</button></div>`;
    }

};