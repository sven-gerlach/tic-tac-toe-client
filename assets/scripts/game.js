'use strict'

const Game = function (cells, over, _id, owner, createdAt, updatedAt) {
  this.gameBoard = cells
  this.gameState = over
  this.gameId = _id
  this.userId = owner
  this.dateCreated = createdAt
  this.dateUpdated = updatedAt
  this.nextPlayer = 'X'
  this.isValidMove = function () {
    // todo: write code to evaluate validity of proposed move, return true or false
  }
  this.isGameOver = function () {
    // todo: input is the gameBoard and output should be either true or false
  }
  this.updateGameBoard = function () {
    // todo: if isValidMove then a) amend data-values of square, b) evaluate board, c) send ajax update request, d) inform player of who is next or state of game
  }
  this.getWinner = function () {
    // todo: if isGameOver is true then getWinner should return the winner of the game
  }
}

const gameLoop = function (game) {
  console.log('call gameLoop')
  console.log(game)
}

Object.assign(module.exports, {
  Game,
  gameLoop
})
