const knight = new Image('./stlyes/knight.png');

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
    this.maxFrame = 7;
    this.spriteWidth = 63.5;
    this.spriteHeight = 67;
  }

  move() {
    if (this.frame < this.maxFrame) {
      this.frame += 1;
    } else {
      this.frame = this.minFrame
    }
  }

  draw(ctx) {
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(knight, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height); //file, first4 source, last4 destination
  }

}

export default Defender;