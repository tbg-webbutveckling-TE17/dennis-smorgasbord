// for använder man när man vet hur många gånger loopen ska köras

// initiering; villkor; inkrementering
for (var i = 0; i < 6; i++) {
	// Kör koden för varje iteration
	console.log(i);
}

var str = 'Hello World!';
for (var i = 0; i < str.length; i++) {
	console.log(str[i]);
}

var myArr = [ 'HTML', 'CSS', 'JS', 42, true ];
var len = myArr.length;
for (var i = 0; i < len; i++) {
	console.log(myArr[i]);
}

// Muntlig uppgift 1 - Beskriv vad som händer
for (var i = 0; i < 16; i += 8) {
	console.log(i);
}

// Muntlig uppgift 2 - Beskriv vad som händer
var str = 'xwhiqenblwmlypo';
for (var i = 2; i < str.length; i += 3) {
	console.log(str[i]);
}

// %

// Print all numbers between -10 and 19
for (var i = -10; i <= 19; i++) {
	console.log(i);
}
// Print all even numbers between 10 and 40
for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// Print all odd numbers between 300 and 333
for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

// Print all even numbers divisible by 5 AND 3
// between 5 and 50
for (var i = 5; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}

// Genomgång: Nested for loops
// Make this a square

var rows = 5;
var cols = 5;

for (var i = 0; i < rows; i++) {
	for (var ii = 0; ii < cols; ii++) {
		document.writeln('* ');
	}
	document.writeln('<br/>');
}

// On your own: Multiplication tables

// Write a for loop that will iterate from 0 to 10.
// For each iteration of the for loop, it will multiply
//the number by 9 and log the result (e.g. "2 * 9 = 18")
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
	var result = multiplier * i;
	document.writeln(multiplier + ' * ' + i + ' = ' + result + '<br/>');
}

// Bonus: Use a nested for loop to show the tables for every
// multiplier from 1 to 10 (100 results total)
for (var multiplier = 0; multiplier <= 10; multiplier++) {
	for (var i = 0; i <= 10; i++) {
		var result = multiplier * i;
		document.writeln(multiplier + ' * ' + i + ' = ' + result + '<br/>');
	}
	document.writeln('<br/>');
}

// Create an array to hold your top food choices
// For each choice, log to the screen a string like:
// "My #1 choice is Nudlar."

var choices = [ 'Nudlar', 'Pannkaka', 'Palt', 'Tacos', 'Chicken', 'Sausage' ];
for (var i = 0; i < choices.length; i++) {
	console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}

// Bonus: Change it to log:
// "My 1st choice, "My 2nd choice", "My 3rd choice"
// "My 4th choice", "My 5th choice", "My 6th choice" etc.
// picking the right suffix for the number based on what it is.
for (var i = 0; i < choices.length; i++) {
	var choiceNum = i + 1;
	var choiceSuffix;

	if (choiceNum == 1) {
		choiceSuffix = 'st';
	} else if (choiceNum == 2) {
		choiceSuffix = 'nd';
	} else if (choiceNum == 3) {
		choiceSuffix = 'rd';
	} else {
		choiceSuffix = 'th';
	}

	console.log('My ' + choiceNum + choiceSuffix + ' choice is ' + choices[i]);
}

// Create a triangle like this:
// * * * * * * * * * *
// * * * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for (var i = 10; i >= 0; i--) {
	for (var ii = 0; ii <= i; ii++) {
		document.write('* ');
	}
	document.write('<br />');
}

// Create a triangle like this:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *
// * * * * * * * * * *
// * * * * * * * * * * *
for (var i = 0; i <= 10; i++) {
	for (var ii = 0; ii <= i; ii++) {
		document.write('* ');
	}
	document.write('<br />');
}

// A christmas tree
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
var rows = 10;
for (var i = 1; i <= rows; i++) {
	for (var j = 1; j <= rows - i; j++) {
		document.write('&nbsp;');
	}
	for (var k = 1; k <= i; k++) {
		document.write('* ');
	}
	document.write('<br />');
}
