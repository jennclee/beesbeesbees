var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.canFly = true;
	this.treasureChest = [];
};

// Point ForagerBee prototype to methods of Bee
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// Create forage method to add treasure to treasureChest
ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest.push(treasure);
}