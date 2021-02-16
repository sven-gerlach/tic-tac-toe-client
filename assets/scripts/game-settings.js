const collectNewGameSettings = function () {
  const gameSettings = {
    symbol: 'X',
    turn: 'first',
    opponent: 'human',
    aiDifficulty: null
  }
  for (const property in gameSettings) {
    $(`#${property}`).children().each(function () {
      if ($(this).hasClass('active')) {
        gameSettings[property] = $(this).text()
      }
    })
  }
  return gameSettings
}

Object.assign(module.exports, {
  collectNewGameSettings
})
