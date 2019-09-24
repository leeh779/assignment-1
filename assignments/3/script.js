var appendToX = function(id, output) {
	document.getElementById(id).insertAdjacentHTML('beforeend',output);
}


var i = 0

var myAppendingFunctionOne = function() {

	var moduleOneR = 30+i;
	var moduleOneG = 10+(i*2);

	var moduleOne = `
			  <div class="moduleone" style="
			  background:rgb(${moduleOneR+(3*i)},${moduleOneG+i},200);
			  transform: rotate(${i+2}deg);
			  opacity: 1;">
			  </div>
			`

	appendToX("wrapper-1", moduleOne);

	i++;

	if(i >= 40) {
	  clearInterval(myAnimatingOne);
	}
}


var myAppendingFunctionTwo = function() {

	var moduleTwoR = 20+i;
	var moduleTwoB = 5+(i*2);
	var minusI = (-1)*i


	if (i%2 === 0) {

		var moduleTwo = `
			  <div class="moduletwo" style="
			  background:rgb(${moduleTwoR+(3*i)},100,${moduleTwoB+i});
			  transform: rotate(${minusI*30}deg);">
			  </div>
			`

	} else {
		
		var moduleTwo = `
			  <div class="moduletwo" style="
			  background:rgb(${moduleTwoR+i},50,${moduleTwoB+i});
			  transform: rotate(${minusI}deg);">
			  </div>
			`

	};


	appendToX("wrapper-1", moduleTwo);

	i++;

	if(i >= 180) {
	  clearInterval(myAnimatingTwo);
	}
}

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

	if(i >= 700) {
	  clearInterval(myAnimatingThree);
	}
}

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

var myAnimatingOne = setInterval (myAppendingFunctionOne, 4);
var myAnimatingTwo = setInterval (myAppendingFunctionTwo, 3);
var myAnimatingThree = setInterval (myAppendingFunctionThree, 1);
var myAnimatingFour = setInterval (myAppendingFunctionFour, 1);


	



