/*eslint-disable complexity */
/*eslint-disable max-statements */

const checkWonderCard = player => {
  
  console.log('In checkWonderCard func: ', player)
  let canPlay = true
  let copyOfAvailableResources = [...player.availableResources].sort(
    (a, b) => (a.length > b.length ? 1 : -1)
  )

  if (player.latestWonder === 0) {
    let cost = player.board.levelone.cost
    console.log('cost in func: ', cost)
    for (let i = 0; i < cost.length; ++i) {
      let found = false
      if (copyOfAvailableResources.length === 0) {
        canPlay = false
        break
      }
      // ['brick', 'brick']
      // ['wood', 'stone']
      for (let j = 0; j < copyOfAvailableResources.length; ++j) {
        if (copyOfAvailableResources[j].includes(cost[i])) {
          copyOfAvailableResources.splice(j, 1)
          found = true
          break
        }
        // canPlay = false
        // break
      }
      canPlay = found
    }
  } else if (player.latestWonder === 1) {
    let cost = player.board.leveltwo.cost
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
    let cost = player.board.levelthree.cost
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
