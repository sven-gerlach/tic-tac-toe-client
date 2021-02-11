const display = require('./display')

const signUpSuccess = function (data) {
  console.log('call signUpSuccess: success')
  display.signInPage()
}

const signUpFailure = function () {
  console.log('call signUpFailure: success')
  $('#sign-up-section .user-notification').text('Something went wrong. Please try again.').addClass('failure')
  setTimeout(() => {
    $('#sign-up-section .user-notification').text('').removeClass('.failure')
  }, 5 * 1000)
}

const signInSuccess = function () {
  console.log('call signInSuccess: success')
  display.gamePlayPage()
}

const signInFailure = function () {
  console.log('call signInFailure: success')
  $('#sign-in-section .user-notification').text('Something went wrong. Please try again.').addClass('failure')
  setTimeout(() => {
    $('#sign-in-section .user-notification').text('').removeClass('.failure')
  }, 5 * 1000)
}

Object.assign(module.exports, {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
})
