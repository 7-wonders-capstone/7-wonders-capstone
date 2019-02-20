/*eslint-disable complexity */
/*eslint-disable max-statements */

const checkWonderCard = player => {
  let canPlay
  let copyOfAvailableResources = [...player.availableResources].sort(
    (a, b) => (a.length > b.length ? 1 : -1)
  )

  if (player.latestWonder === 0) {
    let cost = player.board.levelone.cost
    for (let i = 0; i < cost.length; ++i) {
      let found = false
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(cost[i])) {
          copyOfAvailableResources.splice(j, 1)
          found = true
          break
        }
      }
      canPlay = found
    }
  } else if (player.latestWonder === 1) {
    let cost = player.board.leveltwo.cost
    for (let i = 0; i < cost.length; ++i) {
      let found = false
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(cost[i])) {
          copyOfAvailableResources.splice(j, 1)
          found = true
          break
        }
      }
      canPlay = found
    }
  } else if (player.latestWonder === 2) {
    let cost = player.board.levelthree.cost
    for (let i = 0; i < cost.length; ++i) {
      let found = false
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(cost[i])) {
          copyOfAvailableResources.splice(j, 1)
          found = true
          break
        }
      }
      canPlay = found
    }
  }

  return canPlay
}

module.exports = {checkWonderCard}
