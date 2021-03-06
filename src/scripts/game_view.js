import Enemy from "./enemy.js"
import Defender from "./defender.js";
import Projectile from "./projectile.js";
import EnemyBig from "./enemy_big.js";
import DefenderUpgrade1 from "./defender_upgrade1.js";

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.time = 0;
    this.defenders = [];
    this.projectiles = [];
    this.enemies = [];
    this.resource = 500;
    this.highScore = 0;
    this.killCount = 0;
    this.selectedDefender = 1;

    this.backGroundImg = new Image();
    this.backGroundImg.src = 'images/game_background_3.png';
    this.backGroundImg.alt = 'alt';
    this.summonUnit = this.summonUnit.bind(this);
  }

  start() {
    const canvas = document.getElementById('game-canvas');
    let that = this;
    // this.ctx.clearRect(0, 0, 900, 600);
    this.ctx.drawImage(this.backGroundImg, 0, 0, 900, 600);

    if (this.enemies.length > 0 && this.highScore % 2000 === 0) {
      for (let i = 0; i < this.enemies.length; i++) {
        this.enemies[i].speed = 1;
      }
      this.highScore += 100;
    }

    if (this.time % 500 === 0) {
      let yPos = Math.floor(Math.random() * 5);   //random 0-4
      this.enemies.push(new Enemy(yPos + 1)); //random 0-4 + 1 = 1-5
    }

    if (this.killCount === 4) {
      let yPos = Math.floor(Math.random() * 5);
      this.enemies.push(new Enemy(yPos + 1));
      this.killCount -= 1
    }

    if (this.highScore % 2100 === 0 && this.highScore !== 0) {
      let yPos = Math.floor(Math.random() * 4);
      this.enemies.push(new Enemy(yPos + 1));
      this.highScore += 100
      this.resource += 100
    }

    if (this.highScore % 2200 === 0 && this.highScore !== 0) {
      let yPos = Math.floor(Math.random() * 4);
      this.enemies.push(new Enemy(yPos + 1));
      this.highScore += 100
      this.resource += 100
    }

    if (this.highScore % 2000 === 0 && this.highScore !== 0) {
      let yPos = Math.floor(Math.random() * 4);
      this.enemies.push(new EnemyBig(yPos + 1));
      this.highScore += 100
      this.resource += 100
    }

    if (this.highScore % 6000 === 0 && this.highScore !== 0) {
      let yPos = Math.floor(Math.random() * 4);
      this.enemies.push(new EnemyBig(yPos + 1));
      this.highScore += 100
    }

    if (this.highScore > 5000 && this.time % 500 === 0) {
      let yPos = Math.floor(Math.random() * 4);
      this.enemies.push(new EnemyBig(yPos + 1));
      this.enemies.push(new EnemyBig(yPos + 1));
    }

    this.repeat = requestAnimationFrame(this.start.bind(this))

    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].x < -35) {
        this.gameOver(this.ctx, canvas);
      }
    }

    this.myMenu(this.ctx);
    this.drawPointed(this.ctx)
    this.drawEnemy()
    this.drawDefenders()
    this.drawProjectiles()
    this.enemyCollidesWithDefender()
    this.projectileCollidedWithEnemy()
    this.time += 1;
  }

  startEventListener() {
    const canvas = document.getElementById('game-canvas');
    canvas.addEventListener('click', e => this.summonUnit(e))
  }
