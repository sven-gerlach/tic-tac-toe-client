'use strict'

let apiUrl
const apiUrls = {
  production: 'https://tictactoeapi-env.eba-hpiuzwz2.us-east-1.elasticbeanstalk.com',
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
