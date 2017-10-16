					Effects:

			Fading effects

		.fadeOut()
Hide matched elements

$("button").click(function(){
	$("#first").fadeOut("slow", function(){
		// animation complete.
	});
});


console.log will execute immediatly
$("button").on("click", function(){
	$("div").fadeOut(1000);
	console.log("Fade complited");
});

console.log will execute after fadeOut will compleat
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		console.log("Fade complited");
	});
})


remove elements after fadeOut:
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		$(this).remove();
	});
})

		
		.fadeIn()
Display the matching elements

$("button").click(function(){
	$("#first").fadeIn("slow", function(){
		// animation complete.
	});
});


		.fadeToggle()
Display or hide element(s)

$("button").on("click", function(){
	$("div").fadeToggle(1000, function(){
		
	});
})



			Sliding effects

		.slideDown
display element with sliding
$("button").on("click", function(){
	$("div").slideDown(1000, function(){
		
	});
})

		.slideUp
hide element with sliding
$("button").on("click", function(){
	$("div").slideUp(1000, function(){
		
	});
})

		.slideToggle
display or hide element with sliding
$("button").on("click", function(){
	$("div").slideToggle(1000, function(){
		
	});
})
