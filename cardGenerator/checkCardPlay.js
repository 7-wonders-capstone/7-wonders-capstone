const playCard = (player, card, players) => {
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
    //TODO refactor using some array method
    card.costs.forEach(cost => {
      if (typeof cost === 'number' && player.coins < cost) {
        canPlay = false
      } else if (
        typeof cost === 'string' &&
        !player.availableResources.includes(cost)
      ) {
        canPlay = false
      }
    })
    return canPlay
  }
}

// } else if (checkTrading()) {
//   return true // return a boolean.
//   // TODO: need another function exchangeCoins() for Cody.

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
  availableResources: [board.baseResource],
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
console.log(testplayer)

export default playCard
