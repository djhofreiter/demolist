'use strict';
window.onload = function() {
    function Shape(type, height, width) {
        this.type = type;
        this.height = height;
        this.width = width;
    }

    var square = new Shape("square", 10, 10);
    var triangle = new Shape("triangle", 3, 4);
    var rectangle = new Shape("rectangle", 4, 6);

console.log(Shape);
console.log(square);
console.log(triangle);
console.log(rectangle);
};