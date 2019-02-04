function handSwap(players, age) {
  let oldHands = []
  players.forEach(player =>
    oldHands.push({number: player.number, hand: player.hand.slice()})
  )
  players.forEach(player => {
    let targetSeat
    if (age === 2) {
      targetSeat = player.leftPlayerNumber
    } else {
      targetSeat = player.rightPlayerNumber
    }
    let newHand = oldHands.find(hand => hand.number === targetSeat).hand
    player.hand = newHand.slice()
  })
  return players
}

module.exports = handSwap
