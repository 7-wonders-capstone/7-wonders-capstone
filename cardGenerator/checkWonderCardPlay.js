const {gameBoards} = require('../gameBoards')

const playWonderCard = (player, boardName, level) => {
  let canPlay = true
  if (
    level === gameBoards.boardName.leveltwo &&
    !player.playedCards.includes('levelone')
  ) {
    canPlay = false
  } else if (
    level === gameBoards.boardName.levelthree &&
    !player.playedCards.includes('leveltwo')
  ) {
    canPlay = false
  } else {
    gameBoards.boardName.level.cost.forEach(resource => {
      if (!player.availableResources.includes(resource)) {
        canPlay = false
      }
    })
  }
  return canPlay
}

export default playWonderCard
