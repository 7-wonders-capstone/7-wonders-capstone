const playCard = (player, card) => {
  if (!card.costs) {
    return true
  } else if (
    card.upgradesFrom &&
    player.hand.some(handCard => {
      return handCard.name === card.upgradesFrom[0]
    })
  ) {
    return true
  } else {
    let canPlay = true
    card.costs.forEach(cost => {
      if (typeof cost === 'number' && player.coins < cost) {
        canPlay = false
      } else if (
        typeof cost === 'string' &&
        !player.availableResources.some(resource => resource.includes(cost))
      ) {
        canPlay = false
      }
    })
    return canPlay
  }
}

const board = {
  name: 'Babylon',
  side: 'A',
  baseResource: 'brick',
  levelone: {
    cost: ['brick', 'brick'],
    atEnd: {
      gives: 'VP',
      amount: 3
    }
  },
  leveltwo: {
    cost: ['wood', 'wood', 'wood'],
    resources: ['wheel/tablet/compass']
  },
  levelthree: {
    cost: ['brick', 'brick', 'brick', 'brick'],
    atEnd: {
      gives: 'VP',
      amount: 7
    }
  }
}

const testplayer = {
  number: 1,
  board: board,
  coins: 3,
  availableResources: ['brick'],
  hand: ['Apothecary'],
  playedCards: [],
  victoryPoints: 0,
  might: 0,
  science: [],
  activeEffects: [],
  endEffects: [],
  militaryResults: [],
  leftPlayerNumber: 7,
  rightPlayerNumber: 2
}

const testcard = {
  name: 'Scientists Guild',
  costs: [2],
  type: 'guild',
  resources: ['wheel/tablet/compass'],
  upGradesFrom: ['no']
}

console.log(playCard(testplayer, testcard))
// export default playCard

// const playCard = (player, card) => {
//   let canPlay = true
//   let copyOfAvailableResources = [...player.availableResources].sort(
//     (a, b) => (a.length > b.length ? 1 : -1)
//   )

//   if (!card.costs) {
//     return true
//   } else if (
//     card.upgradesFrom &&
//     player.hand.some(handCard => {
//       return handCard.name === card.upgradesFrom[0]
//     })
//   ) {
//     return true
//   } else if (
//     card.costs.forEach(cost => {
//       if (typeof cost === 'number' && player.coins < cost) {
//         canPlay = false
//       }
//     })
//   ) {
//     return canPlay
//   } else {
//     for (let i = 0; i < card.costs.length; ++i) {
//       for (let j = 0; j < copyOfAvailableResources.length; ++j) {
//         if (copyOfAvailableResources[j].includes(card.costs[i])) {
//           copyOfAvailableResources.splice(j, 1)
//           console.log(copyOfAvailableResources)
//           break
//         }
//         canPlay = false
//         break
//       }
//     }
//     return canPlay
//   }
// }
