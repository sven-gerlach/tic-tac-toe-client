const config = require('./config')

// todo: add auto sign-in feature
const signUp = function (data) {
  console.log('call signUp: success')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log('call signIn: success')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

Object.assign(module.exports, {
  signUp,
  signIn
})
