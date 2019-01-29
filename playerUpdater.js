/*eslint-disable complexity */

function playerUpdater(player, playedCard, tradeCost = 0) {
  player.playedCards.push(playedCard)
  player.coins -= tradeCost
  if (playedCard.costs) {
    playedCard.costs.forEach(cost => {
      if (typeof cost === 'number') {
        player.coins -= cost
      }
    })
  }
  switch (playedCard.type) {
    case 'basicResource':
      playedCard.resources.forEach(resource =>
        player.availableResources.push(resource)
      )
      break
    case 'advancedResource':
      playedCard.resources.forEach(resource =>
        player.availableResources.push(resource)
      )
      break
    case 'science':
      playedCard.resources.forEach(resource => player.science.push(resource))
      break
    case 'civilian':
      player.victoryPoints += playedCard.atEnd.amount
      break
    case 'economic':
      if (playedCard.effect) {
        player.activeEffects.push(playedCard.effect)
      }
      if (playedCard.onPlay) {
        if (playedCard.onPlay.from) {
          const count = determineReward(
            playedCard.onPlay.from,
            playedCard.onPlay.direction,
            player.leftPlayerNumber,
            player.rightPlayerNumber
          )
          player.coins += playedCard.onPlay.amount * count
        } else {
          player.coins += playedCard.onPlay.amount
        }
      }
      if (playedCard.resources) {
        playedCard.resources.forEach(resource =>
          player.availableResources.push(resource)
        )
      }
      if (playedCard.atEnd) {
        player.endEffects.push(playedCard.atEnd)
      }
      break
    case 'military':
      player.might += playedCard.effect.amount
      break
    case 'guild':
      if (playedCard.atEnd) {
        player.endEffects.push(playedCard.atEnd)
      } else {
        playedCard.resources.forEach(resource => player.science.push(resource))
      }
      break
    default:
      break
  }
  return player
}

//FUNCTION TESTING

//the following function still needs to be written, this returns a dummy value for now
function determineReward(from, direction, left, right) {
  return 3
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
  costs: ['wood', 'wood', 'metal', 'metal', 'papyrus'],
  type: 'guild',
  resources: ['wheel/tablet/compass']
}
console.log(playerUpdater(testplayer, testcard))
