
var addElm = document.getElementById("add")
// elem.appendChild(obj)
addElm.addEventListener("click", function(){
newTask = document.getElementById("todo");
task = newTask.value;

var element = document.getElementById("mylist");
var object = document.createElement("p");
element.appendChild(object);
var toDo = document.createTextNode(task);
object.appendChild(toDo);


})
var del = createElement("delete")
