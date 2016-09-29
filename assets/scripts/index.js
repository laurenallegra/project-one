'use strict';

// use require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

const authEvents = require('./auth/events.js');
const logicEvents = require('./logic/events.js');

$(() => {
  logicEvents.addHandlers();
  authEvents.addHandlers();
  $('#game-board').hide();
  $('#new-game').hide();
  $('#index-games').hide();
  $('#change-password').hide();
  $('#sign-out').hide();
});
