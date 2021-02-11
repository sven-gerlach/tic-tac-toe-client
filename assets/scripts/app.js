'use strict'
const display = require('./display')
const events = require('./events')

$(() => {
  display.welcomePageDisplay()
  $('#sign-in-button').on('click', display.signInPage)
  $('#sign-up-button').on('click', display.signUpPage)
  $('.return-to-welcome-page').on('click', display.welcomePageDisplay)
  $('#sign-up-form').on('submit', events.onSignUp)
})
