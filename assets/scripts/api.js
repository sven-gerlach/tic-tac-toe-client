'use strict'
const config = require('./config')
const store = require('./store').store

/**
 * Makes a POST request to the API to create a user.
 *
 * @function
 * @param {Object} data - { credentials: { email, password, password_confirmation }}
 * @param {Object} data.credentials - The user credentials.
 * @returns {Object} - The jQuery AJAX object representing the API request.
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

/**
 * A game object contains the following properties: { cells, over, _id, owner, createdAt, updatedAt }
 * @return {*}
 */
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
