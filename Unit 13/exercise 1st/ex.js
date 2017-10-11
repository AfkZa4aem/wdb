// use getElementBYId
var first = document.getElementById("first");
undefined
first
<p id=​"first" class=​"special">​Hello​</p>​

// Use getElementByClassName
var second = document.getElementsByClassName("special")[0]
undefined
second
<p id=​"first" class=​"special">​Hello​</p>​

// Use getElementByTagName
var third = document.getElementsByTagName("p")[0];
undefined
third
<p id=​"first" class=​"special">​Hello​</p>​

// Use querySelector
var fourth = document.querySelector("#first");
undefined
fourth
<p id=​"first" class=​"special">​Hello​</p>​

// Use querySelectorAll
var fifth = document.querySelectorAll(".special")[0];
undefined
fifth
<p id=​"first" class=​"special">​Hello​</p>​

// Use querySelector next tag after h1
var sixth = document.querySelector("h1 + p");
undefined
sixth
<p id=​"first" class=​"special">​Hello​</p>​