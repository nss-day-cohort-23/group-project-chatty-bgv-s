"use strict";

let json = require("./jsonData");
let input = require("./input");
let del = require("./delete");
let output = require("./outputToDom");
let toggle = require("./disabled");

json.getjsonData();

let removeMessage = (event) => {
    if (event.target.className === "delete") {
        let arrayRemoved = del.removeMessage();
        output.updateDom(arrayRemoved);   
    }
    toggle.toggleDisabled();
};

document.querySelector("body").addEventListener("click", removeMessage);

let clearAll = () => {
    let clearedArr = del.clearAllMessages();
    output.updateDom(clearedArr);
    toggle.toggleDisabled();

};

document.getElementById("clear").addEventListener("click", clearAll);




let largeBtn = document.getElementById("large");
console.log(largeBtn);

largeBtn.addEventListener("click", ()=>{ 
    let output = document.getElementById("output");
    if (largeBtn.checked){
        console.log("is checked");
        console.log(largeBtn.checked);
        let output = document.getElementById("output");
        output.style.fontSize= "40rem";
    }else {
        output.style.fontSize = "1em";
    }
});


const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

function stickNav () {
    console.log('navTop = ' + navTop);
    console.log('scrollY = ' + window.scrollY);
    if (window.scrollY >= navTop){
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', stickNav);

//theme
let isChecked = false;
let drkTheme = document.getElementById("darkTheme");
drkTheme.addEventListener("click", function(){
    let themeChng = document.getElementById("bGround");
        if (isChecked === false){
            isChecked = true;
        }else {
            isChecked = false;
        }

        if (isChecked){
            themeChng.style.background = "rgba(14, 42, 84, 0.89)";
            themeChng.style.color = "rgba(255, 208, 52, 0.801)";
        } else {
            themeChng.style.background = "white";
            themeChng.style.color = "black";
        }
});