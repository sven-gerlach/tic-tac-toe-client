const config = require('./config')
const store = require('./store')

// todo: add auto sign-in feature
const signUp = function (data) {
  console.log('call signUp')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  console.log('call signIn')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function () {
  console.log('call signOut')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

Object.assign(module.exports, {
  signUp,
  signIn,
  signOut
})
