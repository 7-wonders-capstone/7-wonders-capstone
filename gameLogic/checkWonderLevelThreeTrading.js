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
  const objOfBasicAndAdvancedResources = arrOfBasicAndAdvancedResources.reduce(
    (obj, resource) => {
      if (!obj[resource]) obj[resource] = 1
      else obj[resource] = obj[resource] + 1
      return obj
    },
    {}
  )

  return objOfBasicAndAdvancedResources
}

const checkWonderLevelOneTrading = (player, players) => {
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
  const resourcesNeeded = player.board.levelthree.cost.filter(resource => {
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
    let isAvailable = false

    if (
      Object.entries(leftNeighborAvailableResources).some(entry =>
        entry[0].includes(resource)
      )
    ) {
      Object.entries(leftNeighborAvailableResources).forEach(entry => {
        if (entry[0].includes(resource) && entry[1] > 1) {
          isAvailable = true
          leftNeighborAvailableResources[entry[0]]--
        } else if (entry[0].includes(resource) && entry[1] === 1) {
          isAvailable = true
          delete leftNeighborAvailableResources[entry[0]]
        }
      })
    }
    if (
      Object.entries(rightNeighborAvailableResources).some(entry =>
        entry[0].includes(resource)
      )
    ) {
      Object.entries(rightNeighborAvailableResources).forEach(entry => {
        if (entry[0].includes(resource) && entry[1] > 1) {
          isAvailable = true
          rightNeighborAvailableResources[entry[0]]--
        } else if (entry[0].includes(resource) && entry[1] === 1) {
          isAvailable = true
          delete rightNeighborAvailableResources[entry[0]]
        }
      })
    }

    return isAvailable
  })

  // Returns true if neighbors have resources needed and player has enough coins.
  return (
    resourcesNeededThatNeighborsHave.length === resourcesNeeded.length &&
    player.coins >= resourcesNeededThatNeighborsHave.length * 2
  )
}

module.exports = checkWonderLevelOneTrading
