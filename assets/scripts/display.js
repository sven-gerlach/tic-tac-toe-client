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
  // highlights the button as active if page is viewed
  makeButtonActive('Intro')
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
  makeButtonActive('Games')
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
  makeButtonActive('Account')
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

function makeButtonActive (buttonText) {
  $('#nav-section button').each(function () {
    if ($(this).text().indexOf(buttonText) !== -1) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })
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
