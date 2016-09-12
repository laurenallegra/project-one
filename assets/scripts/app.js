'use strict';

const app = {
  host: 'http://tic-tac-toe.wdibos.com/',
  getUser: function () {
    if (localStorage.sessionUser) {
      return JSON.parse(localStorage.sessionUser);
    } else {
      return {};
    }
  }
};

module.exports = app;
