document.addEventListener('DOMContentLoaded', function (event) {




var appendToX = function(id, output) {
	document.getElementById(id).insertAdjacentHTML('beforeend',output);
}


var i = 0
var j = 0

		/*myAppendingFunctionThree*/
		var myAppendingFunctionThree = function() {

			var moduleThreeG = 99+j;
			var moduleThreeB = 2+j;
			var minusI = (-1)*j

			if (j%2 === 0) {

				var moduleThree = `
					  <div class="modulethree" style="
					  opacity: 0.1;
					  transform: rotate(${minusI}deg);
					  background:rgb(200,${moduleThreeG+(50*i)},200);
					  margin-right: ${j*10};">
					  </div>
					`

			} else {
				
				var moduleThree = `
					  <div class="modulethree" style="
					  opacity: 0.05;
					  transform: rotate(${j}deg);
					  background: rgb(10,${moduleThreeG+(10*j)},${moduleThreeB*j});
					  margin-right: ${j*5};">
					  </div>
					`

			};


			appendToX("wrapper-3", moduleThree);

			j++;

			if(j >= 500) {
			  clearInterval(myAnimatingThree);
			}
		}
		/*myAppendingFunctionThree END*/
		var myAnimatingThree = setInterval (myAppendingFunctionThree, 1);

		var lines = document.querySelectorAll(".modulethree");
		console.log(lines); /* Can't select modulethree........ */


	/*Reverse Animation*/
	// var newAnimation = function(){
	// 	var lines = document.querySelectorAll(".modulethree");
	// 	console.log(lines);


	// 	for (var i = 0; i < lines.length; i++) {
	// 		// lines[lines.length - 1 - i]
	// 		lines[i]
	// 	}

	// 	console.log(lines[i]);
	// };


	// setTimeout(function(){

	// 	if(lastAnimation){
	// 		newAnimation();
	// 	}

	// }, 700*i);

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