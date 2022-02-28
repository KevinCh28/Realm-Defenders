import Board from "./board.js"
import Enemy from "./enemy.js"
import Defender from "./defender.js";

class GameView {
  constructor () {
    // this.ctx = ctx
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
    let that = this;

    this.myMenu(ctx);

    if (this.time % 5000 === 0) {
      let yPos = Math.floor(Math.random() * 5);   //random 0-4
      this.enemies.push(new Enemy(yPos + 1)) //random 0-4 + 1 = 1-5
    }

    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw()
      this.enemies[i].move()
      if (this.enemies[i].x < 0) {
        this.gameOver(ctx);
      } else {
        // requestAnimationFrame(this.start())
        // setInterval(() => {
        //   this.start()
        // }, 1000/60 );
      }
    }

    this.time += 1;

    canvas.addEventListener('click', function(e) {    //not sure how to bind 'this'
      let posX = e.x - (e.x % 100);
      let posY = e.y - (e.y % 100);
      // console.log(posX, posY)
      if (that.resource >= 100 && posY >= 100 && that.avaibleSpot(posX, posY)) {
        that.defenders.push(new Defender(posX, posY))
        that.resource -= 100
      }
    })

    if (this.defenders.length > 0) {
      for (let i = 0; i < this.defenders.length; i++) {
        this.defenders[i].draw()
      }
    }

    this.collision()
  }

  gameOver(ctx) {
    ctx.fillStyle = 'red';
    ctx.font = '70px Moonhouse';
    ctx.fillText('Game Over!', 300, 300);
    // this.clearInterval()
    cancelAnimationFrame()
  }

  avaibleSpot(posX, posY) {
    for (let i = 0; i < this.defenders.length; i ++) {
      if (this.defenders[i].x === posX && this.defenders[i].y === posY) {
        return false
      } 
    }
    return true
  }

  myMenu(ctx) {
    ctx.fillStyle = 'black';
    ctx.font = '20px Moonhouse';
    ctx.fillText('High Score: ' + this.highScore, 10, 30);
    ctx.fillText('Resource: ' + this.resource, 10, 70);
  }

  collision() {
    for (let i = 0; i < this.defenders.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.isCollidedWith(this.defenders[i], this.enemies[j])) {
          this.defenders[i].hp -= 0.1;
          this.enemies[j].speed = 0;
        } 
        if (this.defenders[i].hp <= 0) {
          this.defenders.splice(i, 1);
          i--;
          this.enemies[j].speed = 0.1;
        }
      }
    }
  }

  isCollidedWith(obj1, obj2) {            //assume obj1 is on the left side
    if (obj1.y === obj2.y && (obj1.x + obj1.width) > obj2.x) { 
      return true;
    } else {
      return false;
    }
  }
}





export default GameView;