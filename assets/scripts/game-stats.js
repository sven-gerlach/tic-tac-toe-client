'use strict'

const GameStats = function (games) {
  this.games = games
  this.startedGames = () => {
    return this.games.length
  }
  this.unfinishedGames = () => {
    return this.games.filter(game => game.over === false).length
  }
  this.finishedGames = () => {
    return this.startedGames() - this.unfinishedGames()
  }
  this.startedGamesPercent = () => {
    return Math.round((this.startedGames() / this.startedGames()) * 100)
  }
  this.unfinishedGamesPercent = () => {
    return Math.round((this.unfinishedGames() / this.startedGames()) * 100)
  }
  this.finishedGamesPercent = () => {
    return Math.round((this.finishedGames() / this.startedGames()) * 100)
  }
}

Object.assign(module.exports, {
  GameStats
})
