'use strict';

const app = require('../app.js');

const newGame = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

// CODE BELOW HAD WEIRDO LINTER ERRORS NO ONE COULD DEBUG - REPLACED WITH
// CODE BLOCK BELOW THIS ONE
// const showGame = () => {
//   let token = app.user.token;
//   let gameId = data.game.id;
//   return $.ajax({
//     url: app.host + '/games/', + data.game.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }
//   });
// };

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
// const showGame = (data) => {
//   let token = app.user.token;
//   let gameId = data.game.id;
//   return $.ajax({
//     url: app.host + '/games/', + gameId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + token,
//     },
//   });
// };

module.exports = {
  newGame,
  showGame,
  indexGames,
};
