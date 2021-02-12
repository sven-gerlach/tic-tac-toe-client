'use strict'
const ui = require('./ui')
const api = require('./api')

const gameLoop = function (game) {
  console.log('call gameLoop')
  ui.displayNextPlayer(game.player)
  $('#game-board').on('click', (event) => {
    if (game.isValidMove(event.target)) {
      const selectedCell = $(event.target).data('game-board-index')
      let apiDataFeed
      game.updateGameBoard(selectedCell, game.player)
      if (game.isWon()) {
        game.resetGameBoard()
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
          .then(console.log)
          .catch(console.error)
        ui.declareWinner(game.player)
      } else if (game.isDraw()) {
        game.resetGameBoard()
        apiDataFeed = game.getApiDataFeed(selectedCell)
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
