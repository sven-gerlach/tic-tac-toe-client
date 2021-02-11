'use strict'
const display = require('./display')

const signUpSuccess = function (data) {
  console.log('call signUpSuccess')
  display.signInPage()
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  console.log('call signUpFailure')
  $('#sign-up-section .user-notification').text('Something went wrong. Please try again.').addClass('failure')
  setTimeout(() => {
    $('#sign-up-section .user-notification').text('').removeClass('.failure')
  }, 5 * 1000)
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function () {
  console.log('call signInSuccess')
  $('#sign-in-form').trigger('reset')
  display.gamePlayPage()
}

const signInFailure = function () {
  console.log('call signInFailure')
  $('#sign-in-section .user-notification').text('Something went wrong. Please try again.').addClass('failure')
  setTimeout(() => {
    $('#sign-in-section .user-notification').text('').removeClass('.failure')
  }, 5 * 1000)
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = function () {
  console.log('call signOutSuccess')
  display.welcomePageDisplay()
}

const signOutFailure = function () {
  console.log('call signOutFailure')
}

const changePasswordSuccess = function () {
  console.log('call changePasswordSuccess')
  $('#account-section .user-notification').text('Success! Your password has been changed.').addClass('success')
  setTimeout(() => {
    $('#account-section .user-notification').text('').removeClass('success')
  }, 5 * 1000)
}

const changePasswordFailure = function () {
  console.log('call changePasswordFailure')
  $('#account-section .user-notification').text('Oh no, something went wrong! Your password has not been changed.').addClass('failure')
  setTimeout(() => {
    $('#account-section .user-notification').text('').removeClass('failure')
  }, 5 * 1000)
}

Object.assign(module.exports, {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
})
