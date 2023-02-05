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
  const spinner = ui.launchSpinner($('main')[0])
  const formData = getFormFields(event.target)
  // todo: show a spinner for all api calls
  api.signIn(formData)
    .then(data => {
      if (!data.accessToken) {
        throw new Error('The key \'accessToken\' is missing')
      }
      store.user = { user: data }
      ui.signInSuccess()
      spinner.stop()
    })
    .catch(() => {
      spinner.stop()
      ui.signInFailure()
    })
}

function onExpeditedSignUp (event) {
  event.preventDefault()
  // create a random email address and insert
  const email = _randomStringGenerator(10) + '@random.com'
  // create a random password
  const password = _randomStringGenerator(5)
  // insert email into sign-up form field
  $('#sign-up-form input:nth-child(1)').val(email)
  // insert password into sign-up form fields
  $('#sign-up-form input:nth-child(2)').val(password)
  $('#sign-up-form input:nth-child(3)').val(password)
  $('#sign-up-form button[type=submit]').click()

  function _randomStringGenerator (length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const spinner = ui.launchSpinner($('main')[0])
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(data => {
      store.user = data
      ui.signUpSuccess()
      api.signIn(formData)
        .then(data => {
          spinner.stop()
          store.user.token = data.accessToken
          ui.signInSuccess()
        })
        .catch(() => {
          spinner.stop()
          ui.signInFailure()
        })
    })
    .catch(() => {
      spinner.stop()
      ui.signUpFailure()
    })
}

const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch()
}

const onChangePassword = function (event) {
  event.preventDefault()
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
  api.startGame()
    .then(response => {
      display.gamePage()
      const {symbol, turn, opponent, aiDifficulty} = collectNewGameSettings()
      store.game = response.game
      const { cells, over, _id, owner, createdAt, updatedAt } = store.game
      const game = new gameModule.Game(cells, over, _id, owner, createdAt, updatedAt, symbol, turn, opponent, aiDifficulty)
      gameLoop(game)
    })
    .catch()
}

// todo: generic: make alert windows not go away - so only option is to push the button
// select an old game and finish it
const onStartOldGame = function () {
  ui.resetBoard()
  // update old games for most recent developments
  api.getGames()
    .then(response => {
      store.games = response.games
      display.oldGamePage()
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
    .catch()
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
    .catch()
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
    .catch()
}

Object.assign(module.exports, {
  onSignIn,
  onExpeditedSignUp,
  onSignUp,
  onSignOut,
  onChangePassword,
  onToggleButtons,
  onStartGame,
  onExitGame,
  onOpenGames,
  onStartOldGame
})
