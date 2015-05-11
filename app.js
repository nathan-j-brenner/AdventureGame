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
			roomD();
		} else if (direction==="east"){
			roomB();
		} else{
			rl.close();
		}
	});
};

var roomB = function(){
	console.log("You are now in room B. There are three doors: Choose north, east, or west");
	rl.question("Which direction do you want to go?", function(direction){
		if(direction==="north"){
			console.log("You are in room E");
		} else if (direction==="east"){
			roomC();
		} else if (direction==="west"){
			roomA();
		} else {
			rl.close();
		}
	});
};

var roomC = function(){
	rl.question("You are now in room C. This is a dead end, and there is only one way out of this room.  Choose west to backtrack your steps", function(direction){
		if(direction==="west"){
			roomB();
		} else{
			rl.close();
		}
	});
};

var roomD = function(){
	console.log("You are in room D. There are two doors: Choose north or south");
	rl.question("Which direction do you want to go?", function(direction){
		if(direction==="north"){
			console.log("You are in room G");
		} else if (direction==="south"){
			roomA();
		} else{
			rl.close();
		}
	});
};

var roomE = function(){
	console.log("You are in room E. There are two doors: Choose south or east");
	rl.question("Which direction do you want to go?", function(direction){
		if(direction==="south"){
			roomB();
		} else if (direction==="east"){
			roomF();
		} else{
			rl.close();
		}
	});
};

var roomF = function(){
	rl.question("You are now in room F. This is a dead end, and there is only one way out of this room.  Choose west to backtrack your steps", function(direction){
		if(direction==="west"){
			roomE();
		} else{
			rl.close();
		}
	});
};

console.log("You are at the beginning of a new Adventure.");
roomA();
