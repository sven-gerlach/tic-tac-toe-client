const ui = require('./ui')
const api = require('./api')
const nextAiMove = require('./aiMove').nextAiMove

const nextHumanMove = function (game) {
  if (game.turn === 'Second') {
    game.setNextPlayer()
  }
  ui.displayNextPlayer(game.player)
  $('#game-board').on('click', (event) => {
    if (game.isValidMove(event.target)) {
      const selectedCell = $(event.target).data('game-board-index')
      let apiDataFeed
      game.updateGameBoard(selectedCell, game.player)
      if (game.isWon() || game.isDraw()) {
        // reset game before api update
        game.resetGameBoard()
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
          .then(console.log)
          .catch(console.error)
        game.isWon() ? ui.declareWinner(game.player) : ui.declareDraw()
      } else {
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
          .then(console.log)
          .catch(console.error)
        game.setNextPlayer()
        ui.displayNextPlayer(game.player)
        if (game.opponent === 'Computer') {
          nextAiMove(game)
        }
      }
    } else {
      ui.displayInvalidMove(game.player)
    }
  })
}

Object.assign(module.exports, {
  nextHumanMove
})
