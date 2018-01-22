var HoneyMakerBee = function() {
  // Create honeybee from bee constructor
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

// Set prototype of honeybee to point to bee
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// Create makeHoney method to add 1 to honeyPot property
HoneyMakerBee.prototype.makeHoney = function() {
	this.honeyPot += 1;
}

// Create giveHoney method to subtract 1 from honeyPot property
HoneyMakerBee.prototype.giveHoney = function() {
	this.honeyPot -= 1;
}