
var addElm = document.getElementById("add")
var element = document.getElementById("mylist");
var object = document.createElement("p");

// Creates a new task after clicking the add button
addElm.addEventListener("click", function(){
newTask = document.getElementById("todo");
task = newTask.value;
var toDo = document.createTextNode(task);
element.appendChild(object);

object.appendChild(toDo);
deleteButton();

})

// Creates a button for deleting
var del = document.createElement("button")

function remove () {
    element.removeChild(object);
    
}


// Inserts delete button next to task
function deleteButton () {
element.appendChild(object);
object.appendChild(del);
del.innerHTML="Delete";
del.onclick = remove();

}