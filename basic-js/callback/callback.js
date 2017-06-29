'use strict'
var c = console;

var callback = function (msg) { 
    c.log(msg);
}

function runCallback (cb) {
    cb("this is a callback")
}

callback("not a callback");
runCallback(callback);