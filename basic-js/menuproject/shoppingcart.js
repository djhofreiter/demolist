window.cart = (function() {
var item = menu.menuItem;
var cheeseburgerCount = 0
var hotDogCount = 0
var chiliDogCount = 0
var nachosCount = 0
var softDrinkCount = 0
var cartList = document.getElementById("cart")
var itemCost = 0
var burgerCount = 0

function addItem() {
    console.log("test")
    var burgerCost = burgerCount * 5;
    if (burgerCount === 0) {
            burgerCount++
            cartList.innerText=burgerCount
    }

    if (burgerCount > 0) {
        cartList.innerText="test"
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