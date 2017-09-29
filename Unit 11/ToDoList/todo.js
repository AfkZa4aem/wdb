var toDo = ["achoo"];
var answer = prompt("what would you like to do?");
while(answer !== "quit") {
	if(answer === "list") {
		console.log(toDo);
	}
	else if (answer === "new") {
		var newTodo = prompt("Enter new todo");
		toDo.push(newTodo);
	}

	var answer = prompt("what would you like to do?");
}
console.log("Ok, you quit the app");
