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
  const player = game.player
  const maximizer = true
  const gameBoard = JSON.parse(JSON.stringify(game.cells))
  const depth = 0
  // todo: make max depth flexible to build in fallibility
  // const maxDepth = n

  // evaluates a board composition and returns that value
  const utilityFunc = function (result, depth) {
    if (depth % 2 === 0) {
      return (result === 'win') ? 20 - depth : 0 + depth
    } else {
      return (result === 'win') ? -20 + depth : 0 + depth
    }
  }

  const nextPlayer = function (player) {
    return (player === 'X') ? 'O' : 'X'
  }

  const minimax = function (gameBoard, depth, maximizer, player) {
    const duckTypeGameObj = {
      cells: gameBoard,
      player: player,
      isWon: game.isWon,
      isDraw: game.isDraw
    }
    console.log('depth: ' + depth)

    if (duckTypeGameObj.isWon()) {
      return utilityFunc('win', depth)
    } else if (duckTypeGameObj.isDraw()) {
      console.log(gameBoard, utilityFunc('win', depth))
      return utilityFunc('draw', depth)
    }

    if (maximizer) {
      let maxUtility = -Infinity
      let bestMove
      gameBoard.forEach((cell, index) => {
        if (cell === '') {
          gameBoard[index] = game.player
          const utility = minimax(gameBoard, depth + 1, false, nextPlayer(player))
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

    if (!maximizer) {
      let minUtility = +Infinity
      let bestMove
      gameBoard.forEach((cell, index) => {
        if (cell === '') {
          gameBoard[index] = game.player
          const utility = minimax(gameBoard, depth + 1, true, nextPlayer(player))
          if (utility < minUtility) {
            minUtility = utility
            if (depth === 0) {
              bestMove = index
            }
          }
        }
      })
      if (depth === 0) {
        return bestMove
      } else {
        return minUtility
      }
    }
  }
  return minimax(gameBoard, depth, maximizer, player)
}

Object.assign(module.exports, {
  nextAiMove
})
