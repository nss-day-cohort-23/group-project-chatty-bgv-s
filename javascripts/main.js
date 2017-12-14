"use strict";

let json = require("./jsonData");
let input = require("./input");
let del = require("./delete");
let output = require("./outputToDom");

// let darkTheme = require("./theme");





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



//theme
let isChecked = false; //is off;
let drkTheme = document.getElementById("dTheme");


drkTheme.addEventListener ("click", function (){
    let themeChng = document.getElementById("bGround");
        if (isChecked === false){
            isChecked = true;
        }  else {
            isChecked = false;
        }
        
        if (isChecked) {
            themeChng.style.backgroundColor = "black";
            themeChng.style.color = "#FFD134";
        } else {
                themeChng.style.backgroundColor = "white";
                themeChng.style.color = "black";
        }
    });

 
