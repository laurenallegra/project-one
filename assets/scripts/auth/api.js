'use strict';

const app = require('../app.js');

// create game - POST
// get game - GET
// update game - PATCH

// ajax request to the api to let a new user sign up
const signUp = (data) => {
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

// ajax request to let a user sign in
const signIn = (data) => {
    return $.ajax({
      url:app.host + '/sign-in',
      method: 'POST',
      data: data,
    });
};
// ajax request to let a signed-in user change his/her password
const changePassword = (data) => {
    return $.ajax({
      url: app.host + '/change-password/' + app.user.id,
      method: 'PATCH',
      headers: {
      Authorization: 'Token token=' + app.user.token,
      },
      data: data,
    });
};

// ajax request to let a signed-in user sign out
const signOut = () => {
    return $.ajax({
      url: app.host + '/sign-out/' + app.user.id,
      method: 'DELETE',
      headers: {
      Authorization: 'Token token=' + app.user.token,
      },
    });
};

//ajax request to create a new game attached to the current user
const newGame = (data) => {
  return $.ajax({
    url: app.api + 'games',
    method: "POST",
    headers: {
    Authorization: 'Token token=' + app.user.token,
  },
  data,
  });
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame
};
