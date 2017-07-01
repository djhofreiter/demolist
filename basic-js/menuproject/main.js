// Anonymous function
window.main = (function(module2){
var c = console
var itemName = module2.menuItem;
var lineSpacing = document.createElement("p")
var menuList = document.getElementById("menu")

function insertMenu() {
for (i = 0; i < 6; ++i) {
var addButton = document.createElement("button")
addButton.innerHTML = "Add"

var subtractButton = document.createElement("button")
subtractButton.innerHTML = "Subtract"
    menuList.appendChild(document.createTextNode(itemName[i].name))
    menuList.appendChild(document.createTextNode(itemName[i].price))
    menuList.appendChild(addButton)
    menuList.appendChild(subtractButton)
    menuList.appendChild(document.createElement("p"))
// document.getElementById("main").appendChild (itemName[i].name)
}


}

insertMenu()


    
 })(window.menu || (window.menu) ); //IIFE function