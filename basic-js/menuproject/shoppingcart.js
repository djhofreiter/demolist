window.cart = (function() {
var item = menu.menuItem;
var cheeseburgerCount = 0
var hotDogCount = 0
var chiliDogCount = 0
var nachosCount = 0
var softDrinkCount = 0
var cartList = document.getElementById("cart")
var cartItem = document.getElementById("cartItem")
var cartCount = document.getElementById("cartCount")
var cartCost = document.getElementById("cartCost")
var itemCost = 0
var burgerCount = 0
var burgerCost = burgerCount * 5;

function addItem() {
//    console.log("test")
    if (burgerCount == 0) {
            burgerCount++
            var burgerCost = burgerCount * 5;
    cartItem.appendChild(document.createTextNode(item[0].name))
    cartCount.appendChild(document.createTextNode(burgerCount))
    cartCost.appendChild(document.createTextNode(burgerCost))
    }

    else {
        burgerCount++
        var burgerCost = burgerCount * 5;
        cartCount.innerText=burgerCount
        cartCost.innerText = burgerCost
    }

}
function getItem () {

}
function updateItem () {

}
function removeItem () {
    if (burgerCount == 1) {
            burgerCount--
    cartItem.removeChild(document.createTextNode(item[0].name))
    cartCount.removeChild(document.createTextNode(burgerCount))
    cartCost.removeChild(document.createTextNode(burgerCost))

    }

    if (burgerCount > 1) {
        burgerCount--
        var burgerCost = burgerCount * 5;
        cartCount.innerText=burgerCount
        cartCost.innerText = burgerCost
    }


}
function getCart () {

}
function loadCart () {

}
function updateCart () {

}
function getTotal () {

}

return {
    addItem: addItem,
    getItem: getItem,
    updateItem: updateItem,
    removeItem: removeItem,
    getCart: getCart,
    loadCart: loadCart,
    updateCart: updateCart,
    getTotal: getTotal,
//    burgerCount:burgerCount
}

})();