//Creates an empty menu array
function Menu() {
    this.FoodData = [];

//Puts a new item on the menu array
    this.AddFoodItem = function (newFoodItem) {
        this.FoodData.push(newFoodItem);
    };
}


//Creates the menu based off the request from the web API
function PopulateMenu() {
var StartMenu = new Menu();
var c = console
var menuApiUrl = 'http://localhost/MenuWebAPI/api/Menu/CreateMenu';
var xhr = new XMLHttpRequest()


    xhr.onreadystatechange = function() 
    {
        if (xhr.readyState == 4 && (xhr.status > 199 && xhr.status < 300))
            {
            var data = xhr.responseText;
            var foodArray = JSON.parse(data)

                for (i=0; i<foodArray.length; i++) 
                    {
                        var foodName = foodArray[i].name;
                        var foodCost = foodArray[i].cost;

                    StartMenu.AddFoodItem(new FoodItem(foodName, foodCost))
                    }
                
                InsertMenu(StartMenu, new Cart())
            }                
    }

    xhr.open("GET", menuApiUrl, true);
    xhr.send();


//makes menu accessible to main module
return StartMenu;
}


