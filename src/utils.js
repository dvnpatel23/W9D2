
const Util = {
  inherits (child, parent) {
    // debugger
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }, 
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.abs(Math.sin(deg)), Math.abs(Math.cos(deg))], length); 
  } , 
    scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  dist(pos1, pos2) {
    return Math.sqrt(((pos1[0] - pos2[0]) ** 2) + ((pos1[1] - pos2[1]) ** 2) )
  }


};

module.exports = Util;

