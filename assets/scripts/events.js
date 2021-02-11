const onSignIn = function () {
  console.log('call onSignIn success')
}

const onSignUp = function (event) {
  event.preventDefault()
  console.log('call onSignUp success')
}

Object.assign(module.exports, {
  onSignIn,
  onSignUp
})
