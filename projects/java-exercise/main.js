/*1*/
var myName = 'Maddie';
console.log('My name is', myName);

var favNumber = 7;
console.log('My favorite number is', favNumber);

var favNumberString = '7';
console.log('My favorite number is', favNumberString);

var boolean = false;
console.log(boolean);

var arrayName = ['M','A','D','D','I','E'];
console.log(arrayName);

var arrayData = ['Maddie', 7, true];
console.log(arrayData);

var fullName = 'Maddie' + 'Lee'
console.log(fullName);

var equalHundred = 46 + 54
console.log(equalHundred);

/*2*/
console.log(arrayName[0]);
console.log(arrayName.length);

/*3*/
console.log('supercalifragilisticexpialidocious'.length);

/*4*/
console.log(fullName[0].length);
console.log(fullName[1].length);

/*5*/
if ('All students are here') {
	console.log('All the students are in class.')
} else {
	console.log('Not everyone is here.')
};


/*6*/
for (var i = 0; i < arrayName.length; i++) {
	console.log(arrayName[i]);
};


/* 7 */
var date = new Date;
var hour = date.getHours();
var minutes = date.getMinutes();

if ( hour >= 7 && hour <= 9) {
  console.log("It's between 7pm and 9:40pm!");
} else if ( hour = 9 && minutes <= 40 ) {
  console.log("It's between 7pm and 9:40pm!");
} else {
	console.log("It's NOT between 7pm and 9:40pm.")
}

/*8*/
var d = new Date();
var dateValue = d.getDay();

if ( dateValue == 0 ) {
	console.log("Sunday is funday.")
} else if ( dateValue == 1 ) {
	console.log("Let's get started!")
} else if ( dateValue == 2 ) {
	console.log("Tuesday is Monday's ugly sister.")
} else if ( dateValue == 3 ) {
	console.log("Help!!!! Why is Wednesday spelled like that !!")
} else if ( dateValue == 4 ) {
	console.log ("It's going to be a good day!")
} else if ( dateValue == 5 ) {
	console.log ("TGIF")
} else if ( dateValue == 6 ) {
	console.log ("Woohoo! Start of the weekend!")
}


/*9*/
var favFood = ['chicken','apple','cake'];
console.log(favFood);

var favAnimal = ['dog','cat','sloth'];
console.log(favAnimal);

var favPlace = ['NYC','Seoul','JejuIsland'];
console.log(favPlace);

var favPokemon = ['Pikachu','Snorlax','Bulbasaur'];
console.log(favPokemon);

/*10*/
var arrayLink = [
	['chicken','apple','cake'],
	['dog','cat','turtle'],
	['NYC','Seoul','JejuIsland'],
	['Pikachu','Snorlax','Bulbasaur']
];
console.log(arrayLink);

/*11*/

/*
var arrayOfArr = [
	['chicken','apple','cake'],
	['dog','sloth','turtle'],
	['NYC','Seoul','JejuIsland'],
	['Pikachu','Snorlax','Bulbasaur']
];
You can change these lines like below */

var arrayOfArr = [
	favFood,
	favAnimal,
	favPlace,
	favPokemon
];

console.log("My favorite foods are: ", arrayOfArr[0]);
console.log("My favorite animals are: ", arrayOfArr[1]);
console.log("My favorite cities are: ", arrayOfArr[2]);
console.log("My favorite Pokemons are: ", arrayOfArr[3]);

/*12*/
for (var i = 0; i < arrayOfArr.length; i++) {
	for (var j=0; j < arrayOfArr[i].length; j++) {
		console.log(arrayOfArr[i][j]);
	}
};