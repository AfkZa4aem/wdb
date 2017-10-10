function myForEach(arr, func) {
	// loop through array
	for(var i = 0; i < arr.length; i++){
		// call func for each item in array
		func(arr[i]);
	}
}


//
// var colors = ["white", "blue", "yellow"];
// undefined
// myForEach(colors, alert);
// undefined
// myForEach(colors, function(){alert("HI")});
// undefined
// myForEach(colors, function(color){);
// VM169:1 Uncaught SyntaxError: Unexpected token )
// myForEach(colors, function(color){
//     console.log(color);
// });
// VM215:2 white
// VM215:2 blue
// VM215:2 yellow
// undefined
// Array.prototype.myForEach = function(func){ 
// }
// ƒ (func){ 
// }
// Array.prototype.myForEach = function(func){ 
// }
// ƒ (func){ 
// }
// Array.prototype.myForEach = function(func){ 
//     for(var i = 0; i < this.length; i++){
//         func(this[i]);
//     }
// }
// ƒ (func){ 
//     for(var i = 0; i < this.length; i++){
//         func(this[i]);
//     }
// }
// var friends = ["Pasha", "Max", "Nastia"]
// undefined
// friends.myForEach(alert);
// undefined
// friends.myForEach(function(name){
//     console.log("I love " + name );
// });
// VM516:2 I love Pasha
// VM516:2 I love Max
// VM516:2 I love Nastia
// undefined