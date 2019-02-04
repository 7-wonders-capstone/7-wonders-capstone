const neighborsBasicAndAdvancedResources = player => {
  // Creates an array of player's basic, advanced, and board's base resources.
  const arrOfBAResources = [
    ...player.playedCards
      .filter(
        card =>
          card.type === 'basicResource' || card.type === 'advancedResource'
      )
      .map(card => card.resources)
      .flat(),
    player.board.baseResource
  ]

  // Creates an object of resources and their quantity.
  return arrOfBAResources.reduce((obj, resource) => {
    if (!obj[resource]) obj[resource] = 1
    else obj[resource] = obj[resource] + 1
    return obj
  }, {})
}

const checkTrading = (player, selectedCard, players) => {
  /*
  see how many coins I have.
    if 0, return false.
    if 1, and no marketplace or E/W trading post card, return false.

  Determine which resources I need from neighbors.

  check neighbors played cards, and only look at basic resources and advanced resources, or board baseResource.
    if neither neighbor has the resource, return false.

    Maybe use reduce to create an array of only the neighbors basic and advanced and board resources.

    if neighbors have enough resources, checkout coins and do some math...
  */
  const [playerLeft] = players.filter(p => player.leftPlayerNumber === p.number)
  const [playerRight] = players.filter(
    p => player.rightPlayerNumber === p.number
  )

  if (player.coins === 0) return false
  // If one coin and no special trading card return false.
  if (
    player.coins === 1 &&
    !player.playedCards.some(c => {
      return (
        c.name === 'Marketplace' ||
        c.name === 'West Trading Post' ||
        c.name === 'East Trading Post'
      )
    })
  )
    return false

  // Determines my available resources.
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
  console.log('resources needed: ', resourcesNeeded)

  const leftNeighborAvailableResources = neighborsBasicAndAdvancedResources(
    playerLeft
  )
  console.log(
    'left players available resources: ',
    leftNeighborAvailableResources
  )

  const rightNeighborAvailableResources = neighborsBasicAndAdvancedResources(
    playerRight
  )
  console.log(
    'right players available resources: ',
    rightNeighborAvailableResources
  )

  // Looks at resources available to buy from neighbors, and returns an array of remaining resources needed to build the card that the neighbors don't have either.
  const resourcesNeighborsDontHave = resourcesNeeded
    .filter(resource => {
      if (leftNeighborAvailableResources[resource] > 0) {
        leftNeighborAvailableResources[resource]--
      } else return resource
    })
    .filter(resource => {
      if (rightNeighborAvailableResources[resource] > 0) {
        rightNeighborAvailableResources[resource]--
      } else return resource
    })

  console.log('resources neighbors dont have: ', resourcesNeighborsDontHave)

  return resourcesNeighborsDontHave.length === 0
}

