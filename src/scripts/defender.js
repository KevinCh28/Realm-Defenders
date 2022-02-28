import Projectile from "./projectile";

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
  }

  draw(ctx) {
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

export default Defender;