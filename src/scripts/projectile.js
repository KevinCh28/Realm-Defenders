class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.speed = 5;
    this.damage = 20;
  }

  move() {
    this.x += this.speed;
  }

  draw(ctx) {
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

export default Projectile;