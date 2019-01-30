function militaryComparison(player, playerList, age) {
  const leftNeighbor = playerList.find(
    neighbor => neighbor.number === player.leftPlayerNumber
  )
  if (leftNeighbor.might < player.might) {
    if (age === 1) {
      player.victoryPoints += 1
      player.militaryResults.push(1)
    } else if (age === 2) {
      player.victoryPoints += 3
      player.militaryResults.push(3)
    } else if (age === 3) {
      player.victoryPoints += 5
      player.militaryResults.push(5)
    }
  } else if (leftNeighbor.might > player.might) {
    player.victoryPoints -= 1
    player.militaryResults.push(-1)
  }
  const rightNeighbor = playerList.find(
    neighbor => neighbor.number === player.rightPlayerNumber
  )
  if (rightNeighbor.might < player.might) {
    if (age === 1) {
      player.victoryPoints += 1
      player.militaryResults.push(1)
    } else if (age === 2) {
      player.victoryPoints += 3
      player.militaryResults.push(3)
    } else if (age === 3) {
      player.victoryPoints += 5
      player.militaryResults.push(5)
    }
  } else if (rightNeighbor.might > player.might) {
    player.victoryPoints -= 1
    player.militaryResults.push(-1)
  }
  return player
}
