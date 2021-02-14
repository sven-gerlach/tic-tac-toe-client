const store = require('./store').store

const getUnfinishedGames = function () {
  return store.games.filter(game => game.over === false)
}

const makeHtmlCarouselItems = function (unfinishedGames) {
  let htmlCarouselItems = ''
  unfinishedGames.forEach((game, index) => {
    if (index === 0) {
      htmlCarouselItems += `
        <div class="carousel-item active" data-game-id="${game._id}">
          <div class="old-game-board" data-game-id="${game._id}">
            <div data-game-board-index="0" data-game-id="${game._id}">${game.cells[0]}</div>
            <div data-game-board-index="1" data-game-id="${game._id}">${game.cells[1]}</div>
            <div data-game-board-index="2" data-game-id="${game._id}">${game.cells[2]}</div>
            <div data-game-board-index="3" data-game-id="${game._id}">${game.cells[3]}</div>
            <div data-game-board-index="4" data-game-id="${game._id}">${game.cells[4]}</div>
            <div data-game-board-index="5" data-game-id="${game._id}">${game.cells[5]}</div>
            <div data-game-board-index="6" data-game-id="${game._id}">${game.cells[6]}</div>
            <div data-game-board-index="7" data-game-id="${game._id}">${game.cells[7]}</div>
            <div data-game-board-index="8" data-game-id="${game._id}">${game.cells[8]}</div>
          </div>
        </div>
      `
    } else {
      htmlCarouselItems += `
        <div class="carousel-item" data-game-id="${game._id}">
          <div class="old-game-board" data-game-id="${game._id}">
            <div data-game-board-index="0" data-game-id="${game._id}">${game.cells[0]}</div>
            <div data-game-board-index="1" data-game-id="${game._id}">${game.cells[1]}</div>
            <div data-game-board-index="2" data-game-id="${game._id}">${game.cells[2]}</div>
            <div data-game-board-index="3" data-game-id="${game._id}">${game.cells[3]}</div>
            <div data-game-board-index="4" data-game-id="${game._id}">${game.cells[4]}</div>
            <div data-game-board-index="5" data-game-id="${game._id}">${game.cells[5]}</div>
            <div data-game-board-index="6" data-game-id="${game._id}">${game.cells[6]}</div>
            <div data-game-board-index="7" data-game-id="${game._id}">${game.cells[7]}</div>
            <div data-game-board-index="8" data-game-id="${game._id}">${game.cells[8]}</div>
          </div>
        </div>
      `
    }
  })
  return htmlCarouselItems
}

const makeHtmlCarouselIndicators = function (unfinishedGames) {
  let htmlCarouselIndicators = ''
  unfinishedGames.forEach((game, index) => {
    if (index === 0) {
      htmlCarouselIndicators += `
      <li data-target="#carouselOldGamesIndicators" data-slide-to="${index}" class="active"></li>
      `
    } else {
      htmlCarouselIndicators += `
      <li data-target="#carouselOldGamesIndicators" data-slide-to="${index}"></li>
      `
    }
  })
  return htmlCarouselIndicators
}

Object.assign(module.exports, {
  getUnfinishedGames,
  makeHtmlCarouselItems,
  makeHtmlCarouselIndicators
})
