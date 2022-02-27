class Defender {
  constructor(x, y) { //x and y comes from click on the grid
    this.x = x;
    this.y = y;
    this.width = 100;
    this.length = 100;
    this.hp = 100;    //start with 1 defender at 100hp, might need to make Defender class a parent
    this.attack = false;
  }

  draw() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

export default Defender;