'use strict';
var c =console;
// Waits for DOM to load
window.onload = function() {
// gets the <ul> list object
    var list = document.getElementById ('list');
// attaches click event to the console log. Example of bubbling
    list.addEventListener("click", function(event) {
        c.log(event.target.innerText);
    });

};