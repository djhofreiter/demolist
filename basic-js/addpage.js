'use strict';
var c =console;
// Waits for DOM to load
window.onload = function() {
    var btnAnswer= document.getElementById("btnAnswer");

    btnAnswer.addEventListener("click", function(event) {
    var btnElem1 = document.getElementById("btn1");
    var btnElem2 = document.getElementById("btn2");
    var int1 = parseInt(btnElem1.value);
    var int2 = parseInt(btnElem2.value);
    var answer = int1 + int2;
    document.write(answer);
});

    // var clog = function() {
    //     c.log(inputElem.value);
    // }
    // // add click event to button
    // btnElem.addEventListener("click", clog);
    // btnElem.addEventListener("click", function(event) {
    //     var numElem= document.getElementById("num");
    //     var val = numElem.value;
    //     c.log(val);
    //     c.log(typeof val);

    //     var num = parseInt(val);

    //     c.log(num);
    //     c.log(typeof num);
    // });
    // // inputElem.addEventListener("keypress", clog);
};