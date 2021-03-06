'use strict';

const app = require('../app');

const success = (data) => {
  // console.log(data);
};

const failure = () => {
  // console.error(error);
};

const newGameSuccess = (data) => {
  app.game = data.game;
  // console.log(app.game);
  $('.container [data-index]').each(function (i, cell) {
    $(cell).empty();
  });
  $('#game-board').show();
  $('#game-status').html('Good Luck!');
};

const updateGameSuccess = (data) => {
  // console.log(data);
};

const indexGameSuccess = (data) => {
  // console.log(data);
  $('#user-stats').html('You have played ' + data.games.length + ' games!');
};

module.exports = {
  failure,
  success,
  newGameSuccess,
  updateGameSuccess,
  indexGameSuccess
};
