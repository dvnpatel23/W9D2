function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
}

GameView.prototype.start = function () {
  setInterval(() => {
    // debugger;
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
};

module.exports = GameView;