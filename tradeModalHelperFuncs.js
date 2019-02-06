/*eslint-disable complexity */

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
    case 'brick/metal':
      return '/img/snapshot/clay_pit.jpg'
    case 'stone/wood':
      return '/img/snapshot/timber_yard.jpg'
    case 'stone/brick':
      return '/img/snapshot/excavation.jpg'
    case 'wood/metal':
      return '/img/snapshot/forest_cave.jpg'
    case 'wood/brick':
      return '/img/snapshot/tree_farm.jpg'
    case 'stone/metal':
      return '/img/snapshot/mine.jpg'
    default:
      console.log('image not found')
  }
}

export const neighborsAvailableResources = player => {
  // Creates an array of player's basic, advanced, and board's base resources.
  const neighborsResources = [
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

  return neighborsResources
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
