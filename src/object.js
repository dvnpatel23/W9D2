function MovingObject(arg, game) {
  // debugger
  this.pos = arg.pos;
  this.vel = arg.vel;
  this.radius = arg.radius;
  this.color = arg.color;
  this.game = game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function () {
  // debugger
  this.pos[0] = (this.vel[0] + this.pos[0]) % this.game.DIM_X; //this.vel[0]//
  this.pos[1] = (this.vel[1] + this.pos[1]) % this.game.DIM_Y; //this.vel[1]// 
};



MovingObject.prototype.isCollideWith = function (otherObject) {
  debugger
  if (Util.dist(this.pos, otherObject.pos) < otherObject.radius + this.radius) {
    return true;
  } else {
    return false;
  }
};


module.exports = MovingObject;