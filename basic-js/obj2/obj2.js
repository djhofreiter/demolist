'use strict';
window.onload = function() {
    var rect = new Rectangle(2, 4);
    console.log(rect.Area());
    var sqr = new Square(2);
    console.log(sqr.Area());
    var tri = new Triangle(3,5);
    console.log(tri.getArea());

};

// Shape object
    function Shape(height, width) {
        this.h = height;
        this.w = width;
        }

// Rectangle object using a Shape object
    function Rectangle(height, width) {
        Shape.call(this, height, width);

        this.Area = function() {
            return this.h * this.w;
        }
    }

    function Square(length) {
        //this.prototype = Object.create(Rectangle.prototype);
        Rectangle.call(this,length,length);
    }

    function Triangle(height, width) {
        Rectangle.call(this, height, width);
        this.prototype = new Rectangle(height, width);
        this.getArea = function() {
            return this.prototype.Area()/2;
        }

    }
