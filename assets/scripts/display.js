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

Object.assign(module.exports, {
  welcomePageDisplay,
  signInPage,
  signUpPage,
  gamePlayPage
})
