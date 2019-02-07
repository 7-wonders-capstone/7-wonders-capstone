/*eslint-disable complexity */

const checkWonderCard = player => {
  let canPlay = true
  let copyOfAvailableResources = [...player.availableResources].sort(
    (a, b) => (a.length > b.length ? 1 : -1)
  )
  let cost = player.board.levelone.cost

  if (player.latestWonder === 0) {
    for (let i = 0; i < cost.length; ++i) {
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(cost[i])) {
          copyOfAvailableResources.splice(j, 1)
          break
        }
        canPlay = false
        break
      }
    }
  } else if (player.latestWonder === 1) {
    for (let i = 0; i < cost.length; ++i) {
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(cost[i])) {
          copyOfAvailableResources.splice(j, 1)
          break
        }
        canPlay = false
        break
      }
    }
  } else if (player.latestWonder === 2) {
    for (let i = 0; i < cost.length; ++i) {
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(cost[i])) {
          copyOfAvailableResources.splice(j, 1)
          break
        }
        canPlay = false
        break
      }
    }
  }
  return canPlay
}

module.exports = {checkWonderCard}
