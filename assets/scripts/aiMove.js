const ui = require('./ui')
const api = require('./api')
const humanMove = require('./humanMove')

const nextAiMove = function (game) {
  // collect the index of all empty cells in an array
  let selectedCell
  if (game.aiDifficulty === 'Easy') {
    selectedCell = getEasyAiNextMove(game)
  } else if (game.aiDifficulty === 'Hard') {
    selectedCell = getInsaneAiNextMove(game, 2)
  } else {
    selectedCell = getInsaneAiNextMove(game, 8)
  }
  let apiDataFeed
  game.updateGameBoard(selectedCell, game.player)
  if (game.isWon() || game.isDraw()) {
    // reset game before api update
    game.resetGameBoard()
    apiDataFeed = game.getApiDataFeed(selectedCell)
    api.updateGame(game, apiDataFeed)
      .then(() => {
        setTimeout(() => {
          game.isWon() ? ui.declareWinner(game.player) : ui.declareDraw()
        }, 1000)
      })
      .catch(console.error)
  } else {
    apiDataFeed = game.getApiDataFeed(selectedCell)
    api.updateGame(game, apiDataFeed)
      .then(() => {
        game.setNextPlayer()
        ui.displayNextPlayer(game.player)
        humanMove.nextHumanMove(game)
      })
      .catch(console.error)
  }
}

const getEasyAiNextMove = function (game) {
  const indexOfUnoccupiedCells = []
  game.cells.forEach((cell, index) => {
    if (cell === '') {
      indexOfUnoccupiedCells.push(index)
    }
  })
  const randomNumber = Math.floor(Math.random() * Math.floor(indexOfUnoccupiedCells.length))
  return indexOfUnoccupiedCells[randomNumber]
}

const getInsaneAiNextMove = function (game, maxDepth) {
  const isWin = function (game, player) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // map win conditions onto game.cells and check if they are the same
    return winConditions.some(winCondition => {
      return winCondition.every(index => {
        return game.cells[index] === player
      })
    })
  }

  const isDraw = function (game) {
    return !isWin(game) && game.cells.filter(i => i === 'X' || i === 'O').length === 9
  }

  const nextPlayer = function (player) {
    return (player === 'X') ? 'O' : 'X'
  }

  const minimax = function (game, depth, isMaximizing, player) {
    if (isWin(game, nextPlayer(player))) {
      return (!isMaximizing) ? 20 - depth : -20 + depth
    }

    if (isDraw(game)) return depth

    if (depth > maxDepth) return 0

    if (isMaximizing) {
      let maxUtility = -Infinity
      let bestMove
      for (let index = 0; index < game.cells.length; index++) {
        if (game.cells[index] === '') {
          game.cells[index] = player
          const utility = minimax(game, depth + 1, false, nextPlayer(player))
          game.cells[index] = ''
          if (utility > maxUtility) {
            maxUtility = utility
            if (depth === 0) {
              bestMove = index
            }
          }
        }
      }
      if (depth === 0) {
        return bestMove
      } else {
        return maxUtility
      }
    }

    if (!isMaximizing) {
      let minUtility = +Infinity
      for (let index = 0; index < game.cells.length; index++) {
        if (game.cells[index] === '') {
          game.cells[index] = player
          const utility = minimax(game, depth + 1, true, nextPlayer(player))
          game.cells[index] = ''
          if (utility < minUtility) {
            minUtility = utility
          }
        }
      }
      return minUtility
    }
  }
  return minimax(game, 0, true, game.player)
}

Object.assign(module.exports, {
  nextAiMove
})
