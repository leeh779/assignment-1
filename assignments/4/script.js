document.addEventListener('DOMContentLoaded', function (event) {

// document.getElementById("ball-wrapper").style.display = "none"; 

/*Reverse Animation*/
var newAnimation = function(){
	var lines = document.querySelectorAll(".modulethree");
	console.log(lines);

	var counter = 0;

	for (var i = 0; i < lines.length; i++) {
	  
	  setTimeout(function(){
	  	lines[counter].remove()
	  	counter++;

	 //  	if( counter = lines.length - 1 ) {
		//   document.getElementById("ball-wrapper").style.display = "inline"; 
		// }
	  }, i*50)
	  
	}
	console.log(lines[i]);

};


var circleAnimation = function(){

	document.getElementById("ball-wrapper").style.display = "inline"; 

}


var appendToX = function(id, output) {
	document.getElementById(id).insertAdjacentHTML('beforeend',output);
}


var i = 0

		/*myAppendingFunctionThree*/
		var myAppendingFunctionThree = function() {

			var moduleThreeG = 99+i;
			var moduleThreeB = 2+i;
			var minusI = (-1)*i

			if (i%2 === 0) {

				var moduleThree = `
					  <div class="modulethree" style="
					  opacity: 0.1;
					  transform: rotate(${minusI}deg);
					  background:rgb(200,${moduleThreeG+(50*i)},200);
					  margin-right: ${i*10};">
					  </div>
					`

			} else {
				
				var moduleThree = `
					  <div class="modulethree" style="
					  opacity: 0.05;
					  transform: rotate(${i}deg);
					  background: rgb(10,${moduleThreeG+(10*i)},${moduleThreeB*i});
					  margin-right: ${i*5};">
					  </div>
					`

			};


			appendToX("wrapper-3", moduleThree);

			i++;

			if(i >= 500) {
			  newAnimation();
			  clearInterval(myAnimatingThree);
			}
		}
		/*myAppendingFunctionThree END*/
		var myAnimatingThree = setInterval (myAppendingFunctionThree, 1);

	/*Reverse Animation END*/

var myAppendingFunctionFour = function() {

	var moduleFourR = 11*i

	var moduleFour = `
		
			<div class="modulefour" style="
				background: rgb(${moduleFourR},${i},${i});
				margin-right: ${i}px;
				opacity: ${0.005*i};">
			</div>
		
		`


	appendToX("wrapper-4", moduleFour);
	appendToX("wrapper-5", moduleFour);
	appendToX("wrapper-6", moduleFour);
	appendToX("wrapper-7", moduleFour);

	i++;

	if(i >= 300) {
	  clearInterval(myAnimatingFour);
	}
}

var myAnimatingFour = setInterval (myAppendingFunctionFour, 1);



/** Interactive **/


/* Oct8 Circle */
	var myBall = document.getElementById("ball-wrapper");

	myBall.addEventListener("mouseout", function(){
		var myAppendingFunctionFive = function() {
			var body = document.querySelector("body");

			var addedBall = `
				<div class="addedball" style="
					border-color: rgb(${i},250,70);">
				</div>
				`
			appendToX("body", addedBall);

			i++;

			if(i >= 250) {
			  clearInterval(myAnimatingFive);
			}
		}

		var myAnimatingFive = setInterval (myAppendingFunctionFive, 1);
	})
/* Oct8 Circle END */


});