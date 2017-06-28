'use strict';
var c =console;
// Waits for DOM to load
window.onload = function() {
    var btnElem = document.getElementById("btnGO");
    var inputElem = document.getElementById("tb");

    var clog = function() {
        c.log(inputElem.value);
    }
    // add click event to button
    btnElem.addEventListener("click", clog);
    btnElem.addEventListener("click", function(event) {
        var numElem= document.getElementById("num");
        var val = numElem.value;
        c.log(val);
        c.log(typeof val);

        var num = parseInt(val);

        c.log(num);
        c.log(typeof num);
    });
    // inputElem.addEventListener("keypress", clog);
};