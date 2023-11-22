'use strict'

let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-iu10.onrender.com',
  development: 'http://localhost:3000/dev'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

Object.assign(module.exports, {
  apiUrl
})
