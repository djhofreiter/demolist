'use strict';
var c = console;

function getPromise(msg) {
    var val = new Promise(function(res, rej) {
        res(msg + " promise resolved");
        rej(msg + " promise has been rejected");
    })
    return val;
}

var thePromise = getPromise("hello");

thePromise.then(function(data) {
    c.log(data);
})