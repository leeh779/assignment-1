// for (var i = 0; i < 10; i++) {
// 	//
// }



// var counter = 0;

// setInterval (function(){

// 	if(counter > 0) {
// 		// var myPreviousBox = document.getElementById("box-${counter}");
// 		var myPreviousBox = document.querySelector(`#box-${counter} .spaceInvader`);
// 		// way to get specific. 

// 		myPreviousBox.style.opacity = 0;

// 	}

// 	var myBox = document.getElementById("box-" + counter);



// }

// 	)








/** Sep 27 Lecture **/


/* querySelectors */

	var myDiv = document.getElementById("myFirstDiv");
	var theSameDiv = document.querySelector("#myFirstDiv");
	// get much more specific. allows us to go ahead and call things by their hierarchy.
	// will select the first. Only returns to one element.
	var ourButton = document.querySelector("#myFirstDiv button");


	var listItem = document.querySelector(".list_item");
	console.log(listItem);

	



	/** Self study **/

	// var myButton = document.getElementById("my_button");


	// var doingStuff = function(){
	// 	console.log("doing stuff")
	// 	myButton.removeEventListener("click", doingStuff) //Why do we use removeEventListener here? --> only doing once
	// }

	// myButton.addEventListener("click", doingStuff)

	var myButton = document.querySelector("#my_button"); // This is not working

	myButton.addEventListener("mouseout", function(){
		console.log("mouse has left button")
	})


	window.addEventListener("mousemove", function(){ //only shows console.log when it's clicked
		console.log("mouse is moving on the screen.")
	})



	var DOM = document.querySelector("body");

	var scrolling = function(){
		console.log("scrollY is" + window.scrollY)
		console.log("innerHeight is" + window.innerHeight)
		console.log("DOM.offsetHeight is" + DOM.offsetHeight)

		//percentage of scroll:
		var percentageScrolled = window.scrollY / (DOM.offsetHeight - window.innerHeight); //????
		console.log("percentageScrolled is" + percentageScrolled);
	};

	window.addEventListener("scroll", scrolling)