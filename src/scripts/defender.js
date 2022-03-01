class Defender {
  constructor(x, y) { //x and y comes from click on the grid
    // this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.hp = 200;
    this.attack = false;
    this.cost = 100
    this.frame = 0;
    this.minFrame = 0;
    this.maxFrame = 11;
    this.spriteWidth = 522;
    this.spriteHeight = 422;

    this.img = new Image();
    this.img.src = 'images/defender1.png';
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
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height); //file, first4 source, last4 destination
  }

}

// export default Defender;
module.exports = Defender;