import GameView from "./game_view";

class Enemy {
  constructor(y) {
    this.x = 900;   //start at the right side
    this.y = y * 100;
    this.width = 100;
    this.height = 100;
    this.hp = 100;
    this.speed = 1;
    this.frame = 0;
    this.minFrame = 0;
    this.maxFrame = 11;
    this.spriteWidth = 522;
    this.spriteHeight = 422;
    this.img = new Image();
    this.img.src = '../../images/ghost.png';
    this.img.alt = 'alt';
    this.time = 0
  }

  move() {
    this.x -= this.speed;
    this.time += 1

    if (this.time % 10 == 0) {
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
    // ctx.fillStyle = 'gray';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }

}

export default Enemy