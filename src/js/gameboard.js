import {Ship} from './ship.js';

export default class Gameboard {
  constructor() {
    this.board = [];
    this.init();
  }
  init() {
    for (let i = 0; i < 10; i++) {
      this.board.push([]);
      for (let j = 0; j < 10; j++) {
        this.board[i].push({
          hasShip: false,
          isShot: false
        })
      }
    }
    this.placeShipsRandomly();
  }
  placeShip(ship, x, y, isVertical) {
    if (!this.isPlacementPossible(ship, x, y, isVertical)) return false;

    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y].hasShip = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i].hasShip = ship;
      }
    }
    return true;
  }
  placeShipsRandomly() {
    const ships = [];
    const carrier = new Ship('Carrier', 5);
    const destroyer = new Ship('Destroyer', 3);
    const battleship = new Ship('Battleship', 4);
    const submarine = new Ship('Submarine', 2);
    const patrolBoat = new Ship('Patrol Boat', 1);
    ships.push(carrier, destroyer, battleship, submarine, patrolBoat);
    let successfulPlacements = 0;
    while (successfulPlacements < 5) {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let isVertical = Math.floor(Math.random() * 2) === 1;
      if (this.placeShip(ships[successfulPlacements], x, y, isVertical)) {
        successfulPlacements++;
      }
    }
  }
  isPlacementPossible(ship, x, y, isVertical) {
    //Check if necessary spots are in gameboard and available
    if (isVertical) {
      for (let i = 0; i < ship.length; i++) {
        if (x + i >= this.board.length) return false;
        for (let j = -1; j < 2; j++) {
          for (let n = -1; n < 2; n++) {
            const newX = x + i + j;
            const newY = y + n;
            if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
              if (this.board[newX][newY].hasShip) return false;
            }
          }
        }
      }  
    } else {
      for (let i = 0; i < ship.length; i++) {
        if (y + i >= this.board.length) return false;
        for (let j = -1; j < 2; j++) {
          for (let n = -1; n < 2; n++) {
            const newX = x + j;
            const newY = y + i + n;
            if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
              if (this.board[newX][newY].hasShip) return false;
            }
          }
        }
      }
    }
    return true;
  }
  receiveAttack(x, y) {
    this.board[x][y].isShot = true;
    if (this.board[x][y].hasShip == true) {
      this.board[x][y].hasShip.hit();
      if (this.board[x][y].hasShip.sunk == true) {
        this.isGameOver();
      }
    }
  }
  isGameOver() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j].hasShip && this.board[i][j].hasShip.isSunk == false) return false;
      }
    }
    return true;
  }
}

export {Gameboard};