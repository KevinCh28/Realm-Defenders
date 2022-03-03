class DefenderUpgrade1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.hp = 400;
    this.attack = false;
    this.cost = 100
    this.frame = 0;
    this.minFrame = 0;
    this.maxFrame = 11;
    this.spriteWidth = 522;
    this.spriteHeight = 422;

    this.img = new Image();
    this.img.src = 'images/defender3.png';
    this.img.alt = 'alt';
    this.time = 0;
  }

  move() {
    this.time += 1

    if (this.time % 5 == 0) {
      if (this.frame < this.maxFrame) {
        this.frame += 1;
      } else {
        this.frame = this.minFrame
      }
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x + 25, this.y + 5, this.hp / 8, 5);
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height); //file, first4 source, last4 destination
  }

}

module.exports = DefenderUpgrade1;