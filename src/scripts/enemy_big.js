import GameView from "./game_view";

class EnemyBig {
  constructor(y) {
    this.x = 900;   //start at the right side
    this.y = y * 100;
    this.width = 200;
    this.height = 200;
    this.hp = 500;
    this.speed = 1;
    // this.skins = [];
    // this.selectedSkin;
    this.time = 0

    this.frame = 0;
    this.minFrame = 0;
    this.maxFrame = 17;
    this.spriteWidth = 722;
    this.spriteHeight = 492;

    this.img1 = new Image();
    this.img1.src = 'images/big_enemy.png';
    this.img1.alt = 'alt';

    // this.img2 = new Image();
    // this.img2.src = 'images/ghost2.png';
    // this.img2.alt = 'alt';

    // this.img3 = new Image();
    // this.img3.src = 'images/ghost3.png';
    // this.img3.alt = 'alt';

    // this.skins.push(this.img1)
    // this.skins.push(this.img2)
    // this.skins.push(this.img3)
    // this.selectedSkin = this.skins[Math.floor(Math.random()* 3)]
  }

  move() {
    this.x -= this.speed;
    this.time += 1

    if (this.time % 8 == 0) {
      if (this.frame < this.maxFrame) {
        this.frame += 1;
      } else {
        this.frame = this.minFrame
      }
    }
  }

  draw(ctx) {
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x + 25, this.y + 5, this.hp / 2, 5);
    ctx.drawImage(this.img1, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
//Math.floor(Math.random()* 3)
}

export default EnemyBig