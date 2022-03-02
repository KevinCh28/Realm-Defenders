import GameView from "./game_view";

class StartScreen {
  constructor (ctx) {
    this.ctx = ctx;
    this.backGroundImg = new Image();
    this.backGroundImg.src = 'images/background1.png';
    this.backGroundImg.alt = 'alt';
  }

  begin() {
    const canvas = document.getElementById('game-canvas');
    let that = this;
    this.ctx.clearRect(0, 0, 900, 600);
    this.ctx.drawImage(this.backGroundImg, 0, 0, 900, 600);
    
    this.ctx.fillStyle = 'black';
    this.ctx.font = '20px arial';
    this.ctx.fillText('Monsters have invaded the peaceful realm', 270, 125);
    this.ctx.fillText('of Mekraine and have made their way to your', 255, 150);
    this.ctx.fillText('village. Pick up your weapons and protect your home!', 220, 175);
    this.ctx.fillText('Place defenders on the screen, by clicking on the screen.', 100, 250);
    this.ctx.fillText('Keep an eye on your resources, each defender consumes 100 resource.', 100, 300);
    this.ctx.fillText('Defeating monsters will acquire 50 resource.', 100, 350);

    this.ctx.fillStyle = 'yellow'
    this.ctx.font = '25px arial';
    this.ctx.fillText('CLICK TO START', 350, 450);

    this.ctx.fillStyle = 'black'
    this.ctx.font = '15px arial';
    this.ctx.fillText('*no relations to real life events/places', 640, 585)

    canvas.addEventListener('click', function() {

      //need to remove event listener
      // canvas.removeEventListener('click')

      let gv = new GameView(that.ctx);
      gv.start();
    }, {once:true})
  }


}

export default StartScreen;