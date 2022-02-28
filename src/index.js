import Board from "./scripts/board";
import GameView from "./scripts/game_view";

window.Board = Board;
window.GameView = GameView;

document.addEventListener('DOMContentLoaded', () => {
  
  let gv = new GameView();
  gv.start()

});