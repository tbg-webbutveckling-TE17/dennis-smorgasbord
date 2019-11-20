window.addEventListener('load', function(event) {
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

	var billTotal = prompt('Quanto Costa?');
	var billTip = calculateTip(billTotal);
	var receipt = 'Bill total: ' + billTotal + ':- Tip: ' + billTip + ':-';
	var displayBill = document.getElementsByClassName('displayBill')[0];
	displayBill.innerHTML = receipt;

	// Write a function named tellFortune that:
	// takes 4 arguments: number of children, partner's name, geographic location, job title.
	// outputs your fortune to the an element like so: "You will be a X in Y,
	// and married to Z with N kids."
	// Call that function 3 times with 3 different values for the arguments.

	// Extended version: Create a button that calls this function
	// Each time the button is clicked random values of the 4 arguments will be printed out
	// in an element on the webpage
	// Tip: Store different values of each argument in arrays that when is called
	// randomize a value

	function tellFortune(jobTitle, geoLoc, partner, kids) {
		var tellFuture =
			'You will be a ' + jobTitle + ' in ' + geoLoc + ' and married to ' + partner + ' with ' + kids + ' kids.';
	}

	tellFortune('', '', '', x);
});
