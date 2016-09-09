'use strict';

let gameBoardArray = ['','','','','','','','',''];

const app = require('./app');

const onPlaceX = function (event) {
  let id=this.id;
  event.preventDefault();
  if (app.player === 'x') {
    app.player = 'o';
    let cellclicked = event.target;
    $(cellclicked).html('O');

    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);

  } else if (app.player === 'o') {
    app.player = 'x';
    let cellclicked = event.target;
    $(cellclicked).html('X');

    gameBoardArray[id] = app.player;
    console.log(gameBoardArray);
  }
};

// OLD `requires` below
const game = require('PLACEHOLDER');
const ui = require('PLACEHOLDER');
const app = require('PLACEHOLDER');

// checks if move is possible
const isValidMove = (id) => {
 return (!game.currentGame.cells[id] && !game.currentGame.over);

};

// ALL 3 `GAME WIN` LOGIC BELOW
// looks for horizontal win
const horizontalWin = (cells, id) => {
 if ([0, 1, 2].indexOf(id) > -1) {
   return ((cells[0] === cells[1]) && (cells[1] === cells[2]));
 } else if ([3, 4, 5]).indexOf(id) > -1 {
   return ((cells[3] === cells[4]) && (cells[4] === cells[5]));
 } else if ([6, 7, 8]).indexOf(id) > -1 {
   return ((cells[6] === cells[7]) && (cells[7] === cells[8]));
 }
};

// looks for vertical win
const verticalWin = (cells, id) => {
 if ([0, 3, 6].indexOf(id) > -1) {
   return ((cells[0] === cells[3]) && (cells[3] === cells[6]));
 } else if ([1, 4, 7]).indexOf(id) > -1 {
   return ((cells[1] === cells[4]) && (cells[4] === cells[7]));
 } else if ([2, 5, 8]).indexOf(id) > -1 {
   return ((cells[2] === cells[5]) && (cells[5] === cells[8]));
 }
};

// looks for diagonal win
const diagonalWin = (cells, id) => {
 let win = false;
 if ([0, 4, 8].indexOf(id) > -1) {
   win = (cells[0] === cells[4]) && (cells[4] === cells[8]));
 }
 if ([2, 4, 6].indexOf(id) > -1) {
   win = (cells[2] === cells[4]) && (cells[4] === cells[6])) {
     win = true;
   }
 }

return win;
 }
};


// OLD CHANGE PLAYER CODE BELOW
// const changePlayer = () => {
//   if (app.player === 'x') {
//     app.player = 'o';
//   }
//   else if (app.player === 'o') {
//     app.player = 'x';
//   }
// };
const addHandlers = () => {
  $('.col-xs-4').on('click', onPlaceX);
};

module.exports = {
  addHandlers,
  onPlaceX,
};
