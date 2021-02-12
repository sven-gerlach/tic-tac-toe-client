'use strict'

const welcomePageDisplay = function () {
  $('#welcome-section').show()
  $('#sign-up-section').hide()
  $('#sign-in-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#game-stats-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const signInPage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#game-stats-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const signUpPage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').show()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#game-stats-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const gamePlayPage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').show()
  $('#game-play-section').show()
  $('#game-section').hide()
  $('#game-stats-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const gamePage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').show() // todo: eventually need to replace nav with a return or stop game button
  $('#game-stats-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const gameStatsPage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').show()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#game-stats-section').show()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const accountPage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').show()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#game-stats-section').hide()
  $('#account-section').show()
  $('#game-result-section').hide()
}

const gameResultPage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#game-stats-section').hide()
  $('#account-section').hide()
  $('#game-result-section').show()
}

Object.assign(module.exports, {
  welcomePageDisplay,
  signInPage,
  signUpPage,
  gamePlayPage,
  gamePage,
  gameStatsPage,
  accountPage,
  gameResultPage
})
