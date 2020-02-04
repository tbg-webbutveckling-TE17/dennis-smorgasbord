var output = document.querySelector('body > p');
var person = [ 'Sid', 31, 'EagleShieldBay' ];

output.innerHTML = person[2];

var person = [ 'Sid', 'EagleShieldBay', 31 ];

output.innerHTML = person[2];

var persona = {
	name: 'Sid', // key/value pair
	age: 41,
	hometown: 'Heresneezedduck'
};

persona.hometown = 'Buy a Harbour';

output.innerHTML = persona.name + ' lives in ' + persona.hometown;

var oddNums = {};
oddNums.number = 1;
oddNums.str = 'one';
oddNums.isOdd = true;

output.innerHTML = oddNums.number;

// most common
var dog = {
	name: 'Doggo',
	breed: 'Golden',
	age: 3,
	isFriendly: true
};

var cat = new Object();
(cat.name = 'Smilla'), (cat.age = 3);
output.innerHTML = cat.name;

var junkObject = {
	name: 'junk',
	isEvil: false,
	age: 33,
	color: 'Space gray',
	friends: [ 'Daruk', 'Revali', 'Urbosa' ],
	pet: {
		name: 'Challe',
		species: 'Pig',
		age: 9
	}
};

output.innerHTML = junkObject.pet.species;

// 1. Create an array of posts (author, title, comments) where
// each index is an object
var posts = [
	{
		author: 'CatLuvr',
		title: 'Catz are gr8',
		comments: [ 'I have such an adorable cat!', 'My cat is cuuute!' ]
	},
	{
		author: 'DogKing',
		title: 'Dogs eat much',
		comments: [ 'I have a dog that eats so much food.' ]
	},
	{
		author: 'Tiger',
		title: 'Big cat',
		comments: [ "He's such a big cat." ]
	}
];
// output.innerHTML = 'Author: ' + posts[1].author + '<br/> Comment: ' + posts[1].comments[0];

// 2. Iterate through the entire array and display the key/value pairs in each object
output.innerHTML = '';
posts.forEach(function(post) {
	output.innerHTML +=
		'Author: ' +
		post.author +
		'<br/>Title: ' +
		post.title +
		'<br/>Comments: ' +
		post.comments.join(' --- ') +
		'<br/><br/>';
});
