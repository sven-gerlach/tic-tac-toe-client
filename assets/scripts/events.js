'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store').store
const display = require('./display')
const gameModule = require('./game')
const gameLoop = require('./game-loop').gameLoop
const GameStats = require('./game-stats').GameStats

const onSignIn = function (event) {
  event.preventDefault()
  console.log('call onSignIn')
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(data => {
      store.user = data.user
      ui.signInSuccess()
    })
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('call onSignUp')
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(data => {
      store.user = data.user
      ui.signUpSuccess()
    })
    .catch(ui.signUpFailure)
}

const onSignOut = function () {
  console.log('call onSignOut')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('call onChangePassword')
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// make ajax request and deal with returned promise by either instantiating gameBoard or displaying an error message to user
const onStartGame = function () {
  console.log('call onStartGame')
  display.gamePage()
  api.startGame()
    .then(response => {
      store.game = response.game
      ui.startGameSuccess()
      const { cells, over, _id, owner, createdAt, updatedAt } = store.game
      const game = new gameModule.Game(cells, over, _id, owner, createdAt, updatedAt)
      gameLoop(game)
    })
    .catch(ui.startGameFailure)
}

// todo: instead of storing it the data can also be passed on through the promise object
// displays the game stats page, invokes API call to collect all played games
const onGameStats = function () {
  display.gameStatsPage()
  api.getGames()
    .then(response => {
      store.games = response.games
      const gameStats = new GameStats(store.games)
      ui.displayGameStats(gameStats)
    })
    .catch(console.error)
}

const onExitGame = function () {
  display.gamePlayPage()
  ui.resetBoard()
}

Object.assign(module.exports, {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onStartGame,
  onExitGame,
  onGameStats
})
