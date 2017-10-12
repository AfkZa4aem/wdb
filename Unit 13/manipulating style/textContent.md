								textContent

returns a string of all the text contained
in a given element

<p>
	this is an <strong>awesome</strong> paragraph
</p>

Select the <p> tag:
var tag = document. querySepector("p");

Retrieve the textContent:
tag.textContent
=> "This is an awesome paragraph"

alter the textContent:
tag.textContent = "blah blah blah"


								innerHTML

Similar to textContent, except it returns a string of all the HTML contained in a given element

<p>
	This is an <strong>awesome</strong> paragrapg
</p>

Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML

=> "This is an <strong>awesome</strong> paragraph"