/*eslint-disable complexity */
/*eslint-disable max-statements */

const playCard = (player, card) => {
  if (!card.costs) {
    return true
  } else if (
    typeof card.costs[0] === 'number' &&
    player.coins >= card.costs[0]
  ) {
    return true
  } else if ('upGradesFrom' in card) {
    if (player.hand.includes(card.upGradesFrom[0])) {
      return true
    }
  } else if (typeof card.costs[0] === 'string') {
    let canPlay
    let copyOfAvailableResources = [...player.availableResources].sort(
      (a, b) => (a.length > b.length ? 1 : -1)
    )
    for (let i = 0; i < card.costs.length; ++i) {
      let found = false
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(card.costs[i])) {
          copyOfAvailableResources.splice(j, 1)
          found = true
          break
        }
      }
      canPlay = found
    }
    return canPlay
  } else {
    return false
  }
}

module.exports = {playCard}
