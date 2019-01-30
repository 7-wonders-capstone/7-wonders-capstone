const playCard = (player, card) => {
  if (!card.costs) {
    player.playedCards.push(card)
  } else {
    card.costs.forEach(cost => {
      if (typeof cost === 'number' && player.coins >= cost) {
        player.coins -= cost
        player.playedCards.push(card)
      } else if (
        typeof cost === 'string' &&
        player.availableResources.includes(cost)
      ) {
        player.playedCards.push(card)
      } else {
        console.log('insufficient funds')
      }
    })
  }

  return player
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
  availableResources: [board.baseResource],
  hand: [],
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
  costs: ['wood', 'brick'],
  type: 'guild',
  resources: ['wheel/tablet/compass']
}

console.log(playCard(testplayer, testcard))
