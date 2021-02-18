'use strict'
const display = require('./display')
const events = require('./events')
const toggleFullScreen = require('./full-screen').toggleFullScreen

// todo: this does not work as a flash of the raw HTML appears during script loading; a nice holding page would be nice
display.welcomePageDisplay()

// todo: make the SPA app full-screen on mobile devices - neither of the two methods below work on iphone
// allow going into fullscreen upon dbl clicking
document.addEventListener('dblclick', () => {
  toggleFullScreen()
}, false)

// window.addEventListener('load', function () {
//   // Set a timeout...
//   setTimeout(function () {
//     // Hide the address bar!
//     window.scrollTo(0, 1)
//   }, 0)
// })

$(() => {
  // Welcome page
  $('#sign-in-button').on('click', display.signInPage)
  $('#sign-up-button').on('click', display.signUpPage)

  // On sign-in page
  $('.return-to-welcome-page').on('click', display.welcomePageDisplay)
  $('#sign-in-form').on('submit', events.onSignIn)

  // On sign-up page
  $('#sign-up-form').on('submit', events.onSignUp)

  // Main menu page with nav bar
  $('#game-play-button').on('click', display.gamePlayPage)
  $('#setup-new-game-button').on('click', display.setupNewGamePage)
  $('#start-game-button').on('click', events.onStartGame)
  $('#start-old-game-button').on('click', events.onStartOldGame)
  $('#open-games-button').on('click', events.onOpenGames)
  $('#account-button').on('click', display.accountPage)

  // On new game setup page
  $('#symbol').on('click', events.onToggleButtons)
  $('#turn').on('click', events.onToggleButtons)
  $('#opponent').on('click', events.onToggleButtons)
  $('#aiDifficulty').on('click', events.onToggleButtons)
  $('#hide-ai-difficulty-section').on('click', () => {
    $('#ai-difficulty-section').hide()
  })
  $('#show-ai-difficulty-section').on('click', () => {
    $('#ai-difficulty-section').show()
  })

  // On account page
  $('#change-password-form').on('submit', events.onChangePassword)

  // Sign-out button
  $('#sign-out-button').on('click', events.onSignOut)

  // On game-result page
  $('#play-new-game').on('click', display.setupNewGamePage)
  $('#choose-old-game').on('click', events.onStartOldGame)
  $('#stop-playing').on('click', display.gamePlayPage)
})
