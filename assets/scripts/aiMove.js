const ui = require('./ui')
const api = require('./api')
const humanMove = require('./humanMove')

const nextAiMove = function (game) {
  // collect the index of all empty cells in an array
  const indexOfUnoccupiedCells = []
  game.cells.forEach((cell, index) => {
    if (cell === '') {
      indexOfUnoccupiedCells.push(index)
    }
  })
  const randomNumber = Math.floor(Math.random() * Math.floor(indexOfUnoccupiedCells.length))
  const selectedCell = indexOfUnoccupiedCells[randomNumber]
  let apiDataFeed
  game.updateGameBoard(selectedCell, game.player)
  if (game.isWon() || game.isDraw()) {
    // reset game before api update
    game.resetGameBoard()
    apiDataFeed = game.getApiDataFeed(selectedCell)
    console.log('ai: ' + apiDataFeed)
    api.updateGame(game, apiDataFeed)
      .then(() => {
        game.isWon() ? ui.declareWinner(game.player) : ui.declareDraw()
      })
      .catch(console.error)
  } else {
    apiDataFeed = game.getApiDataFeed(selectedCell)
    console.log(apiDataFeed)
    api.updateGame(game, apiDataFeed)
      .then(() => {
        game.setNextPlayer()
        ui.displayNextPlayer(game.player)
        humanMove.nextHumanMove(game)
      })
      .catch(console.error)
  }
}

Object.assign(module.exports, {
  nextAiMove
})
