console.log(require('jsi-gamelib').map(require(process.argv[2])));

console.log("You are at the beginning of a new Adventure.");
console.log("You are standing at the first room of a building.  This is room B.");
console.log("There are three doors. One is to the north, one is to the east, one is to the west");

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Which direction do you want to go?", function(direction){
	if(direction === "north"){
		console.log("You are now located in Room E");
		console.log("You are now in a room with two doors: One door to the south and one door to the east.")
		rl.question("Which direction do you want to go?")
	} else if(direction === "west"){
		console.log("You are now located in Room A");
	} else if(direction === "east"){
		console.log("You are now located in Room C. You are at a dead end.");
	}
	rl.close();
});