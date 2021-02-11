const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignIn = function (event) {
  event.preventDefault()
  console.log('call onSignIn: success')
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
  console.log('call onSignUp: success')
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(data => {
      store.user = data.user
      ui.signUpSuccess()
      console.log(store.user)
    })
    .catch(ui.signUpFailure)
}

Object.assign(module.exports, {
  onSignUp,
  onSignIn
})
