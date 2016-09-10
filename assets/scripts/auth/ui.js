'use strict';

const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user;
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
