var Bee = function() {
  // Create bee from grub 
  Grub.call(this);
  // Set unique properties of bee
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// Bee methods should be inherited from grub
Bee.prototype = Object.create(Grub.prototype);
// Point constructor back to bee so newly created bee objects will point to Bee constructor and not Grub
Bee.prototype.constructor = Bee;