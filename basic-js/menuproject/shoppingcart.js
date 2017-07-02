window.cart = (function() {
var item = menu.menuItem;
var cheeseburgerCount = 0
var hotDogCount = 0
var chiliDogCount = 0
var nachosCount = 0
var softDrinkCount = 0
var cartList = document.getElementById("cart")
var itemCost = 0

function addItem() {
    var burgerCount = 0
    console.log("test")
    var burgerCost = burgerCount * 5;
    if (burgerCount > 0) {
            burgerCount++
    }
    else {
        burgerCount++
            cartList.appendChild(document.createTextNode(item[0].name))
            cartList.appendChild(document.createTextNode(burgerCount))
            cartList.appendChild(document.createTextNode(burgerCost))
    }

}
function getItem () {

}
function updateItem () {

}
function removeItem () {

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