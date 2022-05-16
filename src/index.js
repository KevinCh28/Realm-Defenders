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
    ctx.fillStyle = 'white';
    ctx.font = '20px arial';
    ctx.fillText('Unfriendly monsters has invaded the peaceful realm', 230, 200);
    ctx.fillText('of Mekraine and have made their way to your village.', 230, 230);
    ctx.fillText('Pick up your weapons and protect your home!', 250, 260);

    ctx.fillStyle = 'red';
    ctx.fillRect(350, 425, 202, 30);

    ctx.fillStyle = 'yellow'
    ctx.font = '25px arial';
    ctx.fillText('CLICK TO START', 350, 450);
  }

  canvas.addEventListener('click', function() {
    let gv = new GameView(ctx);
    gv.start();
    gv.startEventListener();
  }, {once:true});

});