function twinkleTwinkle() {
	console.log('Blinka lilla stjärna där!');
	console.log('hur jag undrar var du är...');
}

twinkleTwinkle(); // Call a function

function doSomething() {
	// Do something here...
}

// Declare a function with two parameters
function multiply(num, num2) {
	console.log(num * num2);
}

// Call the function with two arguments
multiply(5, 6);
console.log(multiply(5, 6));

function sayHello(theName) {
	console.log('Hello!, ' + theName);
}

sayHello('Jens');
sayHello('Bengt');

function getArea(width, height) {
	console.log('The area of: ' + width + 'cm and ' + height + 'cm is ' + width * height + 'cm');
}

getArea(5, 10);
getArea(7, 4.5);

// Tänk er att en funktion är som en maskin
// funktionen tar några inputs (argument)
// Dessa argument används sedan inuti funktionen på något sätt -
// Kanske matematiska beräkningar - kollar om värdet stämmer överens
// Sedan returnerar funktionen ett värde, någon sorts output
// Detta kallas för return a value - Returnerar ett värde
// Man kan alltså fånga upp värdet som funktionen ger
// Och vidare i sin kod använda värdet av den funktionen för att använda
// På något annat sätt, exempelvis i en annan funktion
function toSquare(x) {
	return x * x;
}

// return a value
console.log('4 squared is: ' + toSquare(4));
console.log('8 squared is: ' + toSquare(8));

var result = toSquare(5);
console.log(result);

function quadrupleMe(x) {
	return 4 * x;
}
var myFavNumber = quadrupleMe(2);
console.log(myFavNumber);

// Test 1
// Förklara vad som händer
function test1(x, y) {
	return y - x;
}
console.log(test1(10, -40));

// Test 2
// Förklara vad som händer
function test2(x) {
	return x * 2;
	console.log(x);
	return x / 2;
}

console.log(test2(40));

// return kan endast returnera ett värde per funktion
// Om man har två stycken rader med return, så kommer funktionen enbart att
// returnera den första return som den stöter på

/* functions - skriftligt test
	***************************************
	*/

// Write a function isEven() which takes a single numeric argument and
// returns true if the number is even, and false otherwise
function isEven(x) {
	if (x % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isEven(10));
console.log(isEven(312));
console.log(isEven(523));

// Write a function kebabToSnake() which takes a single
//kebab-cased string Argument and
// returns the snake_cased version
// Basically replace "-" with "_"
function kebabToSnake(str) {
	var newStr = str.replace(/-/g, '_');
	return newStr;
}

console.log(kebabToSnake('This-is-a-kebab-cased-string'));

/*
	***************************************
	JS Scope
	***************************************
	*/

function localScope() {
	var showScope = 31;
	console.log(showScope);
}

localScope();
console.log(showScope);

var showScope = "I'm a global variable";
console.log(showScope);

var showGlobalVar = 99; // Global variable
function globalScope() {
	showGlobalVar = 100;
	console.log(showGlobalVar);
}

console.log(showGlobalVar);
globalScope();
console.log(showGlobalVar);

/*
	***************************************
	JS Scope - muntligt test
	***************************************
	*/

// Förklara vad som händer
var num = 8; // 1. num = 8
function doMath() {
	num += 1; // 4. num = 10
	if (num % 5 === 0) {
		return true; // 5. returns true
	} else {
		return false;
	}
}

num += 1; // 2. num = 9 num = num + 1
doMath(); // 3. Call the function

function hi() {
	var name = 'Güstaph';
	console.log(name);
}

hi();

// function bye() {
// 	console.log(name);
// }

// bye();

/* 
	JS functions - Higher order functions
	Simple explanation: A function that can take another function as an argument.
	*/

// Named function
function sing() {
	console.log('Im singing in the rain');
	console.log('Just singing in the rain');
	console.log('What a glorious feeling!');
}

// Higher order function
setInterval(sing, 2000); // #1
clearInterval(1);
setInterval(sing, 2000); // #2
clearInterval(2);

var intervalExample = setInterval(sing, 2000);
clearInterval(intervalExample);

// Anonomous function
var anon = setInterval(function() {
	console.log('Im an anonomous function');
}, 1500);

clearInterval(anon);

function myTimer() {
	var d = new Date();
	var time = d.toLocaleTimeString();
	document.getElementById('timeOutput').innerHTML = time;
}

myTimer();

var myTime = setInterval(myTimer, 1000);

var stopBtn = document.getElementsByTagName('button')[0];
stopBtn.addEventListener('mouseenter', function() {
	clearInterval(myTime);
	alert('Time is stopped!');
});

stopBtn.addEventListener('mouseleave', function() {
	myTime = setInterval(myTimer, 1000);
});

// Calcute tip

function calculateTip(total) {
	var tipPercent = 0.15;
	return total * tipPercent;
}

// var billTotal = prompt('Quanto Costa?');
// var billTip = calculateTip(billTotal);
// var receipt = 'Bill total: ' + billTotal + ':- Tip: ' + billTip + ':-';
// var displayBill = document.getElementsByClassName('displayBill')[0];
// displayBill.innerHTML = receipt;

// Step 1:
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the an element like so: "You will be a X in Y,
// and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// Step 2:
// Create a button that calls this function
// Each time the button is clicked random values of the 4 arguments will be printed out
// in an element on the webpage
// Tip: Store different values of each argument in arrays that when is called
// randomize a value

function tellFortune(jobTitle, geoLoc, partner, kids) {
	var tellFuture =
		'You will be a <strong>' +
		jobTitle +
		'</strong> in <strong>' +
		geoLoc +
		'</strong> and married to <strong>' +
		partner +
		'</strong> with <strong>' +
		kids +
		'</strong> kids.';
	var printOut = document.getElementsByClassName('displayFortune')[0];
	printOut.innerHTML = tellFuture;
}

var jobTitleArr = [ 'Hockey Player', 'Movie star', 'Impersonator', 'CEO of a big tech company', 'Teacher' ];
var geoLocArr = [ 'Sweden', 'Norway', 'Finland', 'Denmark', 'Island' ];
var partnerArr = [ 'Michael Scott', 'Jim Halpert', 'Pam Beesly', 'Dwight Schrute' ];
var kidsArr = [ 0, 5, 3, 10, 14, 1 ];

var tellBtn = document.getElementById('tellBtn');
tellBtn.addEventListener('click', function() {
	var randomJob = jobTitleArr[Math.floor(Math.random() * jobTitleArr.length)];
	var randomGeo = geoLocArr[Math.floor(Math.random() * geoLocArr.length)];
	var randomPartner = partnerArr[Math.floor(Math.random() * partnerArr.length)];
	var randomKids = kidsArr[Math.floor(Math.random() * kidsArr.length)];

	tellFortune(randomJob, randomGeo, randomPartner, randomKids);
});
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Step 1:
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

function calculateDogAge() {}

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Step 1:
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

// Step 2:
// Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply() {}

// You'll create a simple word guessing game where the user gets infinite tries to guess the word
// (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Step 1:
// Create two global arrays: one to hold the letters of the word (e.g. ['G', 'O', 'A', 'T']),
// and one to hold the current guessed letters (e.g. it would start with ['_', '_', '_', '_'] and eventually end with 'G', 'O', 'A', 'T').
// Write an anonymous function that's called when a key is pressed that will:
// Take one argument, the guessed letter (---the pressed key--- Google it!).
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('G _ _ _')
// and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word try pressing various letters to check that your program works.

// Step 2:
// Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter
// (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

// Solution (good luck!)
