window.setTimeout(function() {
var todos = ["Buy new turtle"];

var input = prompt("what would you like to do?");


while(input !== "quit") {
    //handle input
    if(input === "list") {
        listTodos();
    } else if(input === "new") {
        adddTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
    //ask again for new input
    input = prompt("what would you like to do?");  
}
console.log("OK, you quit the app")

function listTodos(){
    console.log("*********");
    todos.forEach(function(todo, i) {
        console.log(i + " : " todo);
    });
    console.log("*********");
}

function addTodo(){
    //ask for new todo
    var newTodo = prompt("enter new todo");
    // add new to todos array
    todos.push(newTodo);
    console.log("added todo" + ": " + newTodo );
}

function deleteTodo(){
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete")
    //delete that todo
    todos.splice(index,1);
    console.log("deleted" + ": " + index);
}
}, 500);



