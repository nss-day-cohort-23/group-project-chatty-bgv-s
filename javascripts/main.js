"use strict";

let preMsg = null;
let privArr = [];
const msgReq = new XMLHttpRequest();
const parseMsg = () => {
    const msgData = JSON.parse(event.target.responseText).messages;
    privArr = privArr.concat(msgData); //This is our array of orig messages
    write();
};

msgReq.addEventListener("load", parseMsg);
msgReq.open("GET", "messages.json");
msgReq.send();   




function write() {
    console.log(privArr);
}   