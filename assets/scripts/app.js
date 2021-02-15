'use strict'
const display = require('./display')
const events = require('./events')

$(() => {
  // todo: on page load, other sections are displayed for 300ms. Maybe use CSS to set display of other sections to none?
  // todo: a nice holding page would be good to have that drops off the screen once the main content it loaded.

  // Welcome page
  display.welcomePageDisplay()
  $('#sign-in-button').on('click', display.signInPage)
  $('#sign-up-button').on('click', display.signUpPage)

  // On sign-in page
  $('.return-to-welcome-page').on('click', display.welcomePageDisplay)
  $('#sign-in-form').on('submit', events.onSignIn)

  // On sign-up page
  $('#sign-up-form').on('submit', events.onSignUp)

  // Main menu page with nav bar
  $('#game-play-button').on('click', display.gamePlayPage)
  $('#start-game-button').on('click', events.onStartGame)
  $('#start-old-game-button').on('click', events.onStartOldGame)
  $('#open-games-button').on('click', events.onOpenGames)
  $('#account-button').on('click', display.accountPage)

  // On account page
  $('#change-password-form').on('submit', events.onChangePassword)

  // Sign-out button
  $('#sign-out-button').on('click', events.onSignOut)

  // On Game page
  $('#exit-game').on('click', events.onExitGame) // todo: add saving the game state functionality with appropriate ajax request

  // On game-result page
  $('#play-new-game').on('click', events.onStartGame)
  $('#choose-old-game').on('click', events.onStartOldGame)
  $('#stop-playing').on('click', display.gamePlayPage)
})
