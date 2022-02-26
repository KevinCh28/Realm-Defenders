import Cell from "./cell.js"

class Board {
  constructor() {
    this.grid = this.makeGrid();

    this.animate();
  }

  makeGrid() {
    let grid = [];

    for (let y = 100; y < 600; y += 100) {  //col, y start at 100 to skip top bar
      for (let x = 0; x < 900; x += 100) {  //row
        grid.push(new Cell(x, y))
      }
    }

    return grid;
  }

  handleGrid() {
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i].draw();
    }
  }

  animate() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 600;

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 900, 100);   //start top left corner
    this.handleGrid();

  }
}

export default Board;