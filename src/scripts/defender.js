import Projectile from "./projectile";

class Defender {
  constructor(x, y) { //x and y comes from click on the grid
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
    this.hp = 100;    //start with 1 defender at 100hp, might need to make Defender class a parent
    this.attack = false;
    this.projectile = new Projectile(this.x, this.y);
    this.cost = 100
  }

  draw() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

export default Defender;