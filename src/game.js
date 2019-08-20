const Asteroid = require("./asteroid.js");
const Util = require("./utils.js");

function Game() {
  this.asteroids = [];
  this.DIM_X = 700;
  this.DIM_Y = 700;
  this.addAsteroids();
};

Game.prototype.addAsteroids = function () {
  for (let i = this.asteroids.length; i < Game.NUM_ASTEROIDS; i++) {
    // debugger
    let asteroid = new Asteroid(this.randomPosition(), this);
    this.asteroids.push(asteroid);
  }
};

Game.prototype.randomPosition = function () {
  let pos = [];
  // debugger
  pos.push(Math.floor(Util.randomVec(this.DIM_X)[0]));
  pos.push(Math.floor(Util.randomVec(this.DIM_Y)[0]));
  return { pos };
};

Game.prototype.move = function () {
    this.asteroids.forEach((asteroid) => asteroid.move());
};

Game.prototype.draw = function (ctx) {
  // debugger

  ctx.clearRect(0, 0, 700, 700);
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 700, 700);
  this.asteroids.forEach((asteroid) => {asteroid.draw(ctx)})
};
Game.prototype.checkCollisions = function () {
  // debugger
  // let nonCollidable = [];
  // let collidable = [];
  // this.asteroids.forEach((a1, idx1) => {
  //   if(!collidable.includes(a1)) {
  //     let notColidable = this.asteroids.slice(idx1 + 1).every((a2) => {
  //       if (a1.isCollideWith(a2)) {
  //         collidable.push(a2);
  //       }
  //       !a1.isCollideWith(a2);
  //       // debugger
  //     });
  //     if (notColidable) { nonCollidable.push(a1) };
  //   }    
  // }); 
  // for(let i1 = 0; i1 < this.asteroids.length - 1; ++i1) {
  //   // debugger
  //   for (let i2 = i1 + 1; i2 < this.asteroids.length; ++i2 ) {
  //     if (this.asteroids[i1].isCollideWith(this.asteroids[i2])) {
  //       collidable.push(this.asteroids[i1], this.asteroids[i2])
  //     }
  //   }
  //   if(!collidable.includes(this.asteroids[i1])) {
  //     nonCollidable.push(this.asteroids[i1])
  //   }
  // }
  // debugger
  // this.asteroids = nonCollidable;
}

Game.prototype.step = function () {
  this.checkCollisions();
  this.move();
}

Game.NUM_ASTEROIDS = 4;

module.exports = Game;
