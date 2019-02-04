// Helper function for checkTrading function below
const neighborsAvailableResources = player => {
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
  console.log('building cost: ', selectedCard.costs)
  console.log('personal avaialable resources: ', availableResourcesObj)

  // Create an array of resources needed from neighbors.
  const resourcesNeeded = selectedCard.costs.filter(resource => {
    if (availableResourcesObj[resource] > 0) {
      availableResourcesObj[resource]--
    } else return resource
  })
  console.log('resources needed: ', resourcesNeeded)

  // Creates an object of left neighbor's resources and quantity.
  const leftNeighborAvailableResources = neighborsAvailableResources(playerLeft)
  console.log(
    'left players available resources: ',
    leftNeighborAvailableResources
  )

  // Creates an object of right neighbor's resources and quantity.
  const rightNeighborAvailableResources = neighborsAvailableResources(
    playerRight
  )
  console.log(
    'right players available resources: ',
    rightNeighborAvailableResources
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
  console.log(
    'resources needed that neighbors have: ',
    resourcesNeededThatNeighborsHave
  )

  // Returns true if neighbors have resources needed and player has enough coins.
  return (
    resourcesNeededThatNeighborsHave.length === resourcesNeeded.length &&
    player.coins >= resourcesNeededThatNeighborsHave.length * 2
  )
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
  coins: 8,
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
  costs: ['stone', 'wood', 'wood', 'glass'],
  type: 'guild',
  resources: ['wheel/tablet/compass'],
  upGradesFrom: ['no']
}

console.log(
  'check trading func: ',
  checkTrading(testplayer, testcard, testplayers)
)
