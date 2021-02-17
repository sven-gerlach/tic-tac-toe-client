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
const collectNewGameSettings = require('./game-settings').collectNewGameSettings

const onSignIn = function (event) {
  event.preventDefault()
  console.log('call onSignIn')
  const formData = getFormFields(event.target)
  // todo: show a spinner for all api calls
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

// toggle the radio buttons on the new game setup page
const onToggleButtons = function (event) {
  if (!$(event.target).hasClass('active')) {
    $(event.currentTarget).children().each(function () {
      if (this === event.target) {
        $(this).addClass('active')
      } else {
        $(this).removeClass('active')
      }
    })
  }
}

// make ajax request and deal with returned promise by either instantiating gameBoard or displaying an error message to user
const onStartGame = function () {
  console.log('call onStartGame')
  api.startGame()
    .then(response => {
      ui.startGameSuccess()
      display.gamePage()
      const {symbol, turn, opponent, aiDifficulty} = collectNewGameSettings()
      store.game = response.game
      const { cells, over, _id, owner, createdAt, updatedAt } = store.game
      const game = new gameModule.Game(cells, over, _id, owner, createdAt, updatedAt, symbol, turn, opponent, aiDifficulty)
      console.log(game)
      gameLoop(game)
    })
    .catch(ui.startGameFailure)
}

// todo: generic: make alert windows not go away - so only option is to push the button
// todo: show an alert if there are no more old games to continue
// select an old game and finish it
const onStartOldGame = function () {
  console.log('call onStartOldGame')
  // update old games for most recent developments
  api.getGames()
    .then(response => {
      store.games = response.games
      display.oldGamePage()
      console.log(store.games.filter(game => game.over === false).length)
      if (store.games.filter(game => game.over === false).length) {
        display.showCarousel()
        // construct html elements that then replace the old carousel items and indicators
        const unfinishedGames = oldGames.getUnfinishedGames()
        const htmlCarouselItems = oldGames.makeHtmlCarouselItems(unfinishedGames)
        const htmlCarouselIndicators = oldGames.makeHtmlCarouselIndicators(unfinishedGames)
        $('#carouselOldGamesIndicators > ol').html(htmlCarouselIndicators)
        $('#carouselOldGamesIndicators .carousel-inner').html(htmlCarouselItems).on('click', event => {
          const gameId = $(event.target).data('game-id')
          const { cells, over, _id, owner, createdAt, updatedAt } = store.games.filter(game => game._id === gameId)[0]
          // hard-code generic game-settings for unfinished games due to lacking the ability to store additional data on server
          const game = new gameModule.Game(cells, over, _id, owner, createdAt, updatedAt, 'X', 'First', 'Human')
          display.gamePage()
          gameLoop(game)
        })
      } else {
        display.hideCarousel()
      }
    })
    .catch(console.error)
}

// displays the game stats page, invokes API call to collect all played games
const onOpenGames = function () {
  api.getGames()
    .then(response => {
      display.openGamesPage()
      store.games = response.games
      const gameStats = new GameStats(store.games)
      ui.displayGameStats(gameStats)
    })
    .catch(console.error)
}

const onExitGame = function (game) {
  api.getGames()
    .then(response => {
      display.gamePlayPage()
      store.games = response.games
      const gameStats = new GameStats(store.games)
      $('#open-games-button span').text(gameStats.openGames)
      game.resetGameBoard()
    })
    .catch(console.error)
}

Object.assign(module.exports, {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onToggleButtons,
  onStartGame,
  onExitGame,
  onOpenGames,
  onStartOldGame
})
