'use strict'
const config = require('./config')
const store = require('./store').store

/**
 * The API expects the body to have the following signature:
 * data = { credentials: { email, password, password_confirmation }}
 * @param data
 * @return {*}
 */
const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/user/create',
    data: data.credentials
  })
}

/**
 * The API expects the body to have the following signature:
 * data = { credentials: { email, password }}
 * @param data
 * @return {*}
 */
const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/auth/login',
    data: data.credentials
  })
}

const signOut = function () {
  console.log(store)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/auth/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/**
 * Data object has the following signature:
 * {
 *   passwords: {
 *     new: string,
 *     old: string
 *   }
 * }
 * @param data
 * @return {*}
 */
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/auth/change-password',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const startGame = function () {
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
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + game.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

// todo: this function is called multiple times (unnecessarily so) when exiting a game
const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

Object.assign(module.exports, {
  signUp,
  signIn,
  signOut,
  changePassword,
  startGame,
  updateGame,
  getGames
})
