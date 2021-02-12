'use strict'

const Game = function (cells, over, _id, owner, createdAt, updatedAt) {
  this.gameBoard = cells
  this.isGameOver = over
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
  // while (!isGameOver)
  // announce who's turn it is next on ui module
  // wait for player to make a move
  // evaluate validity of move
  // if valid move, check if game is over and a) update API accordingly, b) update GameBoard
  // if not valid, tell player that their move wasn't a valid one
  // if valid move and game is over: a) getWinner, b) announce winner on ui module
}

Object.assign(module.exports, {
  Game,
  gameLoop
})
