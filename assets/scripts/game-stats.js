'use strict'

const GameStats = function (games) {
  this.games = games
  this.startedGames = () => {
    return this.games.length
  }
  this.openGames = () => {
    return this.games.filter(game => game.over === false).length
  }
  this.finishedGames = () => {
    return this.startedGames() - this.openGames()
  }
  this.startedGamesPercent = () => {
    return this.isTypeOfNaN(Math.round((this.startedGames() / this.startedGames()) * 100))
  }
  this.openGamesPercent = () => {
    return this.isTypeOfNaN(Math.round((this.openGames() / this.startedGames()) * 100))
  }
  this.finishedGamesPercent = () => {
    return this.isTypeOfNaN(Math.round((this.finishedGames() / this.startedGames()) * 100))
  }

  this.isTypeOfNaN = function (number) {
    return (Number.isNaN(number)) ? 'n/m' : number
  }
}

Object.assign(module.exports, {
  GameStats
})
