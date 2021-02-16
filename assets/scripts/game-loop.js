'use strict'
const ui = require('./ui')
const events = require('./events')
const firstHumanMove = require('./humanMove').firstHumanMove
const nextAiMove = require('./aiMove').nextAiMove

const gameLoop = function (game) {
  console.log('call gameLoop')
  // if game.cells contains any X or O, prepare the game board for continuing an old game
  $('#exit-game').on('click', () => {
    events.onExitGame(game)
  })
  if (game.cells.filter(symbol => symbol === 'X' || symbol === 'O').length > 0) {
    game.setFirstMover()
    ui.populateGameBoard(game.cells)
  }
  if (game.opponent === 'Human') {
    firstHumanMove(game)
  } else {
    if (game.turn === 'First') {
      firstHumanMove(game)
    } else {
      nextAiMove(game)
    }
  }
}

Object.assign(module.exports, {
  gameLoop
})
