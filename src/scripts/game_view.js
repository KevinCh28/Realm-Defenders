import Board from "./board.js"
import Enemy from "./enemy.js"

class GameView {
  constructor (ctx) {
    this.ctx = ctx;
    this.game = new Board();
    this.time = 0;
    this.defenders = [];
    this.enemies = []
  }

  start() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 600;

    // ctx.fillStyle = 'red'; //menu bar
    // ctx.fillRect(0, 0, 900, 100);

    this.game.handleGrid();
    
    if (this.time % 5000 === 0 || !this.time) {
      let yPos = Math.floor(Math.random() * 5);   //random 0-4
      this.enemies.push(new Enemy(yPos + 1)) //random 0-4 + 1 = 1-5
    }

    this.time += 1;

    for (let i = 0; i < this.enemies.length; i++) {
      // console.log(this.enemies[i])
      this.enemies[i].draw()
      this.enemies[i].move()
    }

    setInterval(() => {
      // console.log(this.time)
      this.start()
    },50);

    // requestAnimationFrame(this.start())
  }
}





export default GameView;