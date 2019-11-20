// Ask the user "Are we there yet"
var answer = prompt('Are we there yet?');

// Keep asking again and again until they enter "yes" OR "yeah"
// while (answer != 'yes' && answer != 'yeah') {
// 	var answer = prompt('Are we there yet?');
// }

// Then, alert "Yay, we finally made it!"
while (answer.toLowerCase().indexOf('ye', 0) == -1) {
	var answer = prompt('Are we there yet?');
}

alert('Yeah, we finally made it!');
