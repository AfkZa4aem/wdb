					Objectives

Using to get or update elements's value:
val()
$("input").val(); - give only value of "input" (getter)
$("input").val("something") - set the value of "input" (setter)

Using to get or update elements's value:
attr()
$("img").attr("src") - give only value of "src" (getter)
$("img").attr("src", "value") - change value of src (setter)
As well we can use object to set value:
$("#idName").attr({
	attr1: "value",
	attr2: "value"
})

Using to get or update elements's text:
text() = .textContent;
$("h1").text();

Using to get or update elements's html content:
html() = .innerHTML;
$("ul").html();

					Manipulating Classes

Adds the specified class(es) to each element
addClass()
$("p").addClass("className secondClass")

Remove the specified class(es) to each element
removeClass()
$("h1").removeClass("correct")

Add class to each element if it doesn't exist yet, or remove if it already applied
toggleClass()
$("li").toggleClass("correct")