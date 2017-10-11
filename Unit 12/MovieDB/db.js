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

for(var i = 0; i < movies.length; i++){
	var s = "watched"

	if (movies[i].watched !== true){
		s = "not seen"
	}
	console.log(
			"You have " +
			s + " " +
			movies[i].name + " - " +
			movies[i].raiting +
			" stars"
		);
}