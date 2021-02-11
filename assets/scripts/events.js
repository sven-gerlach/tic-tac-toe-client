'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')
const display = require('./display')

const onSignIn = function (event) {
  event.preventDefault()
  console.log('call onSignIn')
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(data => {
      store.user = data.user
      ui.signInSuccess()
    })
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('call onSignUp')
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(data => {
      store.user = data.user
      ui.signUpSuccess()
    })
    .catch(ui.signUpFailure)
}

const onSignOut = function () {
  console.log('call onSignOut')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('call onChangePassword')
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onStartGame = function () {
  display.gamePage()
  // invoke ajax call to initialize game object on the server and retrieve game object
  // create gameBoard object
}

Object.assign(module.exports, {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onStartGame
})
