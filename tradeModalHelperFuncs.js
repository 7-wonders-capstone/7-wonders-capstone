const findSnapshot = resourceName => {
  switch (resourceName) {
    case 'brick':
      return '/img/snapshot/clay_pool.jpg'
    case 'wood':
      return '/img/snapshot/lumber_yard.jpg'
    case 'metal':
      return '/img/snapshot/ore_vein.jpg'
    case 'stone':
      return '/img/snapshot/stone_pit.jpg'
    case 'papyrus':
      return '/img/snapshot/press.jpg'
    case 'glass':
      return '/img/snapshot/glassworks.jpg'
    case 'silk':
      return '/img/snapshot/loom.jpg'
    default:
      console.log('image not found')
  }
}

export const neighborsAvailableResources = player => {
  // Creates an array of player's basic, advanced, and board's base resources.
  return [
    ...player.playedCards
      .filter(
        card =>
          card.type === 'basicResource' || card.type === 'advancedResource'
      )
      .map(card => card.resources)
      .flat(),
    player.board.baseResource
  ].map(resource => {
    return {name: resource, snapshotURL: findSnapshot(resource)}
  })
}

export const resourcesNeeded = (player, selectedCard) => {
  const availableResourcesObj = player.availableResources.reduce(
    (obj, resource) => {
      if (!obj[resource]) obj[resource] = 1
      else obj[resource] = obj[resource] + 1
      return obj
    },
    {}
  )

  return selectedCard.costs.filter(resource => {
    if (availableResourcesObj[resource] > 0) {
      availableResourcesObj[resource]--
    } else return resource
  })
}
