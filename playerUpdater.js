/*eslint-disable complexity */

const playerUpdater = (player, playerList, playedCard, tradeCost = 0) => {
  player.playedCards.push(playedCard)
  player.hand = player.hand.filter(
    card =>
      card.name !== playedCard.name || card.numPlayers !== playedCard.numPlayers
  )
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
            playerList,
            player.number,
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
    case 'wonder':
      if (playedCard.resources) {
        playedCard.resources.forEach(resource =>
          player.availableResources.push(resource)
        )
      }
      if (playedCard.atEnd) {
        player.victoryPoints += playedCard.atEnd.amount
      }
      if (playedCard.onPlay) {
        if (playedCard.onPlay.from) {
          const count = determineReward(
            playerList,
            player.number,
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
      if (playedCard.effect) {
        if (playedCard.effect.type === 'might') {
          player.might += playedCard.effect.amount
        } else {
          player.activeEffects.push(playedCard.effect)
        }
      }
      break
    default:
      break
  }
  return player
}

//FUNCTION TESTING

//the following function still needs to be written, this returns a dummy value for now
function determineReward(playerList, from, direction, left, own, right) {
  return 3
}

module.exports = playerUpdater
