/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./object.js */ \"./src/object.js\");\n\n\n\n\n\nfunction Asteroid(arg, game) {\n  let fullArgs = {};\n  fullArgs.pos = arg.pos;\n  fullArgs.radius = Asteroid.RADIUS;\n  fullArgs.color = Asteroid.COLOR;\n  fullArgs.vel = [1, 1]; //Util.randomVec(50);\n  MovingObject.call(this, fullArgs, game);\n};\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.RADIUS = 10;\nAsteroid.COLOR = \"blue\";\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.DIM_X = 700;\n  this.DIM_Y = 700;\n  this.addAsteroids();\n};\n\nGame.prototype.addAsteroids = function () {\n  for (let i = this.asteroids.length; i < Game.NUM_ASTEROIDS; i++) {\n    // debugger\n    let asteroid = new Asteroid(this.randomPosition(), this);\n    this.asteroids.push(asteroid);\n  }\n};\n\nGame.prototype.randomPosition = function () {\n  let pos = [];\n  // debugger\n  pos.push(Math.floor(Util.randomVec(this.DIM_X)[0]));\n  pos.push(Math.floor(Util.randomVec(this.DIM_Y)[0]));\n  return { pos };\n};\n\nGame.prototype.move = function () {\n    this.asteroids.forEach((asteroid) => asteroid.move());\n};\n\nGame.prototype.draw = function (ctx) {\n  // debugger\n\n  ctx.clearRect(0, 0, 700, 700);\n  ctx.fillStyle = \"#FF0000\";\n  ctx.fillRect(0, 0, 700, 700);\n  this.asteroids.forEach((asteroid) => {asteroid.draw(ctx)})\n};\nGame.prototype.checkCollisions = function () {\n  // debugger\n  // let nonCollidable = [];\n  // let collidable = [];\n  // this.asteroids.forEach((a1, idx1) => {\n  //   if(!collidable.includes(a1)) {\n  //     let notColidable = this.asteroids.slice(idx1 + 1).every((a2) => {\n  //       if (a1.isCollideWith(a2)) {\n  //         collidable.push(a2);\n  //       }\n  //       !a1.isCollideWith(a2);\n  //       // debugger\n  //     });\n  //     if (notColidable) { nonCollidable.push(a1) };\n  //   }    \n  // }); \n  // for(let i1 = 0; i1 < this.asteroids.length - 1; ++i1) {\n  //   // debugger\n  //   for (let i2 = i1 + 1; i2 < this.asteroids.length; ++i2 ) {\n  //     if (this.asteroids[i1].isCollideWith(this.asteroids[i2])) {\n  //       collidable.push(this.asteroids[i1], this.asteroids[i2])\n  //     }\n  //   }\n  //   if(!collidable.includes(this.asteroids[i1])) {\n  //     nonCollidable.push(this.asteroids[i1])\n  //   }\n  // }\n  // debugger\n  // this.asteroids = nonCollidable;\n}\n\nGame.prototype.step = function () {\n  this.checkCollisions();\n  this.move();\n}\n\nGame.NUM_ASTEROIDS = 4;\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n}\n\nGameView.prototype.start = function () {\n  setInterval(() => {\n    // debugger;\n    this.game.step();\n    this.game.draw(this.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require(\"./moving_object.js\") ;\n// const Asteroid = require(\"./asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // console.log(\"ashbdajksbdk\");\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.height = 700;\n  canvasEl.width = 700;\n  \n  // console.log(canvasEl);\n  const ctx = canvasEl.getContext(\"2d\");\n  ctx.fillStyle = \"#FF0000\";\n  ctx.fillRect(0, 0, 700, 100);\n  // window.MovingObject = MovingObject;\n  // let obj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: \"#00FF00\" }, ctx);\n  // obj.draw(ctx);\n  // let astroid = new Asteroid({ pos: [70, 70]}, ctx);\n  // astroid.draw(ctx);\n  let game = new Game([canvasEl.width, canvasEl.height]);\n  let game_view = new GameView(game, ctx);\n  game_view.start();\n  // game.draw(ctx);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(arg, game) {\n  // debugger\n  this.pos = arg.pos;\n  this.vel = arg.vel;\n  this.radius = arg.radius;\n  this.color = arg.color;\n  this.game = game;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  // debugger\n  this.pos[0] = (this.vel[0] + this.pos[0]) % this.game.DIM_X; //this.vel[0]//\n  this.pos[1] = (this.vel[1] + this.pos[1]) % this.game.DIM_Y; //this.vel[1]// \n};\n\n\n\nMovingObject.prototype.isCollideWith = function (otherObject) {\n  debugger\n  if (Util.dist(this.pos, otherObject.pos) < otherObject.radius + this.radius) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Util = {\n  inherits (child, parent) {\n    // debugger\n    child.prototype = Object.create(parent.prototype);\n    child.prototype.constructor = child;\n  }, \n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.abs(Math.sin(deg)), Math.abs(Math.cos(deg))], length); \n  } , \n    scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  dist(pos1, pos2) {\n    return Math.sqrt(((pos1[0] - pos2[0]) ** 2) + ((pos1[1] - pos2[1]) ** 2) )\n  }\n\n\n};\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });