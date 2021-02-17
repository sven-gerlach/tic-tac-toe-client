const ui = require('./ui')
const api = require('./api')
const humanMove = require('./humanMove')

const nextAiMove = function (game) {
  // collect the index of all empty cells in an array
  let selectedCell
  if (game.aiDifficulty === 'Easy') {
    selectedCell = getEasyAiNextMove(game)
  } else if (game.aiDifficulty === 'Hard') {
    selectedCell = getHardAiNextMove(game)
  } else {
    selectedCell = getInsaneAiNextMove(game)
  }
  let apiDataFeed
  console.log('AI selected cell: ' + selectedCell)
  game.updateGameBoard(selectedCell, game.player)
  if (game.isWon() || game.isDraw()) {
    // reset game before api update
    game.resetGameBoard()
    apiDataFeed = game.getApiDataFeed(selectedCell)
    api.updateGame(game, apiDataFeed)
      .then(() => {
        game.isWon() ? ui.declareWinner(game.player) : ui.declareDraw()
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

const getHardAiNextMove = function (game) {
  return 8
}

const getInsaneAiNextMove = function (game) {
  const gameBoard = game.cells
  // todo: make max depth flexible to build in fallibility
  // const maxDepth = n
  const depth = 0
  const isMaximizing = true
  const player = game.player

  const minimax = function (gameBoard, depth, isMaximizing, player) {
    const gameObj = {
      cells: gameBoard,
      player: player,
      isWon: game.isWon,
      isDraw: game.isDraw
    }

    const nextPlayer = function () {
      return (player === 'X') ? 'O' : 'X'
    }

    if (gameObj.isWon()) {
      return (isMaximizing) ? 20 - depth : -20 + depth
    }

    if (gameObj.isDraw()) {
      return (isMaximizing) ? depth : depth
    }

    if (isMaximizing) {
      let maxUtility = -Infinity
      let bestMove
      gameBoard.forEach((cell, index) => {
        if (cell === '') {
          gameBoard[index] = player
          const utility = minimax(gameBoard, depth + 1, false, nextPlayer())
          gameBoard[index] = ''
          if (utility > maxUtility) {
            maxUtility = utility
            if (depth === 0) {
              bestMove = index
            }
          }
        }
      })
      if (depth === 0) {
        return bestMove
      } else {
        return maxUtility
      }
    }

    if (!isMaximizing) {
      let minUtility = +Infinity
      gameBoard.forEach((cell, index) => {
        if (cell === '') {
          gameBoard[index] = player
          const utility = minimax(gameBoard, depth + 1, true, nextPlayer())
          gameBoard[index] = ''
          if (utility < minUtility) {
            minUtility = utility
          }
        }
      })
      return minUtility
    }
  }
  return minimax(gameBoard, depth, isMaximizing, player)
}

Object.assign(module.exports, {
  nextAiMove
})
