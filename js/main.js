// Everything we need for comment app;
	// HTML
// 2 input tag for user input: one for the username, one for the comment
// Button to grab all user inputs and send them to the html
// A parent elements to append the comments to
	// JS
// A function that grabs the value of each input tag when the button is clocked
// Create html elements for each of the user inputs
// create a div to put both username and comment elements inside of
// Create tex nodes for each of the text elements using uder inputs
// Plug in the text nodes into the HTML elements
// plug in both html text elements into the div
// Append the new elements into a parent on th html

// var now = new Date();

function addCom(){
	var now = new Date();
	// Get the value of the input tags
	let username = document.getElementById("username").value;
	let comment = document.getElementById("comment").value;
	// Create elements for each input
	const userh1 = document.createElement("h1");
	const commentP = document.createElement("p");
	const time = document.createElement("p");
	const singleCom = document.createElement("div")
	// Create text nodes out of user inputs
	let usernameTextNode = document.createTextNode(username);
	let commentTextNode = document.createTextNode(comment);
	let timeTextNode = document.createTextNode(now);
	// Plug text nodes into html elements
	userh1.appendChild(usernameTextNode);
	commentP.appendChild(commentTextNode);
	time.appendChild(timeTextNode);
	// Plug in both html text tags into the singleCom div
	singleCom.appendChild(userh1);
	singleCom.appendChild(commentP);
	singleCom.appendChild(time);
	// add the class of "singlecomment" to our div
	singleCom.className = "singlecomment"
	// Send singleCom div to the parent on the HTML
	document.getElementById('commentBox').appendChild(singleCom)
	document.getElementById('commentBox');

	time.style = "font-style: italic"

}





