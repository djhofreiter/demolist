window.onload = AppSetup;

function AppSetup()
{
    //Creates a new cart from the cart "class"
    var myCart = new Cart();
    //pushes the food data into the menu
    var menu = PopulateMenu();

    Shopper("DefaultUser");
    InsertMenu(menu,myCart);
}

// Inserts the menu onto the page
function InsertMenu(menuObj, cartObj)
{
    var cartList = document.getElementById("cart");
    var cartItem = document.getElementById("cartItem");
    var cartCount = document.getElementById("cartCount");
    var cartCost = document.getElementById("cartCost");
    var cartTotalCost = document.getElementById("totalcost");
    var menuList = document.getElementById("menu");
    var menuTitleNode = document.getElementById("menu");
    var menuCostNode = document.getElementById("menucost");
    var arButtonNode = document.getElementById("addremove");



    for (i = 0; i < menuObj.FoodData.length; i++)
    { 
      //Goes through the menu array   
        menuData = menuObj.FoodData[i];
        //Creates an add button
        var addButton = document.createElement("button");
        // Assigns text to the button
        addButton.innerHTML = "+";
        //Leverages bootstrap to make a green button
        addButton.setAttribute("class", "btn-success");
    
        //Executes function when button is clicked
        function AddHandler(index) {
            //Makes it easier to find the menu item in the array
            var tempMenuItem = menuObj.FoodData[index];

            addButton.addEventListener("click", function ()
            {
                //Pushes the menu item into the cart array
                cartObj.AddCartData(new CartItem(tempMenuItem));
                //Refreshes the Dom with new data every time the count changes
                UpdateDomFromCart(cartObj, cartItem, cartCount, cartCost, cartTotalCost);
            });
        }
        //links the Add button handler to the food data in the menu array
        AddHandler(i);

        //Creates a subtract button
        var subtractButton = document.createElement("button");
        //Assigns text to button
        subtractButton.innerHTML = "-";
        //Leverages bootstrap to make a red button
        subtractButton.setAttribute("class", "btn-danger");
        //Executes function when clicked

        function SubtractHandler(index)
        {
            var tempMenuItem = menuObj.FoodData[index];

            subtractButton.addEventListener("click", function () {
                cartObj.SubtractCartData(new CartItem(tempMenuItem));
                UpdateDomFromCart(cartObj, cartItem, cartCount, cartCost, cartTotalCost);
            });
        }

        SubtractHandler(i);

        //populates menu
        menuTitleNode.appendChild(document.createTextNode(menuData.Name));
        menuCostNode.appendChild(document.createTextNode(menuData.Cost));
        menuCostNode.appendChild(document.createElement("br"));
        arButtonNode.appendChild(addButton);
        arButtonNode.appendChild(subtractButton);
        arButtonNode.appendChild(document.createElement("br"));
        menuList.appendChild(document.createElement("p"));
    }
}

function UpdateDomFromCart(updateFromThisCart, cartItemNode, cartCountNode, cartCostNode, totalCostNode)
{
    //Clears out the text to refresh the information
    cartItemNode.innerHTML = "";
    cartCountNode.innerHTML = "";
    cartCostNode.innerHTML = "";
    totalCostNode.innerHTML = "";

    //Cycles through the cart array and updates the cart on the right side of the screen
    for (i = 0; i < updateFromThisCart.CartData.length; i++)
    {
        cartItemNode.appendChild(document.createTextNode(updateFromThisCart.CartData[i].DesiredItem.Name));
        cartItemNode.appendChild(document.createElement("br"));
        cartCountNode.appendChild(document.createTextNode(updateFromThisCart.CartData[i].Quantity));
        cartCountNode.appendChild(document.createElement("br"));
        cartCostNode.appendChild(document.createTextNode(updateFromThisCart.CartData[i].TotalItemCost().toFixed(2)));
        cartCostNode.appendChild(document.createElement("br"));
    }
    //Inserts the total cost. Limits to 2 decimal places
    totalCostNode.appendChild(document.createTextNode(updateFromThisCart.TotalCost().toFixed(2)));
}