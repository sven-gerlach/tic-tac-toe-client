'use strict'
const display = require('./display')
const GameStats = require('./game-stats').GameStats
const store = require('./store').store
const api = require('./api')

const signUpSuccess = function (data) {
  console.log('call signUpSuccess')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  console.log('call signUpFailure')
  $('#sign-up-section .user-notification').text('Something went wrong. Please try again.').addClass('alert-danger')
  setTimeout(() => {
    $('#sign-up-section .user-notification').text('').removeClass('alert-danger')
  }, 5 * 1000)
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function () {
  console.log('call signInSuccess')
  $('#sign-in-form').trigger('reset')
  display.gamePlayPage()

  // update badge on open games button for # open games
  api.getGames()
    .then(response => {
      store.games = response.games
      const gameStats = new GameStats(store.games)
      $('#open-games-button span').text(gameStats.openGames)
    })
    .catch(console.error)
}

const signInFailure = function () {
  console.log('call signInFailure')
  $('#sign-in-section .user-notification').text('Something went wrong. Please try again.').addClass('alert-danger')
  setTimeout(() => {
    $('#sign-in-section .user-notification').text('').removeClass('alert-danger')
  }, 5 * 1000)
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('call signOutSuccess')
  $('form').trigger('reset')
  display.welcomePageDisplay()
}

const signOutFailure = function () {
  console.log('call signOutFailure')
}

// todo: if a new password is entered but not submitted, a new user using the same computer, can see this password
const changePasswordSuccess = function () {
  console.log('call changePasswordSuccess')
  $('#account-section .user-notification').text('Success! Your password has been changed.').addClass('alert-success')
  setTimeout(() => {
    $('#account-section .user-notification').text('').removeClass('alert-success')
  }, 5 * 1000)
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  console.log('call changePasswordFailure')
  $('#account-section .user-notification').text('Oh no, something went wrong! Your password has not been changed.').addClass('alert-danger')
  setTimeout(() => {
    $('#account-section .user-notification').text('').removeClass('alert-danger')
  }, 5 * 1000)
}

const startGameSuccess = function () {
  console.log('call startGameSuccess')
}

const startGameFailure = function () {
  console.log('call startGameFailure')
}

const displayNextPlayer = function (nextPlayer) {
  $('#game-section .user-notification').text(`Player ${nextPlayer}, it's your turn.`)
}

const displayInvalidMove = function (nextPlayer) {
  $('#game-section .user-notification').text('This field is not available!').removeClass('alert-info').addClass('alert-warning')
  setTimeout(() => {
    displayNextPlayer(nextPlayer)
    $('#game-section .user-notification').removeClass('alert-warning').addClass('alert-info')
  }, 5 * 1000)
}

const drawSymbol = function (symbol, index) {
  $(`#game-board div[data-game-board-index=${index}]`).text(symbol).animate({
    'font-size': 40
  }, 800)
}

const declareWinner = function (player) {
  $('#game-result-modal .user-notification').text(`...player ${player} has won the game`)
  $('#game-result-modal').modal()
}

const declareDraw = function () {
  $('#game-result-modal .user-notification').text('...it\'s a draw!')
  $('#game-result-modal').modal()
}

const resetBoard = function () {
  $('#game-board div').text('').css({ 'font-size': 0 })
  api.getGames()
    .then(response => {
      store.games = response.games
      const gameStats = new GameStats(store.games)
      $('#open-games-button span').text(gameStats.openGames)
    })
    .catch(console.error)
}

const displayGameStats = function (gameStats) {
  $('#started-absolute').text(gameStats.startedGames)
  $('#open-absolute').text(gameStats.openGames)
  $('#finished-absolute').text(gameStats.finishedGames)
  $('#started-percent').text(gameStats.startedGamesPercent)
  $('#open-percent').text(gameStats.openGamesPercent)
  $('#finished-percent').text(gameStats.finishedGamesPercent)
  $('#open-games-button span').text(gameStats.openGames)
}

const populateGameBoard = function (cells) {
  cells.forEach((cell, index) => {
    if (cell === 'X' || cell === 'O') {
      drawSymbol(cell, index)
    }
  })
}

Object.assign(module.exports, {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  startGameSuccess,
  startGameFailure,
  displayNextPlayer,
  displayInvalidMove,
  drawSymbol,
  declareWinner,
  resetBoard,
  declareDraw,
  displayGameStats,
  populateGameBoard
})
