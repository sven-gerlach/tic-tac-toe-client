const ui = require('./ui')
const api = require('./api')
const nextAiMove = require('./aiMove').nextAiMove

const firstHumanMove = function (game) {
  ui.displayNextPlayer(game.player)
  nextHumanMove(game)
}

const nextHumanMove = function (game) {
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
          .then()
          .catch()
        setTimeout(() => {
          game.isWon() ? ui.declareWinner(game.player) : ui.declareDraw()
        }, 1000)
      } else {
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
        game.setNextPlayer()
        ui.displayNextPlayer(game.player)
        if (game.opponent === 'Computer') {
          $('#game-board').off()
          nextAiMove(game)
        }
      }
    } else {
      ui.displayInvalidMove(game.player)
    }
  })
}

Object.assign(module.exports, {
  firstHumanMove,
  nextHumanMove
})
