'use strict'

let apiUrl
const apiUrls = {
  production: 'https://lshtt05434.execute-api.us-east-1.amazonaws.com/prod',
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
