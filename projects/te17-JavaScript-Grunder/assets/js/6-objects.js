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
		'<strong>Author</strong>: ' +
		post.author +
		'<br/><strong>Title</strong>: ' +
		post.title +
		'<br/><strong>Comments</strong>: ' +
		post.comments.join(' --- ') +
		'<br/><br/>';
});

// Create an array of objects
// Each object should have a title, rating
// and hasWatched keys
// Use boolean values for hasWatched
// Iterate through the array with a forEach and print out
// something that looks like:

/* this is the output from
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/

var movies = [
	{
		title: 'Frozen II',
		rating: 7.2,
		hasWatched: true
	},
	{
		title: 'How The Grinch Stole Christmas',
		rating: 6.1,
		hasWatched: true
	},
	{
		title: 'Joker',
		rating: 8.6,
		hasWatched: false
	},
	{
		title: 'Birds of Prey',
		rating: 6.8,
		hasWatched: false
	},
	{
		title: 'Uncut Gems',
		rating: 7.7,
		hasWatched: false
	}
];

output.innerHTML = '';

var count = {
	text: 'This is some text',
	add: function(x, y) {
		return x + y;
	},
	rndmNmbr: 32
};

output.innerHTML = count.add(count.rndmNmbr, 5);
output.innerHTML = '';

// Add and remove a friend in a user object
var btnAddFriend = document.querySelector('.aFriend');
var btnRemoveFriend = document.querySelector('.rFriend');

var user = {
	friends: [ 'Arnold', 'Stallone', 'Chuck' ],
	addFriend: function(friend) {
		this.friends.push(friend);
	},
	removeFriend: function() {
		this.friends.pop();
	}
};

btnAddFriend.addEventListener('click', function() {
	user.addFriend(prompt('Insert name of friend'));
});

btnRemoveFriend.addEventListener('click', removeMyFriend);

function removeMyFriend() {
	user.removeFriend();
}

// Hero object
var btnDmgTaken = document.getElementsByTagName('button')[2];
var btnManaRefill = document.getElementsByTagName('button')[3];
var btnCastSpell = document.getElementsByTagName('button')[4];

var hero = {
	name: 'ArneSlayer',
	hp: 100,
	mana: 30,
	dmgTaken: function() {
		// this.hp = this.hp - 5;
		this.hp -= 5;
	},
	manaRefill: function() {
		// this.mana = this.mana + 30;
		this.mana += 30;
	},
	castSpell: function() {
		this.mana -= 25;
	}
};
