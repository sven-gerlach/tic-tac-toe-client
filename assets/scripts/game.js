'use strict'
const ui = require('./ui')

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
}

const gameLoop = function (game) {
  console.log('call gameLoop')
  // todo: update API
  $('#game-board').on('click', (event) => {
    ui.displayNextPlayer(game.player)
    if (game.isValidMove(event.target)) {
      game.updateGameBoard($(event.target).data('game-board-index'), game.player)
      if (game.isWon()) {
        game.over = true
        $('#game-board').off()
        ui.resetBoard()
        ui.declareWinner(game.player)
      } else if (game.isDraw()) {
        game.over = true
        $('#game-board').off()
        ui.resetBoard()
        ui.declareDraw()
      } else {
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
