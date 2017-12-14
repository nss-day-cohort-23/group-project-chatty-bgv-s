"use strict";

let json = require("./jsonData");
let input = require("./input");
let del = require("./delete");
let output = require("./outputToDom");

json.getjsonData();

let removeMessage = (event) => {
    if (event.target.className === "delete") {
        let arrayRemoved = del.removeMessage();
        output.updateDom(arrayRemoved);   
    }
};

document.querySelector("body").addEventListener("click", removeMessage);

let clearAll = () => {
    let clearedArr = del.clearAllMessages();
    console.log("main.js clearedArr", clearedArr);
    output.updateDom(clearedArr);
};

document.getElementById("clear").addEventListener("click", clearAll);



