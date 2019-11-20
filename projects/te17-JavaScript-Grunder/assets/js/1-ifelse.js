// alert("Pop-up-ruta")

var myName = 'Dennis'; // Datatyp: String
var myAge = 32; // Datatyp: Number
var isEvil = false; // Datatyp: Boolean

// single line comment
/* 
    ************
    Block comment
    ************
*/

/* 
    ---------------
        if/else
    ---------------
*/

if (myAge < 18) {
	// alert('You can not take a drivers license.');
} else {
	// alert('Congratz! You are old enough to drive.');
}

if (myName != 'Dennis') {
	// alert('Welcome, ' + myName);
} else {
	// alert('You are not welcome here!');
}

// == equals to, === equals to and same datatype
if (myAge === '32') {
	// alert('Välkommen.');
} else {
	// alert('Icket välkommen.');
}

var hasWatched = false; // add to watchlist

if (isEvil == true) {
	// alert('Du är ond.');
} else {
	// alert('Du är god.');
}

/* 
    *******************
        Guessing app
    *******************
*/

var secretNumber = 7;
var userInput = Number(prompt('Guess a number between 0 - 10'));

if (userInput === secretNumber) {
	document.writeln('Grattis! Du har gissat rätt nummer! 10p <br>');
} else if (userInput === 6 || userInput === 8) {
	document.writeln('DET BRÄNNS!');
} else if (userInput > secretNumber) {
	document.writeln('Du gissade för högt! Testa igen...');
} else {
	document.writeln('Du gissade för lågt! Gissa igen.');
}
// if userInput === 6 or 8 "Det bränns"
// if userInput is greater then secretNumber "Du gissade för högt"
// if userInput is less then secretNumber "Du gissade för lågt"

// function testNum(a) {
// 	if (a > 0) {
// 		return 'positive';
// 	} else {
// 		return 'NOT positive';
// 	}
// }

// testNum(15);
