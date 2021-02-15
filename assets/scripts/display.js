'use strict'

const whileScriptLoading = function () {
  $('#welcome-section').hide()
  $('#sign-up-section').hide()
  $('#sign-in-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#old-game-section').hide()
  $('#open-games-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const welcomePageDisplay = function () {
  $('#welcome-section').show()
  $('#sign-up-section').hide()
  $('#sign-in-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#old-game-section').hide()
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
  $('#old-game-section').hide()
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
  $('#old-game-section').hide()
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
  $('#old-game-section').hide()
  $('#open-games-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const gamePage = function () {
  makeButtonActive('Play')
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').hide()
  $('#game-play-section').hide()
  $('#game-section').show()
  $('#old-game-section').hide()
  $('#open-games-section').hide()
  $('#account-section').hide()
  $('#game-result-section').hide()
}

const oldGamePage = function () {
  makeButtonActive('Play')
  $('#welcome-section').hide()
  $('#sign-in-section').hide()
  $('#sign-up-section').hide()
  $('#nav-section').show()
  $('#game-play-section').hide()
  $('#game-section').hide()
  $('#old-game-section').show()
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
  $('#old-game-section').hide()
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
  $('#old-game-section').hide()
  $('#open-games-section').hide()
  $('#account-section').show()
  $('#game-result-section').hide()
}

// Make the button with 'buttonText' active so that it stays highlighted once clicked
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
  whileScriptLoading,
  welcomePageDisplay,
  signInPage,
  signUpPage,
  gamePlayPage,
  gamePage,
  oldGamePage,
  openGamesPage,
  accountPage
})
