console.log(require('jsi-gamelib').map(require(process.argv[2])));


var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var entrance = function(){
	console.log("You just walked into his house. There's a set of stairs leading up or down. ");
	rl.question("Which direction do you want to go? ", function(direction){
		if(direction==="up"){
			hallway();
		} else if (direction==="down"){
			library();
		} else{
			rl.close();
		}
	});
};

var hallway = function(){
	console.log("You are now in the hallway. On this floor, you have three areas to search: living room, kitchen, or down the hallway. ");
	rl.question("Which room do you want to search? ", function(direction){
		if(direction==="living room"){
			livingRoom();
		} else if (direction==="kitchen"){
			kitchen();
		} else if (direction==="down the hallway"){
			downHallway();
		} else {
			rl.close();
		}
	});
};

var livingRoom = function(){
	console.log("You are now in the living room.  No laptop here. You can go look in the dining room, or go back to the hallway. ");
	rl.question("Which room do you want to search next? ", function(direction){
		if(direction==="dining room"){
			diningRoom();
		} else if (direction==="hallway"){
			hallway();
		} else {
			rl.close();
		}
	});
};

var diningRoom = function(){
	console.log("You are now in the dining room, and still no laptop in sight. You can go outside and look on the deck or you can look in the kitchen. ");
	rl.question("Which room do you want to search next? ", function(direction){
		if(direction==="outside"){
			outside();
		} else if(direction==="kitchen"){
			kitchen();
		} else{
			rl.close();
		}
	});
};

var kitchen = function(){
	console.log("You are now in the kitchen.  There's some plates in the sink and cat footprints on the counters, but no laptop.  You can go back into the hallway or back to the dining room. ");
	rl.question("Which room do you want to search next? ", function(direction){
		if(direction==="hallway"){
			hallway();
		} else if(direction==="dining room"){
			diningRoom();
		} else{
			rl.close();
		}
	});
};

var outside = function(){
	console.log("This is a big backyard, so lets just keep it in the house. ");
	rl.question("Do you want to go back in the house from the dining room or walk down the stairs and go into the garage? ", function(direction){
		if(direction==="dining room"){
			diningRoom();
		} else if(direction==="garage"){
			garage();
		} else{
			rl.close();
		}
	});
};

var downHallway = function(){
	console.log("This hallway has four rooms to search: bathroom, master bedroom, the guest room, the nursery, or back to the main entrance. ");
	rl.question("Which room do you want to search? ", function(direction){
		if(direction==="bathroom"){
			bathroom();
		} else if(direction==="master bedroom"){
			masterBedroom();
		} else if(direction==="guest room"){
			guestRoom();
		} else if(direction==="nursery"){
			nursery();
		} else if(direction==="main entrance"){
			entrance();
		} else {
			rl.close();
		}
	});
};

var bathroom = function(){
	console.log("You're in the bathroom, and there's nothing here but take your time ");
	rl.question("Once you're ready to continue, go back to the hallway to keep looking", function(direction){
		if(direction==="hallway"){
			downHallway();
		} else{
			rl.close();
		}
	});
};

var masterBedroom = function(){
	console.log("You're in his bedroom.  Everything looks pretty cleaned up and there's no laptop in site ");
	rl.question("Are you ready to keep looking? ", function(direction){
		if(direction==="yes"){
			downHallway();
		} else if(direction==="no"){
			masterBedroom();
		} else{
			rl.close();
		}
	});
};
var guestRoom = function(){
	console.log("You're in the guest room. This room is pretty messy since it's not used very much but there's no laptop in site ");
	rl.question("Are you ready to keep looking? ", function(direction){
		if(direction==="yes"){
			downHallway();
		} else if(direction==="no"){
			masterBedroom();
		} else{
			rl.close();
		}
	});
};
var nursery = function(){
	console.log("You're in the nursery.  This room lacks furniture, so it's pretty evident there's no laptop here. ");
	rl.question("Are you ready to keep looking? ", function(direction){
		if(direction==="yes"){
			downHallway();
		} else if(direction==="no"){
			masterBedroom();
		} else{
			rl.close();
		}
	});
};
var library = function(){
	console.log("You're in the library. There's a kegorator and a reading chair with a bunch of books on bookshelves.  After you looked around, you didn't see any laptop but there are some more rooms down here. ");
	rl.question("From here, pick one of the rooms to go look: the garage, the laundry room, and the office. ", function(direction){
		if(direction==="garage"){
			garage();
		} else if(direction==="laundry room"){
			laundry();
		} else if(direction==="office"){
			office();
		} else{
			rl.close();
		}
	});
};
var garage = function(){
	console.log("After looking for a while in here, there's no laptop to be found.  You can go outside or go back inside. ");
	rl.question("Where do you want to go? ", function(direction){
		if(direction==="inside"){
			library();
		}else if(direction==="outside") {
			outside();
		} else{
			rl.close();
		}
	});
};
var laundry = function(){
	console.log("Say hi to Virgil, but don't let him out of this room and close the door quickly.  No laptop in there. ");
	library();
};
var office = function(){
	console.log("Laptop found!");
	rl.close();
};


console.log("You're at Nate's house in Troutdale. He's sent you to find his laptop.  Good Luck ");
entrance();