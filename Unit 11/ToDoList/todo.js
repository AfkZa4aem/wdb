var toDo = ["achoo"];

var answer = prompt("what would you like to do?");
while(answer !== "quit") {
	// handle input
	if(answer === "list") {
		console.log("*************");
		toDo.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("*************");
	}
	else if (answer === "new") {
		// ask for new todo
		var newTodo = prompt("Enter new todo");
		// add todo to array
		toDo.push(newTodo);
		console.log("Todo was successfully added")
	}
	else if (answer === "delete") {
		// ask for index of todo to be deleted
		var index = prompt("Enter index of todo:");
		// delete that todo
		// using splice() method
		// will delete toDo[index]
		toDo.splice(index, 1);
		console.log("Todo was deleted");
	}

	var answer = prompt("what would you like to do?");
}
console.log("Ok, you quit the app");
