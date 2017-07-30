//Creates class of Food item with name and cost as required values upon instantiation
function FoodItem(name, cost)
{
this.Name = name;
this.Cost = cost;
}

var cartApiUrl = 'http://localhost/MenuWebAPI/api/Cart';
var xhr = new XMLHttpRequest()



//Creates a desired item to populate the cart with a default quantity of 1
function CartItem(desiredItem) {
    this.DesiredItem=desiredItem;
    this.Quantity=1;
//Creates a subtotal for each item based on quantity
    this.TotalItemCost = function () {
        return this.Quantity * this.DesiredItem.Cost;
    };
}



//Creates a shopper class
function Shopper(shopperName){
    document.getElementById("shopperName").appendChild(document.createTextNode(shopperName))
}

//Creates an empty cart array
function Cart() {

this.CartData = []

/*    if (xhr.readyState == 4 && xhr.status == 200) 
        {
        var data = xhr.responseText;
        c.log(data);
        c.log(JSON.parse(data));
        var cartArray = JSON.parse(data)
            this.CartData = cartArray;

        }                
    

    xhr.open("GET", http://localhost/MenuWebAPI/api/Cart/GetTotal, true);
    xhr.send();
*/
/*Creates an empty cart array
function Cart(returnedArray) {
    this.CartData = (returnedArray);
    */


//Adds an item to the cart
    this.AddCartData = function (newCartItem) {
        //Sets the index of where the desired item is in the cart
        var Item = this.CartData.find(function (searchedCartItem)
        {
            return searchedCartItem.DesiredItem.Name === newCartItem.DesiredItem.Name;
        });

        //If the item is not found, the returned value is undefined. A new item is added to the array
        if (Item === undefined) {
//            this.CartData.push(newCartItem);
        xhr.open("POST", "http://localhost/MenuWebAPI/api/Cart/GetTotal", true)
            }


        //If the item is found, it increases the count by 1.
        else {
//            Item.Quantity++;
        xhr.open("PUT", "http://localhost/MenuWebAPI/api/Cart/GetTotal", true)
            }

    };

//Removes item from the cart
    this.SubtractCartData = function (cartItem) {
        //Assigns index for where an item is in the cart's array
        var item = this.CartData.find(function (searchedCartItem)
        {
            return searchedCartItem.DesiredItem.Name === cartItem.DesiredItem.Name;
        });

        //Looks for item in array first
        var index = this.CartData.indexOf(item);
        //Does nothing if item is not in array
        if (index >= 0)
        {

            //Reduces item cart by one if quantity is greater than 1
            if (item.Quantity > 1)
            {
//                item.Quantity--;
                xhr.open("POST", "http://localhost/MenuWebAPI/api/Cart/GetTotal", true)

            }
            //Removes from cart entirely if 1 is in the cart at time of event
            else {
//                this.CartData.splice(index,1);
                xhr.open("POST", "http://localhost/MenuWebAPI/api/Cart/GetTotal", true)
            }
        }

    };


//Computes the total cost
    this.TotalCost = function () {

        xhr.open('GET', 'http://localhost/MenuWebAPI/api/Cart/GetTotal', true)
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status==200) {
                callback(xhr.response);
            }
        }

        // //Initializes total as zero
        // var Total = 0;
        // //Performs total item cost for each item in array
        // for (i = 0; i < this.CartData.length; i++) {
        //     Total += this.CartData[i].TotalItemCost();
        // }
        // return Total;

    }
}

function updateCart() {

/*    //Cycles through the cart array and updates the cart on the right side of the screen
    for (i = 0; i < updateFromThisCart.CartData.length; i++)
    {
        var addButton = document.createElement("button");
        // Assigns text to the button
        addButton.innerHTML = "+";
        //Uses bootstrap to make a green button
        addButton.setAttribute("class", "btn-success");
        addButton.setAttribute("id", "addCartButton" + i);
    
        //Creates a subtract button
        var subtractButton = document.createElement("button");
        //Assigns text to button
        subtractButton.innerHTML = "-";
        //Leverages bootstrap to make a red button
        subtractButton.setAttribute("class", "btn-danger");
        subtractButton.setAttribute("id", "subtractCartButton" + i)

        cartItem.appendChild(document.createTextNode(updateFromThisCart.CartData(cartArray[i]).DesiredItem.Name));
        cartItem.appendChild(document.createTextNode(cartItemQuantity));
        cartItem.appendChild(addButton);
        cartItem.appendChild(subtractButton);
        cartItem.appendChild(document.createElement("br"));
        cartItem.appendChild(document.createTextNode(cartItemCost));
        cartItem.appendChild(document.createElement("br"));
    }
*/
xhr.open("GET", "http://localhost/MenuWebAPI/api/Cart/LoadCart", true)
    //Inserts the total cost. Limits to 2 decimal places
    totalCostNode.appendChild(document.createTextNode(updateFromThisCart.TotalCost().toFixed(2)));
}