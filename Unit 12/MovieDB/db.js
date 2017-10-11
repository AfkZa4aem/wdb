var movies = [
	{
		name: "In Bruges",
		raiting: 5,
		watched: true
	},
	{
		name: "Wonder Woman",
		raiting: 4,
		watched: true
	},
	{
		name: "Baby Driver",
		raiting: 4.5,
		watched: true
	},
	{
		name: "Titanic",
		raiting: 4,
		watched: false
	}
];

// for(var i = 0; i < movies.length; i++){
// 	var s = "not seen"

// 	if (movies[i].watched){
// 		s = "watched"
// 	}
// 	console.log(
// 			"You have " +
// 			s + " \"" +
// 			movies[i].name + "\" - " +
// 			movies[i].raiting +
// 			" stars"
// 		);
// }

// Colt Solution:
// create function, for building string
function buildString(movie){
	var result = "You have ";
	if(movies.watched){
		result += "watched "
	}
	else{
		result += "not seen "
	};
	result += "\"" + movie.name + "\" - ";
	result += movie.raiting + " stars";
	return result;
};
//use forEach loop for iteration
movies.forEach(function(movie){
	console.log(buildString(movie));
});