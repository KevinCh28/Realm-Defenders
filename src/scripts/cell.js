class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
  }

  draw() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'blue';
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

export default Cell;