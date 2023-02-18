'use strict'

let apiUrl
const apiUrls = {
  production: 'https://ti-sq80.onrender.com',
  development: 'http://localhost:3000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

Object.assign(module.exports, {
  apiUrl
})
