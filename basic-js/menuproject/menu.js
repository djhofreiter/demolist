var c = console;
// Declares object "burg", gives it the name Burger and price of $4.95
    var burg = new Burger("Burger", 4.95)
// Displays to console the burger and executing the function showInfo
    console.log(burg.showInfo())


// Menu object
    function Menu(name, price) {
        this.itemName = name;
        this.itemPrice = price;
    }

// Burger object using the Menu object
    function Burger(name, price) {

        // Calls the menu function to this object
        Menu.call(this, name, price);

        // Getter for the object's item name and price
        this.showInfo = function() {
            return this.itemName + " $" + this.itemPrice;
        }
    }


window.menu = (function() {

            var menuData = [
        {"name": "Burger", "price": 4.99},
        {"name": "Cheeseburger", "price": 5.49},
        {"name": "Hot Dog", "price": 3.99},
        {"name": "Chili Dog", "price": 4.49},
        {"name": "Nachos", "price": 5.99},
        {"name": "Soft Drink", "price": 1.99}
            ]
            
    // public variables & functions


    return {
        menuItem: menuData
    }
})();