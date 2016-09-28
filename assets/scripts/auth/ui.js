'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  // localStorage.sessionUser = JSON.stringify(data.user);
  app.user = data.user;
  console.log('app.user is ',app.user);
  $('.new-game-button').click();
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
};

module.exports = {
  failure,
  success,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
