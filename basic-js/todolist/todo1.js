// Creates a button for deleting
var addElm = document.getElementById("add")
var element = document.getElementById("mylist");

// Creates a new task after clicking the add button
addElm.addEventListener("click", function(){
    var del = document.createElement("button")
    var object = document.createElement("p");
newTask = document.getElementById("todo");
task = newTask.value;
var toDo = document.createTextNode(task);
element.appendChild(toDo)
del.innerHTML="Delete";
element.appendChild(del)
element.appendChild(object)
    del.addEventListener("click", function(){
        element.removeChild(toDo)
        element.removeChild(del)
        
    
    })

})

function remove () {
    element.removeChild(object);
    
}