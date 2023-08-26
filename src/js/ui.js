import {Player} from './player.js';

const player1 = new Player('Player1');
const player2 = new Player('Player2');
let player1Turn = true;

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
          } else {
            if (player2.board.board[i][j].hasShip) {
              cell.classList.add('withShipEnemy');
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
    if (e.target.classList.contains('shot')) return;
        if (e.target.parentNode.parentNode.classList.contains('right')) {
          const y = e.target.dataset.y;
          const x = e.target.dataset.x;
          e.target.classList.add('shot');
          if (player1Turn) {
            let attack = player1.attack(x, y, player2.board);
            if (attack == 'hit') {
              player2.board.board[x][y].hasShip.domTargets.push(e.target);
            } else if (attack == 'sunk') {
              player2.board.board[x][y].hasShip.domTargets.push(e.target);
              player2.board.board[x][y].hasShip.domTargets.forEach(e => {
                e.classList.add('sunk');
              })
            }
            this.player2RandomAttack(e);
          } else {
            player2.attack(x, y, player1.board);
          } 
        }
        // player1Turn = player1Turn ? false : true;
  }

  static player2RandomAttack(e) {
    const returnMessages = player2.randomAttack(player1.board);
    let x = returnMessages[0];
    let y = returnMessages[1];
    let attack = returnMessages[2];
    const cell = document.querySelector(`.left .cell[data-x="${x}"][data-y="${y}"]`);
    cell.classList.add('shot');
    if (attack == 'hit') {
      player1.board.board[x][y].hasShip.domTargets.push(cell);
    } else if (attack == 'sunk') {
      player1.board.board[x][y].hasShip.domTargets.push(cell);
      player1.board.board[x][y].hasShip.domTargets.forEach(e => {
        e.classList.add('sunk');
      })
    }
  }

  static domReset() {
    const boards = document.querySelectorAll('.gameboard');
    boards.forEach(board => {
      board.innerHTML = '';
    })
    this.setupBoards();
  }

}

export {DOMLoad}