import {Player} from './player.js';

const player1 = new Player('Player1');
const player2 = new Player('Player2');
let player1Turn = true;
let isGameOver = false;

function DOMLoad() {
  UI.setupBoards();
  UI.setupClick();
}

class UI {
  static setupBoards() {
    const playerBoards = document.querySelectorAll('.gameboard');
    for (let n = 0; n < 2; n++){   // setup each board
      for (let i = 0; i < 10; i++) { // setup each row
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < 10; j++) { // setup each cell
          const cell = document. createElement('div');
          cell.classList.add('cell');
          cell.setAttribute('data-x', i);
          cell.setAttribute('data-y', j);
          if (n == 0) {
            if (player1.board.board[i][j].hasShip) {
              cell.classList.add('withShip');
            }
          }
          row.appendChild(cell);
        }
        playerBoards[n].appendChild(row);
      }
    }
  }

  static setupClick() {
    const cells = document.querySelectorAll('.cell');
    for (const each of cells) {
      each.addEventListener('click',(e) => {
        this.clickAttack(e);
      })
    }
  }
  
  static clickAttack(e) {
    if (!isGameOver) {
      const attackText = document.querySelector('.shot-msg.r');
      if (e.target.classList.contains('shot')) return; // Don't allow clicks on shot spaces
      if (e.target.parentNode.parentNode.classList.contains('right')) { // Only allow clicks on the right (opponent) gameboard
        const y = e.target.dataset.y;
        const x = e.target.dataset.x;
        // if (player1Turn) {
          let attack = player1.attack(x, y, player2.board);
          if (attack == 'miss') {
            e.target.classList.add('miss');
            attackText.innerHTML = 'Miss';
            attackText.style.color = 'white';
            this.player2RandomAttack(e);
          }
          if (attack == 'hit') {
            e.target.classList.add('hit');
            attackText.innerHTML = 'Hit';
            attackText.style.color = 'red';
            player2.board.board[x][y].hasShip.domTargets.push(e.target);
          } else if (attack == 'sunk') {
            e.target.classList.add('hit');
            player2.board.board[x][y].hasShip.domTargets.push(e.target);
            player2.board.board[x][y].hasShip.domTargets.forEach(e => {
              e.classList.add('sunk');
            })
            attackText.innerHTML = 'Sunk';
            attackText.style.color = 'darkred';
            attackText
            this.showSunkMessage(player1, player2.board.board[x][y].hasShip.name)
            if (player2.board.isGameOver()) {
              return this.showGameOver(player2)
            }
          }
        // } else {
        //   player2.attack(x, y, player1.board);
        // } 
        // player1Turn = player1Turn ? false : true;
      }
    }
  }

  static player2RandomAttack(e) {
    const attackText = document.querySelector('.shot-msg.l');
    const returnMessages = player2.randomAttack(player1.board);
    let x = returnMessages[0];
    let y = returnMessages[1];
    let attack = returnMessages[2];
    const cell = document.querySelector(`.left .cell[data-x="${x}"][data-y="${y}"]`);
    cell.classList.add('shot');
    if (attack == 'miss') {
      cell.classList.add('miss');
      attackText.innerHTML = 'Miss';
      attackText.style.color = 'white';
    } else if (attack == 'hit') {
      cell.classList.add('hit');
      attackText.innerHTML = 'Hit';
      attackText.style.color = 'red';
      player1.board.board[x][y].hasShip.domTargets.push(cell);
    } else if (attack == 'sunk') {
      cell.classList.add('hit');
      player1.board.board[x][y].hasShip.domTargets.push(cell);
      player1.board.board[x][y].hasShip.domTargets.forEach(e => {
        e.classList.add('sunk');
      })
      attackText.innerHTML = 'Sunk';
      attackText.style.color = 'darkred';
      this.showSunkMessage(player2, player1.board.board[x][y].hasShip.name)
      if (player1.board.isGameOver()) {
        return this.showGameOver(player1)
      };
    }
    if (attack == 'hit' || attack == 'sunk') this.player2RandomAttack();
  }

  static showSunkMessage(player, shipName) {
    const message = document.querySelector('.text > h3')
    message.style.color = 'darkred';
    if (player == player1) {
      message.innerHTML = `You have sunk your opponent's ${shipName}!`
    } else {
      message.innerHTML = `The opponent has sunk your ${shipName}!`
    }
  }

  static showGameOver(player) {
    isGameOver = true;
    const modal = document.querySelector('.gameover-modal');
    modal.classList.add('active');
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => this.gameOver());
    this.showGameOverMessage(player);
  }

  static showGameOverMessage(player) {
    const message = document.querySelector('.text > h3')
    message.style.color = 'darkred';
    if (player == player1) {
      message.innerHTML = `The opponent has sunk all of your ships! You have lost!`;
    } else {
      message.innerHTML = `You have won battleship! All your opponents ships are sunk!`;
    }
  }

  static gameOver() {
    const modal = document.querySelector('.gameover-modal');
    modal.classList.remove('active');
    player1.board.reset();
    player2.board.reset();
    this.domReset();
    isGameOver = false;
  }

  static domReset() {
    const boards = document.querySelectorAll('.gameboard');
    boards.forEach(board => {
      board.innerHTML = '';
    })
    const message = document.querySelector('.text > h3')
    message.style.color = 'black';
    message.innerHTML = 'Welcome to Battleship';
    this.setupBoards();
    this.setupClick();
  }

}

export {DOMLoad, UI}