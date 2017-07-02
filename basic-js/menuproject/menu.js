window.menu = (function() {
// Creates private array of objects
            var menuData = [
        {"name": "Burger", "price": 4.99, "quantity": 0},
        {"name": "Cheeseburger", "price": 5.49, "quantity": 0},
        {"name": "Hot Dog", "price": 3.99, "quantity": 0},
        {"name": "Chili Dog", "price": 4.49, "quantity": 0},
        {"name": "Nachos", "price": 5.99, "quantity": 0},
        {"name": "Soft Drink", "price": 1.99, "quantity": 0}
            ]
            
    // public variables & functions

// Makes objects public
    return {
        menuItem: menuData
    }
})();