const testplayers = [
  {
    number: 1,
    board: {
      name: 'Olympia',
      side: 'A',
      baseResource: 'wood',
      levelone: {
        name: 'levelone',
        cost: ['wood', 'wood'],
        atEnd: {
          gives: 'VP',
          amount: 3
        },
        type: 'wonder'
      },
      leveltwo: {
        name: 'leveltwo',
        cost: ['stone', 'stone'],
        effect: {
          kind: 'freeplay'
        },
        type: 'wonder'
      },
      levelthree: {
        name: 'levelthree',
        cost: ['metal', 'metal'],
        atEnd: {
          gives: 'VP',
          amount: 7
        },
        type: 'wonder'
      },
      imageURL: '/img/olympia-a.jpg'
    },
    coins: 3,
    availableResources: ['metal', 'wood', 'wood'],
    hand: ['Apothecary'],
    playedCards: [
      {
        name: 'Ore Vein',
        type: 'basicResource',
        numPlayers: 4,
        resources: ['metal'],
        imageURL: '/img/age1/ore-vein-4.jpg',
        snapshotURL: '/img/snapshot/ore_vein.jpg'
      },
      {
        name: 'Lumber Yard',
        resources: ['wood'],
        type: 'basicResource',
        numPlayers: 3,
        imageURL: '/img/age1/lumber-yard-3.jpg',
        snapshotURL: '/img/snapshot/lumber_yard.jpg'
      },
      {
        name: 'Theater',
        upgradesTo: ['Statue'],
        type: 'civilian',
        numPlayers: 3,
        atEnd: {
          gives: 'VP',
          amount: 2
        },
        imageURL: '/img/age1/theater-3.jpg',
        snapshotURL: '/img/snapshot/2victory.jpg'
      }
    ],
    victoryPoints: 0,
    might: 0,
    science: [],
    activeEffects: [],
    endEffects: [],
    militaryResults: [],
    leftPlayerNumber: 2,
    rightPlayerNumber: 3
  },
  {
    number: 2,
    board: {
      name: 'Gizah',
      side: 'A',
      baseResource: 'stone',
      levelone: {
        name: 'levelone',
        cost: ['stone', 'stone'],
        atEnd: {
          gives: 'VP',
          amount: 3
        },
        type: 'wonder'
      },
      leveltwo: {
        name: 'leveltwo',
        cost: ['wood', 'wood', 'wood'],
        atEnd: {
          gives: 'VP',
          amount: 5
        },
        type: 'wonder'
      },
      levelthree: {
        name: 'levelthree',
        cost: ['stone', 'stone', 'stone', 'stone'],
        atEnd: {
          gives: 'VP',
          amount: 7
        },
        type: 'wonder'
      },
      imageURL: '/img/gizah-a.jpg'
    },
    coins: 3,
    availableResources: ['papyrus', 'wood', 'stone'],
    hand: ['Apothecary'],
    playedCards: [
      {
        name: 'Press',
        resources: ['papyrus'],
        type: 'advancedResource',
        numPlayers: 3,
        imageURL: '/img/age1/press-3.jpg',
        snapshotURL: '/img/snapshot/press.jpg'
      },
      {
        name: 'Lumber Yard',
        resources: ['wood'],
        type: 'basicResource',
        numPlayers: 3,
        imageURL: '/img/age1/lumber-yard-3.jpg',
        snapshotURL: '/img/snapshot/lumber_yard.jpg'
      },
      {
        name: 'Theater',
        upgradesTo: ['Statue'],
        type: 'civilian',
        numPlayers: 3,
        atEnd: {
          gives: 'VP',
          amount: 2
        },
        imageURL: '/img/age1/theater-3.jpg',
        snapshotURL: '/img/snapshot/2victory.jpg'
      }
    ],
    victoryPoints: 0,
    might: 0,
    science: [],
    activeEffects: [],
    endEffects: [],
    militaryResults: [],
    leftPlayerNumber: 3,
    rightPlayerNumber: 1
  },
  {
    number: 3,
    board: {
      name: 'Alexandria',
      side: 'A',
      baseResource: 'glass',
      levelone: {
        name: 'levelone',
        cost: ['stone', 'stone'],
        atEnd: {
          gives: 'VP',
          amount: 3
        },
        type: 'wonder'
      },
      leveltwo: {
        name: 'leveltwo',
        cost: ['metal', 'metal'],
        resources: ['metal/stone/brick/wood'],
        type: 'wonder'
      },
      levelthree: {
        name: 'levelthree',
        cost: ['glass', 'glass'],
        atEnd: {
          gives: 'VP',
          amount: 7
        },
        type: 'wonder'
      },
      imageURL: '/img/alexandria-a.jpg'
    },
    coins: 3,
    availableResources: ['clay', 'wood', 'glass'],
    hand: ['Apothecary'],
    playedCards: [
      {
        name: 'Clay Pool',
        resources: ['clay'],
        type: 'basicResource',
        numPlayers: 3,
        imageURL: '/img/age1/clay-pool-3.jpg',
        snapshotURL: '/img/snapshot/clay_pool.jpg'
      },
      {
        name: 'Lumber Yard',
        resources: ['wood'],
        type: 'basicResource',
        numPlayers: 3,
        imageURL: '/img/age1/lumber-yard-3.jpg',
        snapshotURL: '/img/snapshot/lumber_yard.jpg'
      },
      {
        name: 'Theater',
        upgradesTo: ['Statue'],
        type: 'civilian',
        numPlayers: 3,
        atEnd: {
          gives: 'VP',
          amount: 2
        },
        imageURL: '/img/age1/theater-3.jpg',
        snapshotURL: '/img/snapshot/2victory.jpg'
      }
    ],
    victoryPoints: 0,
    might: 0,
    science: [],
    activeEffects: [],
    endEffects: [],
    militaryResults: [],
    leftPlayerNumber: 1,
    rightPlayerNumber: 2
  }
]

const testplayer = {
  number: 1,
  board: {
    name: 'Olympia',
    side: 'A',
    baseResource: 'wood',
    levelone: {
      name: 'levelone',
      cost: ['wood', 'wood'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      name: 'leveltwo',
      cost: ['stone', 'stone'],
      effect: {
        kind: 'freeplay'
      },
      type: 'wonder'
    },
    levelthree: {
      name: 'levelthree',
      cost: ['metal', 'metal'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    },
    imageURL: '/img/olympia-a.jpg'
  },
  coins: 3,
  availableResources: ['metal', 'wood', 'wood'],
  hand: ['Apothecary'],
  playedCards: [
    {
      name: 'Ore Vein',
      type: 'basicResource',
      numPlayers: 4,
      resources: ['metal'],
      imageURL: '/img/age1/ore-vein-4.jpg',
      snapshotURL: '/img/snapshot/ore_vein.jpg'
    },
    {
      name: 'Lumber Yard',
      resources: ['wood'],
      type: 'basicResource',
      numPlayers: 3,
      imageURL: '/img/age1/lumber-yard-3.jpg',
      snapshotURL: '/img/snapshot/lumber_yard.jpg'
    },
    {
      name: 'Theater',
      upgradesTo: ['Statue'],
      type: 'civilian',
      numPlayers: 3,
      atEnd: {
        gives: 'VP',
        amount: 2
      },
      imageURL: '/img/age1/theater-3.jpg',
      snapshotURL: '/img/snapshot/2victory.jpg'
    }
  ],
  victoryPoints: 0,
  might: 0,
  science: [],
  activeEffects: [],
  endEffects: [],
  militaryResults: [],
  leftPlayerNumber: 2,
  rightPlayerNumber: 3
}

const testcard = {
  name: 'Scientists Guild',
  costs: ['stone', 'wood'],
  type: 'guild',
  resources: ['wheel/tablet/compass'],
  upGradesFrom: ['no']
}

console.log(
  'check trading func: ',
  checkTrading(testplayer, testcard, testplayers)
)
