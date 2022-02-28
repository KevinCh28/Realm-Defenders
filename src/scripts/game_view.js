import Board from "./board.js"
import Enemy from "./enemy.js"
import Defender from "./defender.js";
import Projectile from "./projectile.js";

class GameView {
  constructor (ctx) {
    this.ctx = ctx;
    // this.game = new Board();
    this.time = 0;
    this.defenders = [];
    this.projectiles = [];
    this.enemies = [];
    this.resource = 1000;
    this.highScore = 0;
  }

  start() {
    const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    // canvas.width = 900;
    // canvas.height = 600;
    let that = this;
    
    this.ctx.clearRect(0, 0, 900, 600);
    
    this.myMenu(this.ctx);

    if (this.time % 500 === 0 || this.time === 0) {
      let yPos = Math.floor(Math.random() * 5);   //random 0-4
      this.enemies.push(new Enemy(yPos + 1)) //random 0-4 + 1 = 1-5
    }

    

    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw(this.ctx)
      this.enemies[i].move()
      if (this.enemies[i].x < 0) {
        this.gameOver(this.ctx);
      } else {
        this.repeat = requestAnimationFrame(this.start.bind(this))
        // this.timer = setInterval(() => {
        //   this.start()
        // }, 1000/60 );

      }
    }

    canvas.addEventListener('click', function(e) {    //not sure how to bind 'this'
      let posX = e.x - (e.x % 100);
      let posY = e.y - (e.y % 100);
      // console.log(posX, posY)
      if (that.resource >= 100 && posY >= 100 && that.avaibleSpot(posX, posY)) {
        that.defenders.push(new Defender(posX, posY))
        that.resource -= 100
      }
    })

    this.drawDefenders()
    this.drawProjectiles()
    this.enemyCollidesWithDefender()
    this.time += 1;
    // console.log(this.time)
  }
////////

  gameOver(ctx) {
    ctx.fillStyle = 'red';
    ctx.font = '70px Moonhouse';
    ctx.fillText('Game Over!', 300, 300);
    // clearInterval(this.timer)
    cancelAnimationFrame(this.repeat)
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

  enemyCollidesWithDefender() {
    for (let i = 0; i < this.defenders.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.isCollidedWith(this.defenders[i], this.enemies[j])) {
          this.defenders[i].hp -= 1;
          this.enemies[j].speed = 0;
        } 
        if (this.defenders[i].hp <= 0) {
          this.defenders.splice(i, 1);
          i--;
          this.enemies[j].speed = 1;
        }
      }
    }
  }

  isCollidedWith(obj1, obj2) {            //assume obj1 is on the left side
    // if (obj1.y === obj2.y && (obj1.x + obj1.width) > obj2.x ) { 
    if (obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    ){ 
      return true;
    } else {
      return false;
    }
  }

  drawDefenders() {
    if (this.defenders.length > 0) {
      for (let i = 0; i < this.defenders.length; i++) {
        this.defenders[i].draw(this.ctx)

        if (this.time % 100 === 0) {
          this.projectiles.push(new Projectile(this.defenders[i].x + 110, this.defenders[i].y + 40))
        }
      }
    }
  }

  drawProjectiles() {
    if (this.projectiles.length > 0) {
      for (let i = 0; i < this.projectiles.length; i++) {
        this.projectiles[i].draw(this.ctx)
        this.projectiles[i].move()
        // console.log(this.projectiles[i])

        if (this.projectiles[i].x >= 900) {
          this.projectiles.splice(i, 1)
          i--;
        }

        for (let j = 0; j < this.enemies.length; j++) {
          if (this.isCollidedWith(this.projectiles[i], this.enemies[j])) {
            this.projectiles.splice(i, 1)
            this.enemies[j].hp -= 20;
            i--;
          }
          if (this.enemies[j].hp <= 0) {
            this.enemies.splice(j, 1)
            this.resource += 100
            this.highScore += 100
            j--;
          }
        }
      }
    }
  }

  projectileCollidedWithEnemy() {

  }
}





export default GameView;