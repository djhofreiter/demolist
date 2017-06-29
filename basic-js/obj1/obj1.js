'use strict';
window.onload = function() {
    function Shape(type, height, width) {
        this.type = type;
        this.height = height;
        this.width = width;
    }
    
    Shape.prototype.Area = function() {
        return this.height * this.width;
            }
    var square = new Shape("square", 10, 10);
    var rectangle = new Shape("rectangle", 4, 6);
    var triangle = new Shape("triangle", 3, 4);

console.log(square);
console.log(square.Area());
console.log(triangle);
console.log(triangle.Area());
console.log(rectangle);
console.log(rectangle.Area());

    String.prototype.prefix = function(msg) {
        return msg +  " " + this;
    }

    console.log("world".prefix("hello"));
};