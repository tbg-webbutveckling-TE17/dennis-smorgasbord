var friend1 = 'Måns';
var friend2 = 'Sten';
var friend3 = 'Claerence';
var friend4 = 'Mona';

// array in global scope
var friends = [ 'Måns', 'Sten', 'Claerence', 'Mona' ];
var printToScreen = document.getElementById('testArray');
printToScreen.innerHTML = friends[0];

function newName() {
	friends[1] = 'Patrik';
}

// create an array in different ways
var colors = []; // standard
var colors = new Array(); // not that common
var randomArray = [ 'Hej', 21, false, true, {} ];
printToScreen.innerHTML = randomArray.length;

// array built-in methods
colors = [ 'red', 'green', 'blue' ];

// Describe the result string of an array
printToScreen.innerHTML = colors.join(' <br /> ');

// pop() - remove an item at the end of an array
colors.pop();
printToScreen.innerHTML = colors.join(' <br /> ');

// push() - add an item at the end of an array
colors.push('purple');
printToScreen.innerHTML = colors.join(' <br /> ');

// unshift() - add an item to the beginning of an array
colors.unshift('yellow');
printToScreen.innerHTML = colors.join(' <br /> ');

// shift() - remove an item at the beginning of an array
colors.shift();
printToScreen.innerHTML = colors.join(' <br /> ');

// slice() - copy parts of an array
var colorGreen = colors.slice(1, 3);
printToScreen.innerHTML = colorGreen.join(' ');

var colorsCopy = colors.slice(colors);
printToScreen.innerHTML = colorsCopy.join(' ');

// indexOf - find the index of an item in the array
printToScreen.innerHTML = colors.indexOf('green');
printToScreen.innerHTML = colors.indexOf('yellow');

/*
***************************************
Arrays - muntligt
***************************************
*/
var numbers = [ 2, 4, 30, 31 ];
// printToScreen.innerHTML = numbers[numbers.length];

var friendGroups = [ [ 'A-dog', 'B-dog', 'C-dog' ], [ 'F-cat', 'G-cat', 'H-cat' ], [ 'I-man', 'J-man', 'K-man' ] ];
// printToScreen.innerHTML = friendGroups[1][1];

/*
***************************************
Arrays - iteration - upprepning
***************************************
*/
//              0           1               2           3       4           5       6
var cars = [ 'Audi A6', 'Volvo 940', 'Ford Mondeo', 'Ferrari', 'Landa', 'Lada', 'Citroën' ];
for (var i = 0; i < cars.length; i++) {
	printToScreen.innerHTML += cars[i] + '<br />';
}

/*
***************************************
Arrays - iteration - reverse - forEach : Visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
***************************************
*/
// reverse() - reverse the items in an array
printToScreen.innerHTML = cars.reverse();

// JavaScript provides an easy built-in way of iteratin over an array: forEach,
// a method used on arrays and is a part of the array prototype
// Concept: yourArray.forEach(aFunction); Most often written with an anonymous function
// forEach is more common to use when iterating an array
var countries = [ 'sweden', 'norway', 'finland', 'denmark', 'island' ];
countries.forEach(function(country) {
	printToScreen.innerHTML += country + ' ';
});
printToScreen.innerHTML = '';
var planets = [ 'earth', 'mars', 'saturnus', 'jupiter' ];
planets.forEach(function(planet) {
	printToScreen.innerHTML += planet + ' - ';
});

printToScreen.innerHTML = '';
var number = [ 1, 32, 44, 112, 3, 5, 6, 9, 12 ];
var color = [ 'red', 'green', 'blue', 'yellow' ];

number.forEach(function(num) {
	if (num % 3 === 0) {
		printToScreen.innerHTML += num + ' ';
	}
});

for (var i = 0; i < number.length; i++) {
	if (number[i] % 3 === 0) {
		printToScreen.innerHTML += number[i] + ' ';
	}
}

var foods = [ 'sausage', 'meatballs', 'pasta', 'pizza' ];
foods.forEach(function(food) {
	printToScreen.innerHTML += food + ' ';
});

var subjects = [];
subjects.push('Svenska 3', 'Matematik 5', 'Fysik 2');
subjects.forEach(function(subject) {});

/*
***************************************
Arrays - Skriftlig övning
***************************************
*/

// Write a function printReverse() that takes an array
// as an argument and prints out the elements in the array
// in reverse order (don't actually reverse the array itself)

printReverse([ 1, 2, 3, 4, 5, 6, 7 ]);

// Write a function isIdentical() which takes an array as an argument
// and returns true if all elements in the array are identical

// Write a function sumArray() that accepts an array of numbers and
// returns the sum of all numbers in the array

// Write a function max() that accepts an array of numbers and returns the maximum number in the array
