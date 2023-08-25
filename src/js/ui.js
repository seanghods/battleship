import {Player} from './player.js';

const player1 = new Player('Player1');
const player2 = new Player('Player2');

function DOMLoad() {
  setupBoards();
  setupClick();
}

function setupBoards() {
  const playerBoards = document.querySelectorAll('.gameboard');
  for (let n = 0; n < 2; n++){   // setup each board
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.classList.add('row');     // setup each row
      row.setAttribute('data-x', i);
      for (let j = 0; j < 10; j++) {
        const cell = document. createElement('div');
        cell.classList.add('cell'); // setup each cell
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

function setupClick() {
  const cells = document.querySelectorAll('.cell');
  for (const each of cells) {
    each.addEventListener('click',(e) => {
      const y = e.target.dataset.y;
      const x = e.target.parentNode.dataset.x;
    })
  }
}

export {DOMLoad};