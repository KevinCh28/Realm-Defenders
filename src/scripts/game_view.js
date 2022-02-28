import Board from "./board.js"
import Enemy from "./enemy.js"
import Defender from "./defender.js";

class GameView {
  constructor (ctx) {
    this.ctx = ctx;
    this.game = new Board();
    this.time = 0;
    this.defenders = [];
    this.enemies = [];
    this.resource = 200;
    this.highScore = 0;
  }

  start() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 600;
    
    if (this.time % 5000 === 0) {
      let yPos = Math.floor(Math.random() * 5);   //random 0-4
      this.enemies.push(new Enemy(yPos + 1)) //random 0-4 + 1 = 1-5
    }

    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw()
      this.enemies[i].move()
      if (this.enemies[i].x <= 0) this.gameOver(ctx);
    }

    this.time += 1;
    canvas.addEventListener('click', function(e) {
      let posX = e.x - (e.x % 100);
      let posY = e.y - (e.y % 100);

      if (this.resource >= 100 && posY >= 100 && avaibleSpot()) {
        this.defenders.push(new Defender(posX, posY))
        this.resource -= this.defenders[this.denfenders.length - 1].cost
      }
    })

    for (let i = 0; i < this.defenders.length; i++) {
      if (this.defenders.length >= 1) {
        this.defenders[i].draw()
      }
    }
    

    // setInterval(() => {
    //   this.start()
    // },50);
  }

  gameOver(ctx) {
    ctx.fillStyle = 'red';
    ctx.font = '70px Moonhouse';
    ctx.fillText('Game Over!', 300, 300);
    this.clearInterval()
  }

  avaibleSpot() {
    for (let i = 0; i < this.defenders.length; i ++) {
      if (this.defenders[i].x === posX && this.defenders[i].y === posY) {
        return false
      } 
    }
    return true
  }

}





export default GameView;