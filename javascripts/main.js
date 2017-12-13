"use strict";

let json = require("./jsonData");
let input = require("./input");
let del = require("./delete");


json.getjsonData();

let removeMessage = () => {
    document.querySelector("body").addEventListener("click", function(event){
        if (event.target.className === "delete") {
            del.removeMessage();
        }
    });
};



