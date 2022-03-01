class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.speed = 5;
    this.damage = 20;

    this.minFrame = 0;
    this.maxFrame = 3;
    this.spriteWidth = 32;
    this.spriteHeight = 23;
    this.img = new Image();
    this.img.src = 'images/fire_projectile.png';
    this.img.alt = 'alt';
    this.time = 0;
  }

  move() {
    this.x += this.speed;
    this.time += 1;

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
    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }

}

export default Projectile;