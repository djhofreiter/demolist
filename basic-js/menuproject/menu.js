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


//Kurtwood's approach
function asynchronousLoad(url, method, data) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            xhr.responseType = "text";
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) 
                    {
                        resolve(JSON.parse(xhr.responseText))
                    }
                else
                    {
                        reject(Error(xhr.status + " " + xhr.statusText))
                    }
                    
            };
            xhr.send(data);
        });

    }

      //gets the item by name
function getItem(name, callback){
        var promise = asynchronousLoad("http://localhost/MenuWebAPI/api/Menu/"+name+"/", "GET", null);
        promise.then(function (data){
            callback(JSON.parse(data));
        })
    };

var getMenu = function (callback){
var promise = asynchronousLoad("http://localhost/MenuWebAPI/api/Menu/", "GET",null);
 promise.then(function (data)
 {
   callback(JSON.parse(data));
 });
};

function addItem(item, price,cat_id, callback){
//creats strings of object
          var  Item = "\"{'menu_id': 0, 'name': '" + item + "', 'price': " + Number.parseFloat(price) +"}\"";
          c.log(Item);
            var promise = asynchronousLoad("http://localhost/MenuWebAPI/api/Menu/", "POST", Item);
              promise.then(function () {
                  //once post is done
               callback();
              });
    };

    //update a menu item of an item
    function updateItem(name,price,cat_id, callback){
        var item = "\"{'name': '"+name+"','price':'"+price+"}\"";
        var promise = asynchronousLoad("http://localhost/MenuWebAPI/api/Menu/", "PUT", item);
        promise.then (function (){
            callback();
        })
    };

//removes item from menu
    function removeItem(name, callback){
            var promise = asynchronousLoad("http://localhost/MenuWebAPI/api/Menu/"+name+"/", "DELETE", null);
            promise.then(function (data){
                callback();
            }); 
    };