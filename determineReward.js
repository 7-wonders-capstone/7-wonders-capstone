function determineReward(playerList, from, direction, left, own, right) {
  let targets = []
  playerList.forEach(player => {
    if (direction === 'both' || direction === 'omni') {
      if (player.number === left || player.number === right) {
        targets.push(player)
      }
    }
    if (direction === 'omni' || direction === 'own') {
      if (player.number === own) {
        targets.push(player)
      }
    }
  })
  let total = 0
  targets.forEach(target => {
    target.playedCards.forEach(card => {
      if (card.type === from) {
        total++
      }
    })
  })
  return total
}
