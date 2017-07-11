//Creates an empty menu array
function Menu() {
    this.FoodData = [];

//Puts a new item on the menu array
    this.AddFoodItem = function (newFoodItem) {
        this.FoodData.push(newFoodItem);
    };
}


function PopulateMenu() {
var StartMenu = new Menu();
//pushes food onto the menu
StartMenu.AddFoodItem(new FoodItem("Burger",4.99));
StartMenu.AddFoodItem(new FoodItem("Cheesebuger", 5.49));
StartMenu.AddFoodItem(new FoodItem("Hot Dog", 3.99));
StartMenu.AddFoodItem(new FoodItem("Chili Dog", 4.49));
StartMenu.AddFoodItem(new FoodItem("Nachos", 5.99));
StartMenu.AddFoodItem(new FoodItem("Soft Drink", 1.99));

//makes menu accessible to main module
return StartMenu;
}