////////////////////////////
////////////////////////////
////////////////////////////

  summonUnit(e) {
    e.preventDefault()
    const canvas = document.getElementById('game-canvas');

    let mousePos = this.getMousePosition(canvas, e)
    let posX = mousePos.x - (mousePos.x % 100);
    let posY = mousePos.y - (mousePos.y % 100);

    if (this.resource >= 300 && posY >= 100 && this.avaibleSpot(posX, posY) && this.selectedDefender === 2) {
      this.defenders.push(new DefenderUpgrade1(posX, posY))
      this.resource -= 300
    } else if (this.resource >= 100 && posY >= 100 && this.avaibleSpot(posX, posY) && this.selectedDefender === 1) {
      this.defenders.push(new Defender(posX, posY))
      this.resource -= 100
    } else if (posX >= 0 && posX < 100 && posY >= 0 && posY < 100) {
      this.selectedDefender = 1
    } else if (posX >= 100 && posX < 200 && posY >= 0 && posY < 100) {
      this.selectedDefender = 2
    }
  }

  gameOver(ctx, canvas) {
    ctx.fillStyle = 'red';
    ctx.font = '70px arial';
    ctx.fillText('GAME OVER', 250, 300);

    ctx.fillStyle = 'yellow'
    ctx.font = '20px arial';
    ctx.fillText('click to restart', 400, 400)
    cancelAnimationFrame(this.repeat)
    this.newGame(canvas)
  }

  avaibleSpot(posX, posY) {
    if (this.defenders.length === 0) return true;

    for (let i = 0; i < this.defenders.length; i ++) {
      if (this.defenders[i].x === posX && this.defenders[i].y === posY) {
        return false
      } 
    }
    return true
  }

  drawPointed(ctx) {
    const canvas = document.getElementById('game-canvas');

    canvas.addEventListener('mouseover', function (e) {
      e.preventDefault()
      let mousePos = this.getMousePosition(canvas, e)
      let posX = mousePos.x - (mousePos.x % 100);
      let posY = mousePos.y - (mousePos.y % 100);
      console.log(posX)
      console.log(posY)

      ctx.fillStyle = 'yellow';
      ctx.fillRect(posX, posY, 100, 3);
      ctx.fillRect(posX, posY, 100, 3);
      ctx.fillRect(posX, posY, 3, 100);
      ctx.fillRect(posX, posY, 3, 100);
    })
  }

  myMenu(ctx) {
    ctx.fillStyle = 'black';
    ctx.font = 'bold 20px arial';
    ctx.fillText('HIGH SCORE: ' + this.highScore, 370, 30);
    ctx.fillText('RESOURCE: ' + this.resource, 370, 70);

    ctx.fillStyle = 'black';
    ctx.font = 'bold 20px arial';
    ctx.fillText('100', 60, 90);
    ctx.fillText('300', 160, 90);

    let defender1_img = new Image();
    defender1_img.src = 'images/defender1.png';
    defender1_img.alt = 'alt';

    let defender2_img = new Image();
    defender2_img.src = 'images/defender3.png';
    defender2_img.alt = 'alt';

    ctx.drawImage(defender1_img, 0 * 522, 0, 522, 422, 0, 0, 100, 100);
    ctx.drawImage(defender2_img, 0 * 522, 0, 522, 422, 100, 0, 100, 100);

    if (this.selectedDefender === 1) {
      ctx.fillStyle = 'yellow';
      ctx.fillRect(0, 0, 100, 3);
      ctx.fillRect(0, 97, 100, 3);
      ctx.fillRect(0, 0, 3, 100);
      ctx.fillRect(97, 0, 3, 100);
    } else if (this.selectedDefender === 2) {
      ctx.fillStyle = 'yellow';
      ctx.fillRect(100, 0, 100, 3);
      ctx.fillRect(100, 97, 100, 3);
      ctx.fillRect(100, 0, 3, 100);
      ctx.fillRect(197, 0, 3, 100);
    }
  }

  enemyCollidesWithDefender() {
    for (let i = 0; i < this.defenders.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.defenders[i] && this.enemies[j] && this.isCollidedWith(this.defenders[i], this.enemies[j])) {
          this.defenders[i].hp -= 1;
          this.enemies[j].speed = 0;

          if (this.defenders[i] && this.defenders[i].hp <= 0) {
            this.defenders.splice(i, 1);
            i--;
            this.enemies[j].speed = 1;
          }
        }
      }
    }
  }

  isCollidedWith(obj1, obj2) {
    if (obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y)
    { 
      return true;
    } else {
      return false;
    }
  }

  drawDefenders() {
    if (this.defenders.length > 0) {
      for (let i = 0; i < this.defenders.length; i++) {
        this.defenders[i].draw(this.ctx)
        this.defenders[i].move()

        if (this.time % 150 === 0) {
          this.projectiles.push(new Projectile(this.defenders[i].x, this.defenders[i].y + 20))
        }
      }
    }
  }

  drawProjectiles() {
    if (this.projectiles.length > 0) {
      for (let i = 0; i < this.projectiles.length; i++) {
        this.projectiles[i].draw(this.ctx)
        this.projectiles[i].move()

        if (this.projectiles[i].x >= 800) {
          this.projectiles.splice(i, 1)
          i--;
        }
      }
    }
  }

  drawEnemy() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw(this.ctx)
      this.enemies[i].move()

      if (this.highScore > 6000) {
        this.enemies[i].speed = 2
      }
    }
  }
  
  projectileCollidedWithEnemy() {
    for (let i = 0; i < this.projectiles.length; i++) {
      for (let j = 0; j < this.enemies.length; j++) {
        if (this.projectiles[i] && this.enemies[j] && this.isCollidedWith(this.projectiles[i], this.enemies[j])) {
          this.projectiles.splice(i, 1);
          this.enemies[j].hp -= 20;
          i--;
        }
        if (this.enemies[j].hp <= 0) {
          this.enemies.splice(j, 1)
          this.resource += 50;
          this.highScore += 100;
          this.killCount += 1;
          j--;
        }
      }
    }
  }

  getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  }

  newGame(canvas) {
    let restart = canvas.addEventListener('click', function() {
      window.location.reload()
    })
  }

}





export default GameView;