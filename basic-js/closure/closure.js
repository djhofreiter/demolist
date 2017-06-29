'use strict'

var c = console;
window.onload = function() {

};

function outer() {

    var count = 0;
    return {
        addToCount: function(i) { count +=i},
        getCount: function() {return count; }
    };
}

var counter = outer();

c.log(counter.getCount())
c.log(counter.addToCount(10));
c.log(counter.getCount());

function person(fname, lname) {
    return {
        getFullName: function() {return fname + " " + lname;}
    }
}

var joe = person("joe","K");
c.log(joe.getFullName());
