import {Gameboard} from './gameboard.js';

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
    this.turn = false;
  }
  attack(x, y, gameboard) {
    if (gameboard.board[x][y].isShot) return false;
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
    return [x, y];
  }
}

export {Player}