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
          console.log(copyOfAvailableResources)
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
          console.log(copyOfAvailableResources)
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
          console.log(copyOfAvailableResources)
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

// const board = {
//   name: 'Babylon',
//   side: 'A',
//   baseResource: 'brick',
//   levelone: {
//     cost: ['wood', 'wood', 'stone'],
//     atEnd: {
//       gives: 'VP',
//       amount: 3
//     }
//   },
//   leveltwo: {
//     cost: ['wood', 'wood'],
//     resources: ['wheel/tablet/compass']
//   },
//   levelthree: {
//     cost: ['brick', 'brick', 'brick', 'brick'],
//     atEnd: {
//       gives: 'VP',
//       amount: 7
//     }
//   }
// }

// const testplayer = {
//   number: 1,
//   board: board,
//   coins: 3,
//   availableResources: ['wood/stone', 'wood', 'wood'],
//   hand: ['Apothecary'],
//   playedCards: [],
//   victoryPoints: 0,
//   might: 0,
//   science: [],
//   activeEffects: [],
//   endEffects: [],
//   militaryResults: [],
//   leftPlayerNumber: 7,
//   rightPlayerNumber: 2,
//   latestWonder: 0
// }
module.exports = {checkWonderCard}
