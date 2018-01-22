var RetiredForagerBee = function() {
  // Create RetiredForagerBee through ForagerBee constructor
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

// Point RetiredForagerBee prototype to inherit methods of Forager constructor
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// Re-assign constructor to RetiredForagerBee constructor instead of Forager constructor
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// Create forage method for RetiredForagerBee
RetiredForagerBee.prototype.forage = function() {
	return 'I am too old, let me play cards instead';
}

// Create gamble method that stores treasure in treasureChest; method should always win
RetiredForagerBee.prototype.gamble = function() {
	this.treasureChest.push('treasure');
}