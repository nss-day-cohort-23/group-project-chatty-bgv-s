"use strict";

let json = require("./jsonData");
let input = require("./input");
let del = require("./delete");
let output = require("./outputToDom");

json.getjsonData();

let removeMessage = () => {
    document.querySelector("body").addEventListener("click", function(event){
        if (event.target.className === "delete") {
            let arrayRemoved = del.removeMessage();
            output.updateDom(arrayRemoved);
            
        }
    });
};

removeMessage(); ///need to call lmao

