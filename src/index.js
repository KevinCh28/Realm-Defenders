import Board from "./scripts/board";
import GameView from "./scripts/game_view";

window.Board = Board;
window.GameView = GameView;

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext('2d');
  
  let gv = new GameView(ctx);
  gv.start()

});