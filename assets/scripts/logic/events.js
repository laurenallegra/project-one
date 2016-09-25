'use strict';

const getFormFields = require('../../../lib/get-form-fields');

// `requires` below
const api = require('./api');
const ui = require('./ui');

let board = ['','','','','','','','',''];

let player = 'X';

const onNewGame = function (event) {
  event.preventDefault();
  api.newGame()
    .done(ui.newGameSuccess)
    .fail(ui.failure);
  board = ['','','','','','','','',''];
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

// let gameOver = false;
// let turn = 0;

// ALL 3 `GAME WIN` LOGIC BELOW
// looks for horizontal win
const horizontalWin = (cells, id) => {
  if ([0, 1, 2].indexOf(id) > -1) {
    return cells[0] === cells[1] && cells[1] === cells[2];
  } else if ([3, 4, 5].indexOf(id) > -1) {
    return cells[3] === cells[4] && cells[4] === cells[5];
  } else if ([6, 7, 8].indexOf(id) > -1) {
    return cells[6] === cells[7] && cells[7] === cells[8];
  }
};

// looks for vertical win
const verticalWin = (cells, id) => {
  if ([0, 3, 6].indexOf(id) > -1) {
    return cells[0] === cells[3] && cells[3] === cells[6];
  } else if ([1, 4, 7].indexOf(id) > -1) {
    return cells[1] === cells[4] && cells[4] === cells[7];
  } else if ([2, 5, 8].indexOf(id) > -1) {
    return cells[2] === cells[5] && cells[5] === cells[8];
  }
};

// looks for diagonal win
const diagonalWin = (cells, id) => {
  let win = false;
  if ([0, 4, 8].indexOf(id) > -1) {
    win = cells[0] === cells[4] && cells[4] === cells[8];
  }
  if ([2, 4, 6].indexOf(id) > -1) {
    if ((cells[2] === cells[4]) && (cells[4] === cells[6])) {
      win = true;
    }
  }
  return win;
};

const setGameStatus = function (messageHTML) {
  $('#game-status').html(messageHTML);
};

const checkWin = function (cell) {
  let id = $(cell).data('index');
  if (horizontalWin(board, id)) {
    return true;
  } else if (verticalWin(board, id)) {
    return true;
  } else if ([0, 2, 4, 6, 8].indexOf(id) > -1) {
    if (diagonalWin(board, id)) {
      return true;
    }
  } else {
    return false;
  }
};

const isGameOver = function (cell) {
  if (checkWin(cell)) {
    setGameStatus('Player ' + player + ' has won!');
    return true;
    // let over = true;
  }
  return false;
};

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
  if ($(cell).html() === '') {
    return true;
  } else {
    return false;
  }
};

const updateUserStats = function () {
  let wins = 5;
  let losses = 10;
  let ties = 20;
  $('[data-count-type="win"]').html(wins);
  $('[data-count-type="loss"]').html(losses);
  $('[data-count-type="tie"]').html(ties);
};

const onCellClick = function (event) {
  let value = player;
  if (isValidMove(event.target)) {
    placeMarker(event.target);
    updateBoard(event.target);
    console.log('board is ', board);
    let cell = $(event.target).data('index');
    let over = isGameOver(event.target);
    if (over /* isGameOver */) {
      updateUserStats();
      // let over = true;
    }
    api.updateGame(cell, value/*, over */)
      .done(ui.updateGameSuccess)
      .fail(ui.updateGameFailure);
    changePlayer();
  } else {
    // TODO - display an error if invalid move?
  }
};

const addHandlers = () => {
  $('#index-games').on('submit', onIndexGames);
  $('#new-game').on('submit', onNewGame);
  $('#show-game').on('submit', onShowGame);

  $('.cell').on('click', onCellClick);
};

module.exports = {
  addHandlers,
};
