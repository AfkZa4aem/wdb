$("div").css("backgroundColor", "purple");
$(".highlight").css("width", "200px");
$("#third").css("border", "2px solid orange");
// $(".highlight:first").css("color", "pink");

// Colt solution faster then :first, because of
// first-of-type built-in in css
$("div:first-of-type").css("color", "pink");
