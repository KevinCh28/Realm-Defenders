import GameView from "./scripts/game_view";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 900;
  canvas.height = 600;

  var startImage = new Image();
  startImage.src = 'images/background2.png';
  startImage.alt = 'alt';
  startImage.onload = function() {
    ctx.drawImage(startImage, 0, 0, 900, 600);
    ctx.fillStyle = 'black';
    ctx.font = '20px arial';
    ctx.fillText('Monsters have invaded the peaceful realm', 270, 125);
    ctx.fillText('of Mekraine and have made their way to your', 255, 150);
    ctx.fillText('village. Pick up your weapons and protect your home!', 220, 175);
    ctx.fillText('Place defenders on the screen, by clicking on the screen.', 100, 250);
    ctx.fillText('Keep an eye on your resources, each defender consumes 100 resource.', 100, 300);
    ctx.fillText('Defeating monsters will acquire 50 resource.', 100, 350);

    ctx.fillStyle = 'yellow'
    ctx.font = '25px arial';
    ctx.fillText('CLICK TO START', 350, 450);

    ctx.fillStyle = 'black'
    ctx.font = '15px arial';
    ctx.fillText('*no relations to real life event/location', 640, 585)
  }

  canvas.addEventListener('click', function() {
    let gv = new GameView(ctx);
    gv.start();
  }, {once:true});

});