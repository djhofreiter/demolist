window.onload = function(){
// Menu access
window.main = (function(menu){
var c = console

// Makes the modular variable local and easier to write
var item = menu.menuItem;
var menuList = document.getElementById("menu")

//Creates an add button
//var addButton = document.createElement("button")
//var subtractButton = document.createElement("button")

// Inserts the menu onto the page
function insertMenu() {
for (i = 0; i < 6; ++i) { //Goes through the array
var addButton = document.createElement("button")
addButton.innerHTML = "Add" // Assigns text to the button
var lineSpacing = document.createElement("br")
addButton.addEventListener("click",function(){
    window.cart.addItem()
})
//Creates a subtract button
var subtractButton = document.createElement("button")
//Assigns text to button
subtractButton.innerHTML = "Subtract"
//populates web page with menu
    menuList.appendChild(document.createTextNode(item[i].name))
    menuList.appendChild(lineSpacing)
    menuList.appendChild(document.createTextNode(item[i].price))
    menuList.appendChild(lineSpacing)
    menuList.appendChild(addButton);
    menuList.appendChild(subtractButton)
    menuList.appendChild(document.createElement("p"))
// document.getElementById("main").appendChild (itemName[i].name)
}


}

insertMenu()

})(window.menu || (window.cart) ); //IIFE function
var burgerCount = cart.burgerCount


// Cart functions
window.mainCart = (function(cart) {
// Makes cart function local and easier to read/write
//var addItem = cart.addItem() 


})(window.cart || (window.cart) );

};