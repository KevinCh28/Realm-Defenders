import GameView from "./game_view";

class Enemy {
  constructor(y) {
    this.x = 900;   //start at the right side
    this.y = y * 100;
    this.width = 100;
    this.height = 100;
    this.hp = 100;
    this.attack = false
    this.speed = 0.1;
  }

  move() {
    this.x -= this.speed;
  }

  draw() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'gray';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

export default Enemy