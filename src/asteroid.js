const Util = require("./utils.js");
const MovingObject = require("./object.js");





function Asteroid(arg, game) {
  let fullArgs = {};
  fullArgs.pos = arg.pos;
  fullArgs.radius = Asteroid.RADIUS;
  fullArgs.color = Asteroid.COLOR;
  fullArgs.vel = [1, 1]; //Util.randomVec(50);
  MovingObject.call(this, fullArgs, game);
};
Util.inherits(Asteroid, MovingObject);

Asteroid.RADIUS = 10;
Asteroid.COLOR = "blue";



module.exports = Asteroid;