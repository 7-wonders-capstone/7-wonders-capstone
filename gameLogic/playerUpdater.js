/*eslint-disable complexity */

const determineReward = require('./determineReward')

const playerUpdater = (
  player,
  playerList,
  playedCard,
  tradeCost = 0,
  action
) => {
  player.hand = player.hand.filter(
    card =>
      card.name !== playedCard.name || card.numPlayers !== playedCard.numPlayers
  )

  if (action === 'discard') {
    player.coins += 3
    return player
  }

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
      player.latestWonder = player.latestWonder + 1
      player.hand = player.hand.filter(
        card =>
          card.name !== playedCard.sacrificeName ||
          card.numPlayers !== playedCard.sacrificeNumber
      )
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

module.exports = playerUpdater
