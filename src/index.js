import GameView from "./scripts/game_view";
import StartScreen from "./scripts/start_screen";


// window.GameView = GameView;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 900;
  canvas.height = 600;

  let gv = new StartScreen(ctx);
  gv.begin()

  // let gv = new GameView(ctx);
  // gv.start()

});