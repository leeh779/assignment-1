/* JAVASCRIPT, SEPT 13 */


/* WHILE LOOP */


	// var myVar = '<h1>string';

	// var newVar = myVar + 5 + ' another string </h1>';

	// console.log(newVar)

	// var myWrapper = document.getElementById("wrapper");
	// myWrapper.innerHTML = newVar;

	/***************************/

	var myWrapper = document.getElementById("wrapper");

	var changingColor = 10;

	for (var i = 0; i < 10; i++) {

		changingColor += 10

		var degrees;
			//technically repeating the same action twice for Even and Odd numbers.
		if(i % 2 === 0) {
			//even
			degrees = (i/10) * 360;
			console.log("i: " + i, degrees)
		} else {
			//odd
			degrees = ((i-1)/10) * 360;
			console.log("i: " + i, degrees)
		}



		var myModule = `

			<div class="module" style="background-color:rgb(${changingColor},0,0);">
				<div class="module_child" style="transform: rotate(${degrees}deg);background-color:rgb(255,0,${changingColor})">
					 ${i}
				</div>
			</div>

		`;



		var starRotate = 35 + ((i/10) * 80)
		var mySecondModule = `
			<div class="star_wrapper">
				<div class="star-five" style="transform: rotate(${starRotate}deg);"></div>
			</div>
		`;

		myWrapper.insertAdjacentHTML('afterend' , mySecondModule);

		if (i % 2 == 0) {
			myWrapper.insertAdjacentHTML('beforeend' , myModule);
		} else {
			myWrapper.insertAdjacentHTML('afterbegin' , myModule);
		}



		//myWrapper.innerHTML = myModule; **only adds the last one
		//myWrapper.insertAdjacentHTML('beforeend' , myModule);

	// afterbegin (after the start of our wrapper)
	// beforeend (before the end of wrapper)

	// beforebegin (before a specific element starts)
	// afterend (after an element is completed)

	}

	console.log (changingColor)

	/**************************/

		var randomNumber = Math.random();

		console.log ("random number:", randomNumber*15, Math.ceil(randomNumber * 15))

		// Math.round(NUMBER)
		// Math.ceil(NUMBER) -----> rounds up
		// Math.floor(NUMBER) -----> rounds down

		// Math.PI ----> Math.____ supports most math functions/equation

	/**************************/

	var i = 0;
	var myString = "hello";

		console.log(myString.length)

	while (i < 10 && myString.length < 10) {
		console.log("The number is " + myString);

			myString += "!";

		i++;
	}

