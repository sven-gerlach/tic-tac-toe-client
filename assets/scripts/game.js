'use strict'
const ui = require('./ui')
const api = require('./api')

const Game = function (cells, over, _id, owner, createdAt, updatedAt) {
  this.cells = cells
  this.over = over
  this.id = _id
  this.owner = owner
  this.createdAt = createdAt
  this.updatedAt = updatedAt
  this.player = 'X'
  // returns true if the attempted move is valid and false otherwise
  this.isValidMove = function (clickedCell) {
    const clickedCellIndex = $(clickedCell).data('game-board-index')
    return this.cells[clickedCellIndex] === ''
  }
  this.isWon = function () {
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
    return winConditions.some(winCondition => {
      return winCondition.every(index => {
        return this.cells[index] === this.player
      })
    })
  }
  this.isDraw = function () {
    if (!this.isWon() && this.cells.filter(i => i === 'X' || i === 'O').length === 9) {
      return true
    }
  }
  this.updateGameBoard = function (index, playerSymbol) {
    this.cells[index] = playerSymbol
    ui.drawSymbol(this.player, index)
  }
  this.setNextPlayer = function () {
    (this.player === 'X') ? this.player = 'O' : this.player = 'X'
  }
  this.resetGameBoard = function () {
    this.over = true
    $('#game-board').off()
    ui.resetBoard()
  }
  this.getApiDataFeed = function (cellIndex) {
    return {
      game: {
        cell: {
          index: cellIndex,
          value: this.player
        },
        over: this.over
      }
    }
  }
}

const gameLoop = function (game) {
  console.log('call gameLoop')
  $('#game-board').on('click', (event) => {
    ui.displayNextPlayer(game.player)
    if (game.isValidMove(event.target)) {
      const selectedCell = $(event.target).data('game-board-index')
      let apiDataFeed
      game.updateGameBoard(selectedCell, game.player)
      if (game.isWon()) {
        game.resetGameBoard()
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
        ui.declareWinner(game.player)
      } else if (game.isDraw()) {
        game.resetGameBoard()
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
        ui.declareDraw()
      } else {
        apiDataFeed = game.getApiDataFeed(selectedCell)
        api.updateGame(game, apiDataFeed)
        game.setNextPlayer()
      }
    } else {
      ui.displayInvalidMove(game.player)
    }
  })
}

Object.assign(module.exports, {
  Game,
  gameLoop
})
