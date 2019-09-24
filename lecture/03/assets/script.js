/**************** for loop with template literal ***********/

for (var i = 0; i < 10; i++) {
	var rotation = Math.round((i/10) * 360);

	var template = `
	<div class="square" style="transform:rotate(${rotation}deg);"></div>
	`;

	document.getElementById("root_1_review").insertAdjacentHTML('beforeend', template);	
}


/**************** functions *************************/

// functions are pieces of code that are saved as variables to be used later:
var myFunction = function(){
	console.log("hello!");
}

// to run later: 
myFunction();

// you can reuse these functions infinitely: 
myFunction();
myFunction();
myFunction();

// or even put them in a for loop: 
for (var i = 0; i < 5; i++) {
	myFunction();
}

// functions also have the ability to return values: 
var returningName = function(){
	return "Web Advanced";
};

// so if i set the variable 'name' to the function: 
var name = returningName();

// and then console 'name':
console.log(name)


// functions also allow for parameters or "inputs":

var simpleMath = function(a, b){
	var addition = a + b; // you can process these inputs:
	return addition;
}

// simpleMath will return whatever we give as 'a' and 'b'
console.log("simpleMath: ", simpleMath(2, 5)); //will return 7

// parameters helpful because we can then re-use them in different circumstances: 
var firstEquation = simpleMath(2, 2);
var secondEquation = simpleMath(28.25, 45);
var stringAddition = simpleMath("hello", " world!");

console.log(firstEquation, secondEquation, stringAddition);


// parameters are very flexible. for example, you could pass in an id and another function:
var appendToX = function(id, output){
	document.getElementById(id).insertAdjacentHTML('beforeend', " " + output);
}

appendToX("root_2_function", firstEquation);
appendToX("root_2_function", secondEquation);
appendToX("root_2_function", stringAddition);




/**************** setTimeout ***********/

// the setTimeout method calls a function after a specified amount of milliseconds:
var delayedFunction = function(){
	appendToX("root_3_settimeout", 'this appeared after a 2 seconds');
};

setTimeout(delayedFunction, 2000);

// a little counter-intuitive, but if you want to pass a parameter 
// through your function in a setTimeout you just list the parameters after the seconds:

var outputString = function(location, string){
	appendToX(location, string);
};

setTimeout(outputString, 3000, "root_3_settimeout", "<br>this string was passed as a parameter through a setTimeout");


/**************** setInterval ****************/

// setInterval is like setTimeout except it repeats until you clear it:
// the following example will run every 1 second:
var myInterval = setInterval(outputString, 1000, "root_4_setinterval", `<div class="square"></div>`);


// to clear an interval you need to be able to call it: (so in this case, we are stopping the interval after 10 seconds):
setTimeout( function(){
	clearInterval(myInterval)
}, 10000);


/**************** setInterval and Looping ****************/

var j = 0; // to keep track of how many times you want to loop, you have to simulate a for loop:

var myAppendingFunction = function(){

	var rotation = Math.round((j/10) * 360);
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="square" style="transform:rotate(${rotation}deg);"></div>
		setInterval has run ${j} times <br>`);

	if(j >= 10){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	j++;
}


var myAnimating = setInterval(myAppendingFunction, 500);


/**************** setTimeout and Looping ****************/

// setTimeout can also be looped with a for loop.

// for loops run immediately, so we have to stagger the setTimeout by changing its time:

var timer = 100;

var myLoopFunction = function(i){

	var rotation = Math.round((i/10) * 360);	

	document.getElementById("root_6_settimeout").insertAdjacentHTML("beforeend", `
		<div class="square" style="transform:rotate(${rotation}deg);"></div>
		${i*100} milliseconds delayed
	 <br>`);
}

for (var i = 0; i < 20; i++) {
	setTimeout(myLoopFunction, i*100, i)
}



