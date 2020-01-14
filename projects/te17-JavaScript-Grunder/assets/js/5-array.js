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
