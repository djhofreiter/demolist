'use strict';
window.onload = function() {
    var burg = new Burger("Burger", 4.95)
    console.log(burg.showInfo())

};

// Menu object
    function Menu(name, price) {
        this.itemName = name;
        this.itemPrice = price;
    }

// Burger object using the Menu object
    function Burger(name, price) {
        Menu.call(this, name, price);

        this.showInfo = function() {
            return this.itemName + " $" + this.itemPrice;
        }
    }