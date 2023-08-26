import {Gameboard} from './gameboard.js';

class Player {
  constructor(name) {
    this.name = name;
    this.board = new Gameboard();
  }
  attack(x, y, gameboard) {
    if (gameboard.board[x][y].isShot) return false;
    return gameboard.receiveAttack(x, y);
  }
  randomAttack(gameboard) {
    let x;
    let y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (gameboard.board[x][y].isShot);
    return [x, y, gameboard.receiveAttack(x, y)];
  }
}

export {Player}