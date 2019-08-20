const Util = require("./utils.js");
const MovingObject = require("./object.js");

function Ship(radius, color) {
  let fullArgs = {};
  fullArgs.radius = 70;
  fullArgs.color = "blue";
  fullArgs.vel = [0,0];
  fullArgs.pos = [20, 20];
  MovingObject.call(this, fullArgs, game)
  
}

Util.inherits(Asteroid, MovingObject);