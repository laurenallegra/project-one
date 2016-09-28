'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  // localStorage.sessionUser = JSON.stringify(data.user);
  app.user = data.user;
  console.log('app.user is ',app.user);
  $('.new-game-button').click();
  $('#game-board').show();
  $('#new-game').show();
  $('#index-games').show();
  $('#change-password').show();
  $('#sign-out').show();
  $('#sign-up').hide();
  $('#sign-in').hide();
};

const changePasswordSuccess = () => {
  console.log('Password successfully changed');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signOutSuccess = () => {
  delete localStorage.sessionUser;
  app.user = null;
  console.log("Successfully signed out.");
  $('#sign-up').show();
  $('#sign-in').show();
  $('#game-board').hide();
  $('#new-game').hide();
  $('#index-games').hide();
  $('#change-password').hide();
  $('#sign-out').hide();
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
