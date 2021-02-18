'use strict'
const ui = require('./ui')

const Game = function (cells, over, _id, owner, createdAt, updatedAt, symbol, turn, opponent, aiDifficulty) {
  this.cells = cells
  this.over = over
  this.id = _id
  this.player = symbol
  this.owner = owner
  this.createdAt = createdAt
  this.updatedAt = updatedAt
  this.turn = turn
  this.opponent = opponent
  this.aiDifficulty = aiDifficulty

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
    // remove event listeners to avoid create n event listeners if n rounds are played
    $('#game-board').off()
    $('#carouselOldGamesIndicators .carousel-inner').off()
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
  this.setFirstMover = function () {
    (this._countPastMoves('X') - this._countPastMoves('O') > 0) ? this.player = 'O' : this.player = 'X'
  }
  this._countPastMoves = function (symbol) {
    return this.cells.filter((cell) => cell === symbol).length
  }
}

Object.assign(module.exports, {
  Game
})
