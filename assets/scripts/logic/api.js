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

const showGame = (data) => {
  let token = app.user.token;
  let gameId = data.game.id;
  return $.ajax({
    url: app.host + '/games/', + gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    },
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
