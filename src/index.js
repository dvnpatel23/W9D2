// const MovingObject = require("./moving_object.js") ;
// const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const Util = require("./utils.js");





document.addEventListener('DOMContentLoaded', () => {
  // console.log("ashbdajksbdk");
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = 700;
  canvasEl.width = 700;
  
  // console.log(canvasEl);
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 700, 100);
  // window.MovingObject = MovingObject;
  // let obj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }, ctx);
  // obj.draw(ctx);
  // let astroid = new Asteroid({ pos: [70, 70]}, ctx);
  // astroid.draw(ctx);
  let game = new Game([canvasEl.width, canvasEl.height]);
  let game_view = new GameView(game, ctx);
  game_view.start();
  // game.draw(ctx);
});