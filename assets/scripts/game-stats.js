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
    return Math.round((this.startedGames() / this.startedGames()) * 100)
  }
  this.openGamesPercent = () => {
    return Math.round((this.openGames() / this.startedGames()) * 100)
  }
  this.finishedGamesPercent = () => {
    return Math.round((this.finishedGames() / this.startedGames()) * 100)
  }
}

Object.assign(module.exports, {
  GameStats
})
