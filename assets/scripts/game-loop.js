'use strict'
const ui = require('./ui')
const api = require('./api')

// todo: continuing an unfinished game and completing it does not result in the game being updated to finished (but the moves are stored correctly)
const gameLoop = function (game) {
  console.log('call gameLoop')
  // if game.cells contains any X or O, prepare the game board for continuing an old game
  if (game.cells.filter(symbol => symbol === 'X' || symbol === 'O').length > 0) {
    game.setFirstMover()
    ui.populateGameBoard(game.cells)
  }
  ui.displayNextPlayer(game.player)
  $('#game-board').on('click', (event) => {
    if (game.isValidMove(event.target)) {
      const selectedCell = $(event.target).data('game-board-index')
      let apiDataFeed
      game.updateGameBoard(selectedCell, game.player)
      if (game.isWon()) {
        game.resetGameBoard()
        apiDataFeed = game.getApiDataFeed(selectedCell)
        console.log(apiDataFeed)
        api.updateGame(game, apiDataFeed)
          .then(console.log)
          .catch(console.error)
        ui.declareWinner(game.player)
      } else if (game.isDraw()) {
        game.resetGameBoard()
        apiDataFeed = game.getApiDataFeed(selectedCell)
        console.log(apiDataFeed)
        api.updateGame(game, apiDataFeed)
          .then(console.log)
          .catch(console.error)
        ui.declareDraw()
      } else {
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
          .then(console.log)
          .catch(console.error)
        game.setNextPlayer()
        ui.displayNextPlayer(game.player)
      }
    } else {
      ui.displayInvalidMove(game.player)
    }
  })
}

Object.assign(module.exports, {
  gameLoop
})
