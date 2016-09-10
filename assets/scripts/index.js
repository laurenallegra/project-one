'use strict';

// use require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

const authEvents = require('./auth/events.js');
const logicEvents = require('./logic/events.js');
// event handlers and stuff

// $('#sign-in').on('click', function() {
// $('#signInModal').modal('show');
// });
//
// $('#sign-in-button').on('click', function() {
// $('#signInModal').modal('hide');
// $('#sign-out').show();
// $('#change-password').show();
// $('#sign-up').hide();
// $('#sign-in').hide();
// });

$(() => {
  logicEvents.addHandlers();
  authEvents.addHandlers();
});

// $(document).ready(function() {
// $('#sign-out').hide();
// $('#change-password').hide();
// $('#signInModal').modal('show');
// });
