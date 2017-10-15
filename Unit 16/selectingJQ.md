					$("selectorGoesHere")

We select and then manipulate

to select all img tags
$("img")

to select all elements with class 'sale'
$(".sale")

to select element with id "bonus"
$("#bonus")

to select all a tags inside of li's
$("li a ")

					Manipulating Style

The .css() method is jQuery's interface to styling

$("selector")

.css(property, value)

select element with id "special" and give it a border
$("#border").css("berder", "2px solid red");

we can also pass in an object with styles
var styles = {
	backgroundColor: "pink",
	fontWeight: "bold"
};

$("#special").css(styles);

$("li").css({
	fontSize: "10",
	border: "3px dashed purple",
	backgroundColor: "rgba(89, 45, 20, 0.5)"
})

		We can style multiple elements at once

select all li's and make them blue
$("li").css("color", "blue");

select all elements with class "big"
and give them an orange border
$(".big").css("border", "2px dashed orange");