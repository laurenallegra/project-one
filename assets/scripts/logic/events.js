'use strict';

const getFormFields = require('../../../lib/get-form-fields');

// `requires` below
const api = require('./api');
const ui = require('./ui');

const onNewGame = function (event) {
event.preventDefault();
let data = getFormFields(event.target);
api.newGame(data)
  .some(ui.newGameSuccess)
  .fail(ui.failure);
};


const onIndexGames = function(event) {
  event.preventDefault();
  api.indexGames()
  .done(ui.success)
  .fail(ui.failure);
};

const onShowGame = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showGame(data)
  .done(ui.success)
  .fail(ui.failure);
};




const board = ['','','','','','','','',''];

let player = 'X';
// let gameOver = false;
// let turn = 0;



// // ALL 3 `GAME WIN` LOGIC BELOW
// // looks for horizontal win
// const horizontalWin = (cells, id) => {
//  if ([0, 1, 2].indexOf(id) > -1) {
//    return ((cells[0] === cells[1]) && (cells[1] === cells[2]));
//  } else if ([3, 4, 5]).indexOf(id) > -1 {
//    return ((cells[3] === cells[4]) && (cells[4] === cells[5]));
//  } else if ([6, 7, 8]).indexOf(id) > -1 {
//    return ((cells[6] === cells[7]) && (cells[7] === cells[8]));
//  }
// };
//
// // looks for vertical win
// const verticalWin = (cells, id) => {
//  if ([0, 3, 6].indexOf(id) > -1) {
//    return ((cells[0] === cells[3]) && (cells[3] === cells[6]));
//  } else if ([1, 4, 7]).indexOf(id) > -1 {
//    return ((cells[1] === cells[4]) && (cells[4] === cells[7]));
//  } else if ([2, 5, 8]).indexOf(id) > -1 {
//    return ((cells[2] === cells[5]) && (cells[5] === cells[8]));
//  }
// };
//
// // looks for diagonal win
// const diagonalWin = (cells, id) => {
//  let win = false;
//  if ([0, 4, 8].indexOf(id) > -1) {
//    win = (cells[0] === cells[4]) && (cells[4] === cells[8]));
//  }
//  if ([2, 4, 6].indexOf(id) > -1) {
//    win = (cells[2] === cells[4]) && (cells[4] === cells[6])) {
//      win = true;
//    }
//  }
//
// return win;
//  }
// };

const updateBoard = function (cell) {
  let index = $(cell).data('index');
  board[index] = player;
};

const changePlayer = function () {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
};

const placeMarker = function (cell) {
  $(cell).html(player);
};

const isValidMove = function (cell) {
  if ($(cell).html() === '' /*   && !isGameOver() */) {
    return true;
  } else {
    return false;
  }
};

const onCellClick = function (event) {
  if (isValidMove(event.target)) {
    placeMarker(event.target);
    updateBoard(event.target);
    console.log('board is ', board);
    changePlayer();
  }
};

const addHandlers = () => {
  $('#index-games').on('submit', onIndexGames);
  $('#new-game').on('submit', onNewGame);
  $('#show-game').on('submit', onShowGame);
  // $('#join-game').on('submit', onJoinGame);

  $('.cell').on('click', onCellClick);
};

module.exports = {
  addHandlers,
};
