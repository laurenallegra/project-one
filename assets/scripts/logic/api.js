'use strict';

const app = require('../app.js');

const newGame = () => {
  let token = app.getUser().token;
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
     Authorization: 'Token token=' + app.getUser().token,
   },
   method: 'GET',
 });
};

const indexGames = () => {
  let token = app.getUser().token;
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
//   let token = app.getUser().token;
//   let gameId = data.game.id;
//   return $.ajax({
//     url: app.host + '/games/', + gameId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + token,
//     },
//   });
// };

// const updateGame = () => {
//   return $.ajax({
//     url: 'http://tic-tac-toe.wdibos.com/games/',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token='
//     }
//   });
// };

module.exports = {
  newGame,
  showGame,
  indexGames,
};
