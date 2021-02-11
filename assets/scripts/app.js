'use strict'
const display = require('./display')
const events = require('./events')

$(() => {
  display.welcomePageDisplay()
  $('#sign-in-button').on('click', display.signInPage)
  $('#sign-up-button').on('click', display.signUpPage)
  $('#game-play-button').on('click', display.gamePlayPage)
  $('#start-game-button').on('click', display.gamePage)
  $('#game-stats-button').on('click', display.gameStatsPage)
  $('#account-button').on('click', display.accountPage)
  $('.return-to-welcome-page').on('click', display.welcomePageDisplay)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-out-button').on('click', events.onSignOut)
})
