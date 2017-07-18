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

var c = console

var menuApiUrl = 'http://localhost/MenuWebAPI/api/Menu';

    var xhr = new XMLHttpRequest()
    console.log("xhr object created: " + xhr.readyState);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            c.log(data);
            c.log(JSON.parse(data));
            var foodArray = JSON.parse(data)

            for (i=0; i<foodArray.length; i++) {
            StartMenu.AddFoodItem(new FoodItem(foodArray[i].name, foodArray[i].cost))
            c.log(foodArray[i].name + " " + foodArray[i].cost)
            }
        }
    }

    xhr.open("GET", menuApiUrl, true);
    xhr.send();


//pushes food onto the menu
/*StartMenu.AddFoodItem(new FoodItem("Burger",4.99));
StartMenu.AddFoodItem(new FoodItem("Cheeseburger", 5.49));
StartMenu.AddFoodItem(new FoodItem("Hot Dog", 3.99));
StartMenu.AddFoodItem(new FoodItem("Chili Dog", 4.49));
StartMenu.AddFoodItem(new FoodItem("Nachos", 5.99));
StartMenu.AddFoodItem(new FoodItem("Soft Drink", 1.99));
*/

//makes menu accessible to main module
return StartMenu;
}