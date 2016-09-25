'use strict';

const app = require('../app.js');

const newGame = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const showGame = () => {
return $.ajax({
   url: 'http://tic-tac-toe.wdibos.com/games/',
   headers: {
     Authorization: 'Token token=' + app.user.token,
   },
   method: 'GET',
 });
};

const indexGames = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

// FIX CODE BELOW
// const indexGames = (data) => {
//   let token = app.user.token;
//   let gameId = app.game.id;
//   return $.ajax({
//     url: app.host + '/games/' + gameId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + token,
//     },
//   });
// };

const updateGame = (cell, player /*, over */) => {
  let token = app.user.token;
  let gameId = app.game.id;
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token
    },
    data: {
      "game": {
        "cell": {
          "index": cell,
          "value": player,
        },
        "over": false /* over */
      }
    }
  });
};

module.exports = {
  newGame,
  showGame,
  indexGames,
  updateGame
};
