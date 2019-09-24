for (var i = 0; i < 10; i++) {
	var rotation = Math.round((i/10) * 360);

	var template = `
		<div class="square" style="transform: rotate(${rotation}deg)"></div>
	`;

	document.getElementById("root_1_review").insertAdjacentHTML('beforeend', template);

} 
//beforeend, afterbegin: within div
//beforebegin, afterend: outside of div

var myFunction = function() {
	console.log("hello!");
}

var returningName = function() {
	var classCategory = "Web Advanced";
	var classFocus = "Javascript";

	return classCategory + classFocus;
}

//FUNCTIONS:
// 1. functions save pieces of code so we can reuse them later.
// 2. functions can return values: we can put variables into a function, 
//    and then save the output of that process in another variable.
// 3. functions accept parameters, which means we can reusethe same function for very different contexts.

var name = returningName();
console.log(name)


var simpleMath = function(a, b){
	var addition = a + b;
	return addition;
}

console.log(simpleMath(2, 19));


var appendToX = function(id, output) {

	document.getElementById(id).insertAdjacentHTML('beforeend',output);

}

appendToX("root_1_review", "hi!");
appendToX("root_2_function", "hello!");

var firstEquation = simpleMath(2, 4); //6
var secondEquation = simpleMath(22, 25.5); //47.5 
var stringAddition = simpleMath("first string", "second tring"); //first string second string

appendToX("root_2_function", firstEquation);
appendToX("root_2_function", secondEquation);
appendToX("root_2_function", stringAddition);

// document.getElementById("root_1_review").insertAdjacentHTML('beforeend',"hi!");
// document.getElementById("root_2_function").insertAdjacentHTML('beforeend',"hello!");



/***************** setTimeout **************/

var outputString = function(location, string) {
	appendToX(location, string);
}

// setTimeout is in milliseconds: 2000 = 2 seconds
setTimeout(outputString, 2000, "root_3_settimeout", "<br> this string was added after as a parameter");



/***************** setInterval **************/
var myInterval = setInterval(outputString, 1000, "root_4_setinterval", `<div class="square"></div>`)

setTimeout(function(){
	clearInterval(myInterval);
}, 10000)
// clears interval(10000=10seconds) after 10 seconds.




/***************** setInterval and Looping **************/
var j = 0;

var myAppendingFunction = function(){

	var rotation = Math.round((j/10) * 360);

	var template = `
		<div class="square" style="transform: rotate(${rotation}deg)"></div>
	`;

	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", template);

	j++;

	if(j >= 11) {
		clearInterval(myAnimating);
	}

}

var myAnimating = setInterval(myAppendingFunction, 500);



/***************** setTimeout and Looping **************/

// setTimeout can also be looped with a for loop.
// for loops run immediately, so we have to stagger the setTimeout by changing...

var myLoopFunction = function(i) {

	var rotation = Math.round((i/10) * 360);
	document.getElementById("root_6_settimeout").insertAdjacentHTML("beforeend", `
		<div id="custom-${i}" class="square" style="transform: rotate(${rotation}deg)"></div>
		${i*100} milliseconds delayed <br>
		`);

	if(i > 8) {
		document.getElementById("custom-6").insertAdjacentHTML("afterend", `
			<div class="square" style="background-color:red;"></div>
			`)
	}

}

for (var i = 0; i < 10; i++) {
	
	//myLoopFunction(i);

	setTimeout(myLoopFunction, ((i*200) + i*i), i);

}




