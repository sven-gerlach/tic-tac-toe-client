'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store').store
const display = require('./display')
const gameModule = require('./game')
const gameLoop = require('./game-loop').gameLoop
const GameStats = require('./game-stats').GameStats
const oldGames = require('./old-games')

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
      api.signIn(formData)
        .then(data => {
          store.user = data.user
          ui.signInSuccess()
        })
        .catch(ui.signInFailure)
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

// select an old game and finish it
const onStartOldGame = function () {
  console.log('call onStartOldGame')
  // todo: build out this functionality
  display.oldGamePage()

  // construct html elements that then replace the old carousel items and indicators
  const unfinishedGames = oldGames.getUnfinishedGames()
  const htmlCarouselItems = oldGames.makeHtmlCarouselItems(unfinishedGames)
  const htmlCarouselIndicators = oldGames.makeHtmlCarouselIndicators(unfinishedGames)
  $('#carouselOldGamesIndicators > ol').html(htmlCarouselIndicators)
  $('#carouselOldGamesIndicators .carousel-inner').html(htmlCarouselItems).on('click', event => {
    const gameId = $(event.target).data('game-id')
    const { cells, over, _id, owner, createdAt, updatedAt } = store.games.filter(game => game._id === gameId)[0]
    const game = new gameModule.Game(cells, over, _id, owner, createdAt, updatedAt)
    display.gamePage()
    gameLoop(game)
  })
  // attach event listener to .old-game-board and if clicked, search for that game in games and instantiate new gameModule.Game(game)
  // start gameLoop(game)
}

// todo: instead of storing it the data can also be passed on through the promise object
// displays the game stats page, invokes API call to collect all played games
const onOpenGames = function () {
  display.openGamesPage()
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
  // todo: it doesn't feel very dry or inexpensive having to instantiate a new object every time the open games counter needs updating
  api.getGames()
    .then(response => {
      store.games = response.games
      const gameStats = new GameStats(store.games)
      $('#open-games-button span').text(gameStats.openGames)
    })
  ui.resetBoard()
}

Object.assign(module.exports, {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onStartGame,
  onExitGame,
  onOpenGames,
  onStartOldGame
})
