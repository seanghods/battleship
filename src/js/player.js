import {Gameboard} from './gameboard.js';

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }
  attack(x, y, gameboard) {
    if (playerGameboard.board[x][y].isShot) return false;
    gameboard.receiveAttack(x, y);
  }
  randomAttack(gameboard) {
    let x;
    let y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (gameboard.board[x][y].isShot);
    gameboard.receiveAttack(x, y);
  }
}

export {Player}