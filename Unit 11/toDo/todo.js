var todo = [];

var answer = prompt("What would you like to do?");
while(answer != "quit"){
	if(answer === "new") {
		var task = prompt("Enter a new todo");
		todo.push(task);
		console.log(todo);
	}
	else if(answer === "list") {
		console.log(todo);
	}
	var answer = prompt("What would you like to do?");
}