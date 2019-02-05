// Helper function for checkTrading function below
export const neighborsAvailableResources = player => {
  // Creates an array of player's basic, advanced, and board's base resources.
  const arrOfBasicAndAdvancedResources = [
    ...player.playedCards
      .filter(
        card =>
          card.type === 'basicResource' || card.type === 'advancedResource'
      )
      .map(card => card.resources)
      .flat(),
    player.board.baseResource
  ]

  // Creates an object of players avaialable resources and their quantity.
  return arrOfBasicAndAdvancedResources.reduce((obj, resource) => {
    if (!obj[resource]) obj[resource] = 1
    else obj[resource] = obj[resource] + 1
    return obj
  }, {})
}

const checkTrading = (player, selectedCard, players) => {
  const [playerLeft] = players.filter(p => player.leftPlayerNumber === p.number)
  const [playerRight] = players.filter(
    p => player.rightPlayerNumber === p.number
  )

  if (player.coins < 2) return false

  // TODO: Will need to add more logic if we implement special trading cards.

  // Determines own available resources.
  const availableResourcesObj = player.availableResources.reduce(
    (obj, resource) => {
      if (!obj[resource]) obj[resource] = 1
      else obj[resource] = obj[resource] + 1
      return obj
    },
    {}
  )

  // Create an array of resources needed from neighbors.
  const resourcesNeeded = selectedCard.costs.filter(resource => {
    if (availableResourcesObj[resource] > 0) {
      availableResourcesObj[resource]--
    } else return resource
  })

  // Creates an object of left neighbor's resources and quantity.
  const leftNeighborAvailableResources = neighborsAvailableResources(playerLeft)

  // Creates an object of right neighbor's resources and quantity.
  const rightNeighborAvailableResources = neighborsAvailableResources(
    playerRight
  )

  // Array of resources needed that neighbors have.
  const resourcesNeededThatNeighborsHave = resourcesNeeded.filter(resource => {
    if (leftNeighborAvailableResources[resource] > 0) {
      leftNeighborAvailableResources[resource]--
      return resource
    } else if (rightNeighborAvailableResources[resource] > 0) {
      rightNeighborAvailableResources[resource]--
      return resource
    }
  })

  // Returns true if neighbors have resources needed and player has enough coins.
  return (
    resourcesNeededThatNeighborsHave.length === resourcesNeeded.length &&
    player.coins >= resourcesNeededThatNeighborsHave.length * 2
  )
}

export default checkTrading
