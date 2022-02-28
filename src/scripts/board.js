import Cell from "./cell.js"

class Board {
  constructor() {
    this.grid = this.makeGrid();

    // this.handleGrid()
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

  // handleDefender() {
  //   for (let i = 0; i < this.defenders.length; i++) {
  //     this.defenders[i].draw()
  //   }
  // }

}

export default Board;