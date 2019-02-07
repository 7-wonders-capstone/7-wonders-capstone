/*eslint-disable complexity */
/*eslint-disable max-statements */

const checkWonderCard = player => {
  // debugger
  let canPlay = true
  let copyOfAvailableResources = [...player.availableResources].sort(
    (a, b) => (a.length > b.length ? 1 : -1)
  )
  let cost = player.board.levelone.cost
  console.log(
    'Actual avaliable resources: ',
    player.availableResources,
    copyOfAvailableResources.length
  )
  console.log(
    'copy of available resources: ',
    copyOfAvailableResources,
    copyOfAvailableResources.length
  )
  console.log('cost: ', cost)

  for (let i = 0; i < copyOfAvailableResources.length; i++) {
    console.log('loop iteration: ', copyOfAvailableResources[i])
  }

  if (player.latestWonder === 0) {
    for (let i = 0; i < cost.length; ++i) {
      if (copyOfAvailableResources.length === 0) {
        canPlay = false
        break
      }
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
