console.log(require('jsi-gamelib').map(require(process.argv[2])));


var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var roomA = function(){
	console.log("You are in room A. There are two doors: Choose north or east");
	rl.question("Which direction do you want to go?", function(direction){
		if(direction==="north"){
			console.log("You are in room D");
		} else if (direction==="east"){
			console.log("You are in room B");
		}
	});
};

console.log("You are at the beginning of a new Adventure.");
console.log("You are standing at the first room of a building.  This is room A.");
roomA();
