'use strict';

// use require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('.././events');

// event handlers and stuff

$('#sign-in').on('click', function() {
$('#signInModal').modal('show');
});

$('#sign-in-button').on('click', function() {
$('#signInModal').modal('hide');
$('#sign-out').show();
$('#change-password').show();
$('#sign-up').hide();
$('#sign-in').hide();
});

const logicEvents = require('./logic/events.js');

$(() => {
  logicEvents.addHandlers();
});

// $(document).ready(function() {
// $('#sign-out').hide();
// $('#change-password').hide();
// $('#signInModal').modal('show');
// });
