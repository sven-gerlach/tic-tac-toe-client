'use strict'
const config = require('./config')
const store = require('./store').store

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

const changePassword = function (data) {
  console.log('call changePassword')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const startGame = function () {
  console.log('call startGame')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateGame = function (game, data) {
  console.log('call updateGame')
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + game.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

Object.assign(module.exports, {
  signUp,
  signIn,
  signOut,
  changePassword,
  startGame,
  updateGame
})
