//Creates class of Food item with name and cost as required values upon instantiation
function FoodItem(name, cost)
{
this.Name = name;
this.Cost = cost;
}


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
    this.CartData = [];


//Adds an item to the cart
    this.AddCartData = function (newCartItem) {
        //Looks to see if the desired item matches the item of the same name already in cart
        var Item = this.CartData.find(function (searchedCartItem)
        {
            return searchedCartItem.DesiredItem.Name === newCartItem.DesiredItem.Name;
        });
        //If the item is not found, the returned value is undefined. A new item is added to the array        
        if (Item === undefined) {
            this.CartData.push(newCartItem);
        }
        //If the item is found, it increases the count by 1.
        else {
            Item.Quantity++;
        }

    };

//Removes item from the cart
    this.SubtractCartData = function (cartItem) {
        //Assigns item name to item variable to be found later in the cart array
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
                item.Quantity--;
            }
            //Removes from cart entirely if 1 is in the cart at time of event
            else {
                this.CartData.splice(index,1);
            }
        }

    };
//Computes the total cost
    this.TotalCost = function () {
        //Initializes total as zero
        var Total = 0;
        //Performs total item cost for each item in array
        for (i = 0; i < this.CartData.length; i++) {
            Total += this.CartData[i].TotalItemCost();
        }
        return Total;

    };
}