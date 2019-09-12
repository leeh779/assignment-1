
	var myFirstValue = 5;
	var mySecondValue = 4;
	var myThirdValue = ' sample string';


	5 > 3 // true
	5 > 6 // false
	5 > 5 // false
	5 >= 5 // true
	5 <= 5 // true
	5 == 5 // true
	5 == 4 // false
	5 === 5 // true


	5 == "5" // true
	5 === "5" // false

	5 != 5 // false
	5 != 4 // true
	5 !== 5 // false
	5 !== "5" // true

	5 > myFirstValue // false


	if ( myFirstValue === mySecondValue || myThirdValue === 'sample string') {

		console.log('hello! from if!')

	}

	var modulus = 4 % 2; //output will be the remainder

	console.log("this is the modulus: ", modulus);

	
	var iteration = 0;
	console.log ("My first iteration: ", iteration);

	iteration = iteration + 1;
	console.log ("My second itteration: ", iteration);

	iteration = iteration++;
	console.log ("My third iteration:🥰 ", iteration);





	// var myArray = [
	// 				44, 
	// 				['inception','nexted string'], 
	// 				'string'
	// 			  ];

	// for (var i = 0; i < myArray.length; i++) {

	// 	if(Array.isArray(myArray[i])) {
	// 		for (var j = 0; j < myArray[i].length; j++) {
	// 			console.log(myArray[i][j])
	// 		}
	// 	}else{
	// 		console.log(myArray[i])
	// 	}

		
	// 	/*memo*/
	// 	// if(this is an array){
	// 	// 	cycle again

	// 	// }else{
	// 	// 	just print
	// 	// }
	// }


	//get our element by its html id
	var myWrapper = document.getElementById("wrapper");
	console.log(myWrapper.innerHTML)

	myWrapper.innerHTML += 'replacement text'; //+= equals "take it and add 'replacement text'"

	for (var i = 0; i < 100; i++) {
		//the for loop runs 50 times, so it adds replacement text 50 times
		// myWrapper.innerHTML += '<h1 style="font-size:' + (i*2) + 'px;"> replacement text</h1>';

		myWrapper.innerHTML += '<div class="patternUnit" style="background-color: rgb(' + (255 - (i*10)) + ', '+(i*10)+' ,0); transform: rotate('+ (10 + i) +'deg)"></div>'
	}

	