import Board from "./scripts/board";
import GameView from "./scripts/game_view";

window.Board = Board;
window.GameView = GameView;

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 900;
  canvas.height = 600;

  let gv = new GameView(ctx);
  gv.start()

});