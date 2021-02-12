'use strict'

const welcomePageDisplay = function () {
  $('#welcome-section').show()
  $('#sign-up-section').hide()
  $('#sign-in-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#open-games-section').hide()
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
  $('#open-games-section').hide()
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
  $('#open-games-section').hide()
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
  $('#open-games-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const gamePage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').show()
  $('#open-games-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const openGamesPage = function () {
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').show()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#open-games-section').show()
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
  $('#open-games-section').hide()
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
  $('#open-games-section').hide()
  $('#account-section').hide()
  $('#game-result-section').show()
}

Object.assign(module.exports, {
  welcomePageDisplay,
  signInPage,
  signUpPage,
  gamePlayPage,
  gamePage,
  openGamesPage,
  accountPage,
  gameResultPage
})
