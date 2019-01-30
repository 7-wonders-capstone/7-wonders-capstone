const ageOneDeck = [
  {
    name: 'Apothecary',
    upgradesTo: ['Stables', 'Dispensary'],
    costs: ['silk'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age1/apothecary-3.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
  },
  {
    name: 'Apothecary',
    upgradesTo: ['Stables', 'Dispensary'],
    costs: ['silk'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 5,
    imageURL: '/img/age1/apothecary-5.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
  },
  {
    name: 'Loom',
    resources: ['silk'],
    type: 'advancedResource',
    numPlayers: 3,
    imageURL: '/img/age1/loom-3.jpg',
    snapshotURL: '/img/snapshot/loom.jpg'
  },
  {
    name: 'Loom',
    resources: ['silk'],
    type: 'advancedResource',
    numPlayers: 6,
    imageURL: '/img/age1/loom-6.jpg',
    snapshotURL: '/img/snapshot/loom.jpg'
  },
  {
    name: 'Altar',
    upgradesTo: ['Temple'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 2
    },
    imageURL: '/img/age1/altar-3.jpg',
    snapshotURL: '/img/snapshot/2victory.jpg'
  },
  {
    name: 'Altar',
    upgradesTo: ['Temple'],
    type: 'civilian',
    numPlayers: 5,
    atEnd: {
      gives: 'VP',
      amount: 2
    },
    imageURL: '/img/age1/altar-5.jpg',
    snapshotURL: '/img/snapshot/2victory.jpg'
  },
  {
    name: 'Marketplace',
    upgradesTo: ['Caravansery'],
    type: 'economic',
    numPlayers: 3,
    effect: {
      kind: 'advancedTrade',
      direction: 'both'
    },
    imageURL: '/img/age1/marketplace-3.jpg',
    snapshotURL: '/img/snapshot/marketplace.jpg'
  },
  {
    name: 'Marketplace',
    upgradesTo: ['Caravansery'],
    type: 'economic',
    numPlayers: 6,
    effect: {
      kind: 'advancedTrade',
      direction: 'both'
    },
    imageURL: '/img/age1/marketplace-6.jpg',
    snapshotURL: '/img/snapshot/marketplace.jpg'
  },
  {
    name: 'Workshop',
    upgradesTo: ['Laboratory', 'Archery Range'],
    costs: ['glass'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age1/workshop-3.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
  },
  {
    name: 'Workshop',
    upgradesTo: ['Laboratory', 'Archery Range'],
    costs: ['glass'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 7,
    imageURL: '/img/age1/workshop-7.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
  },
  {
    name: 'East Trading Post',
    upgradesTo: ['Forum'],
    type: 'economic',
    numPlayers: 3,
    effect: {
      kind: 'basicTrade',
      direction: 'right'
    },
    imageURL: '/img/age1/east-trading-post-3.jpg',
    snapshotURL: '/img/snapshot/east-trading-post.jpg'
  },
  {
    name: 'Stockade',
    costs: ['wood'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 1
    },
    imageURL: '/img/age1/stockade-3.jpg',
    snapshotURL: '/img/snapshot/military_single.jpg'
  },
  {
    name: 'Stockade',
    costs: ['wood'],
    type: 'military',
    numPlayers: 7,
    effect: {
      kind: 'might',
      amount: 1
    },
    imageURL: '/img/age1/stockage-7.jpg',
    snapshotURL: '/img/snapshot/military_single.jpg'
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
    name: 'Lumber Yard',
    resources: ['wood'],
    type: 'basicResource',
    numPlayers: 4,
    imageURL: '/img/age1/lumber-yard-4.jpg',
    snapshotURL: '/img/snapshot/lumber_yard.jpg'
  },
  {
    name: 'Ore Vein',
    type: 'basicResource',
    numPlayers: 3,
    resources: ['metal'],
    imageURL: '/img/age1/ore-vein-3.jpg',
    snapshotURL: '/img/snapshot/ore_vein.jpg'
  },
  {
    name: 'Ore Vein',
    type: 'basicResource',
    numPlayers: 4,
    resources: ['metal'],
    imageURL: '/img/age1/ore-vein-4.jpg',
    snapshotURL: '/img/snapshot/ore_vein.jpg'
  },
  {
    name: 'Guard Tower',
    costs: ['brick'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 1
    },
    imageURL: '/img/age1/guard-tower-3.jpg',
    snapshotURL: '/img/snapshot/military_single.jpg'
  },
  {
    name: 'Guard Tower',
    costs: ['brick'],
    type: 'military',
    numPlayers: 4,
    effect: {
      kind: 'might',
      amount: 1
    },
    imageURL: '/img/age1/guard-tower-4.jpg',
    snapshotURL: '/img/snapshot/military_single.jpg'
  },
  {
    name: 'Scriptorium',
    upgradesTo: ['Courthouse', 'Library'],
    costs: ['papyrus'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age1/scriptorium-3.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
  },
  {
    name: 'Scriptorium',
    upgradesTo: ['Courthouse', 'Library'],
    costs: ['papyrus'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 4,
    imageURL: '/img/age1/scriptorium-4.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
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
  },
  {
    name: 'Theater',
    upgradesTo: ['Statue'],
    type: 'civilian',
    numPlayers: 6,
    atEnd: {
      gives: 'VP',
      amount: 2
    },
    imageURL: '/img/age1/theater-6.jpg',
    snapshotURL: '/img/snapshot/2victory.jpg'
  },
  {
    name: 'West Trading Post',
    upgradesTo: ['Forum'],
    type: 'economic',
    numPlayers: 3,
    effect: {
      kind: 'basicTrade',
      direction: 'left'
    },
    imageURL: '/img/age1/west-trading-post-3.jpg',
    snapshotURL: '/img/snapshot/west_trading_post.jpg'
  },
  {
    name: 'Press',
    resources: ['papyrus'],
    type: 'advancedResource',
    numPlayers: 3,
    imageURL: '/img/age1/press-3.jpg',
    snapshotURL: '/img/snapshot/press.jpg'
  },
  {
    name: 'Press',
    resources: ['papyrus'],
    type: 'advancedResource',
    numPlayers: 6,
    imageURL: '/img/age1/press-6.jpg',
    snapshotURL: '/img/snapshot/press.jpg'
  },
  {
    name: 'Clay Pool',
    resources: ['clay'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age1/clay-pool-3.jpg',
    snapshotURL: '/img/snapshot/clay_pool.jpg'
  },
  {
    name: 'Clay Pool',
    resources: ['clay'],
    type: 'basicResource',
    numPlayers: 5,
    imageURL: '/img/age1/clay-pool-5.jpg',
    snapshotURL: '/img/snapshot/clay_pool.jpg'
  },
  {
    name: 'Barracks',
    costs: ['metal'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 1
    },
    imageURL: '/img/age1/barracks-3.jpg',
    snapshotURL: '/img/snapshot/military_single.jpg'
  },
  {
    name: 'Barracks',
    costs: ['metal'],
    type: 'military',
    numPlayers: 5,
    effect: {
      kind: 'might',
      amount: 1
    },
    imageURL: '/img/age1/barracks-5.jpg',
    snapshotURL: '/img/snapshot/military_single.jpg'
  },
  {
    name: 'Baths',
    costs: ['stone'],
    upgradesTo: ['Aqueduct'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 3
    },
    imageURL: '/img/age1/baths-3.jpg',
    snapshotURL: '/img/snapshot/3victory.jpg'
  },
  {
    name: 'Glassworks',
    resources: ['glass'],
    type: 'advancedResource',
    numPlayers: 3,
    imageURL: '/img/age1/glassworks-3.jpg',
    snapshotURL: '/img/snapshot/glassworks.jpg'
  },
  {
    name: 'Glassworks',
    resources: ['glass'],
    type: 'advancedResource',
    numPlayers: 6,
    imageURL: '/img/age1/glassworks-6.jpg',
    snapshotURL: '/img/snapshot/glassworks.jpg'
  },
  {
    name: 'Stone Pit',
    resources: ['stone'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age1/stone-pit-3.jpg',
    snapshotURL: '/img/snapshot/stone_pit.jpg'
  },
  {
    name: 'Stone Pit',
    resources: ['stone'],
    type: 'basicResource',
    numPlayers: 5,
    imageURL: '/img/age1/stone-pit-5.jpg',
    snapshotURL: '/img/snapshot/stone_pit.jpg'
  },
  {
    name: 'Clay Pit',
    costs: [1],
    resources: ['clay/metal'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age1/clay-pit-3.jpg',
    snapshotURL: '/img/snapshot/clay_pit.jpg'
  },
  {
    name: 'Timber Yard',
    costs: [1],
    resources: ['stone/wood'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age1/clay-pit-3.jpg',
    snapshotURL: '/img/snapshot/timber_yard.jpg'
  },
  {
    name: 'Baths',
    costs: ['stone'],
    upgradesTo: ['Aqueduct'],
    type: 'civilian',
    numPlayers: 7,
    atEnd: {
      gives: 'VP',
      amount: 3
    },
    imageURL: '/img/age1/baths-7.jpg',
    snapshotURL: '/img/snapshot/3victory.jpg'
  },
  {
    name: 'West Trading Post',
    upgradesTo: ['Forum'],
    type: 'economic',
    numPlayers: 7,
    effect: {
      kind: 'basicTrade',
      direction: 'left'
    },
    imageURL: '/img/age1/west-trading-post-7.jpg',
    snapshotURL: '/img/snapshot/west_trading_post.jpg'
  },
  {
    name: 'East Trading Post',
    upgradesTo: ['Forum'],
    type: 'economic',
    numPlayers: 7,
    effect: {
      kind: 'basicTrade',
      direction: 'right'
    },
    imageURL: '/img/age1/east-trading-post-7.jpg',
    snapshotURL: '/img/snapshot/east_trading_post.jpg'
  },
  {
    name: 'Tavern',
    numPlayers: 7,
    type: 'economic',
    onPlay: {
      type: 'gold',
      amount: 5
    },
    imageURL: '/img/age1/tavern-7.jpg',
    snapshotURL: '/img/snapshot/tavern_5coin.jpg'
  },
  {
    name: 'Tavern',
    numPlayers: 4,
    type: 'economic',
    onPlay: {
      type: 'gold',
      amount: 5
    },
    imageURL: '/img/age1/tavern-4.jpg',
    snapshotURL: '/img/snapshot/tavern_5coin.jpg'
  },
  {
    name: 'Tavern',
    numPlayers: 5,
    type: 'economic',
    onPlay: {
      type: 'gold',
      amount: 5
    },
    imageURL: '/img/age1/tavern-5.jpg',
    snapshotURL: '/img/snapshot/tavern_5coin.jpg'
  },
  {
    name: 'Pawn Shop',
    type: 'civilian',
    numPlayers: 7,
    atEnd: {
      gives: 'VP',
      amount: 3
    },
    imageURL: '/img/age1/pawnshop-7.jpg',
    snapshotURL: '/img/snapshot/3victory.jpg'
  },
  {
    name: 'Pawn Shop',
    type: 'civilian',
    numPlayers: 4,
    atEnd: {
      gives: 'VP',
      amount: 3
    },
    imageURL: '/img/age1/pawnshop-4.jpg',
    snapshotURL: '/img/snapshot/3victory.jpg'
  },
  {
    name: 'Excavation',
    resources: ['stone/brick'],
    type: 'basicResource',
    numPlayers: 4,
    costs: [1],
    imageURL: '/img/age1/excavation-4.jpg',
    snapshotURL: '/img/snapshot/excavation.jpg'
  },
  {
    name: 'Forest Cave',
    resources: ['wood/metal'],
    type: 'basicResource',
    numPlayers: 5,
    costs: [1],
    imageURL: '/img/age1/forest-cave-5.jpg',
    snapshotURL: '/img/snapshot/forest_cave.jpg'
  },
  {
    name: 'Tree Farm',
    resources: ['wood/brick'],
    type: 'basicResource',
    numPlayers: 6,
    costs: [1],
    imageURL: '/img/age1/tree-farm-6.jpg',
    snapshotURL: '/img/snapshot/tree_farm.jpg'
  },
  {
    name: 'Mine',
    resources: ['stone/metal'],
    type: 'basicResource',
    numPlayers: 6,
    costs: [1],
    imageURL: '/img/age1/mine-6.jpg',
    snapshotURL: '/img/snapshot/mine.jpg'
  }
]

const ageTwoDeck = [
  {
    name: 'School',
    upgradesTo: ['Academy', 'Study'],
    costs: ['wood', 'papyrus'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 3
  },
  {
    name: 'School',
    upgradesTo: ['Academy', 'Study'],
    costs: ['wood', 'papyrus'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 7
  },
  {
    name: 'Press',
    resources: ['papyrus'],
    type: 'advancedResource',
    numPlayers: 3
  },
  {
    name: 'Press',
    resources: ['papyrus'],
    type: 'advancedResource',
    numPlayers: 5
  },
  {
    name: 'Statue',
    costs: ['metal', 'metal', 'wood'],
    upgradesFrom: ['Theater'],
    upgradesTo: ['Gardens'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 4
    }
  },
  {
    name: 'Statue',
    costs: ['metal', 'metal', 'wood'],
    upgradesFrom: ['Theater'],
    upgradesTo: ['Gardens'],
    type: 'civilian',
    numPlayers: 7,
    atEnd: {
      gives: 'VP',
      amount: 4
    }
  },
  {
    name: 'Archery Range',
    costs: ['metal', 'wood', 'wood'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesFrom: ['Workshop']
  },
  {
    name: 'Archery Range',
    costs: ['metal', 'wood', 'wood'],
    type: 'military',
    numPlayers: 6,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesFrom: ['Workshop']
  },
  {
    name: 'Temple',
    costs: ['brick', 'glass', 'wood'],
    upgradesFrom: ['Altar'],
    upgradesTo: ['Pantheon'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 3
    }
  },
  {
    name: 'Temple',
    costs: ['brick', 'glass', 'wood'],
    upgradesFrom: ['Altar'],
    upgradesTo: ['Pantheon'],
    type: 'civilian',
    numPlayers: 6,
    atEnd: {
      gives: 'VP',
      amount: 3
    }
  },
  {
    name: 'Aqueduct',
    costs: ['stone', 'stone', 'stone'],
    upgradesFrom: ['Baths'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 5
    }
  },
  {
    name: 'Aqueduct',
    costs: ['stone', 'stone', 'stone'],
    upgradesFrom: ['Baths'],
    type: 'civilian',
    numPlayers: 7,
    atEnd: {
      gives: 'VP',
      amount: 5
    }
  },
  {
    name: 'Caravansery',
    numPlayers: 3,
    type: 'economic',
    costs: ['wood', 'wood'],
    upgradesFrom: ['Marketplace'],
    upgradesTo: ['Lighthouse'],
    resources: ['wood/stone/metal/brick']
  },
  {
    name: 'Caravansery',
    numPlayers: 6,
    type: 'economic',
    costs: ['wood', 'wood'],
    upgradesFrom: ['Marketplace'],
    upgradesTo: ['Lighthouse'],
    resources: ['wood/stone/metal/brick']
  },
  {
    name: 'Caravansery',
    numPlayers: 5,
    type: 'economic',
    costs: ['wood', 'wood'],
    upgradesFrom: ['Marketplace'],
    upgradesTo: ['Lighthouse'],
    resources: ['wood/stone/metal/brick']
  },
  {
    name: 'Foundry',
    costs: [1],
    resources: ['metal', 'metal'],
    type: 'basicResource',
    numPlayers: 3
  },
  {
    name: 'Foundry',
    costs: [1],
    resources: ['metal', 'metal'],
    type: 'basicResource',
    numPlayers: 4
  },
  {
    name: 'Vineyard',
    numPlayers: 3,
    type: 'economic',
    onPlay: {
      type: 'gold',
      amount: 1,
      from: 'basicResources',
      direction: 'omni'
    }
  },
  {
    name: 'Vineyard',
    numPlayers: 6,
    type: 'economic',
    onPlay: {
      type: 'gold',
      amount: 1,
      from: 'basicResources',
      direction: 'omni'
    }
  },
  {
    name: 'Laboratory',
    upgradesTo: ['Observatory', 'Siege Workshop'],
    costs: ['brick', 'brick', 'papyrus'],
    resources: ['wheel'],
    type: 'science',
    upgradesFrom: ['Workshop'],
    numPlayers: 3
  },
  {
    name: 'Laboratory',
    upgradesTo: ['Observatory', 'Siege Workshop'],
    costs: ['brick', 'brick', 'papyrus'],
    resources: ['wheel'],
    type: 'science',
    upgradesFrom: ['Workshop'],
    numPlayers: 5
  },
  {
    name: 'Sawmill',
    costs: [1],
    resources: ['wood', 'wood'],
    type: 'basicResource',
    numPlayers: 3
  },
  {
    name: 'Sawmill',
    costs: [1],
    resources: ['wood', 'wood'],
    type: 'basicResource',
    numPlayers: 4
  },
  {
    name: 'Dispensary',
    upgradesTo: ['Lodge', 'Arena'],
    costs: ['metal', 'metal', 'glass'],
    resources: ['compass'],
    type: 'science',
    upgradesFrom: ['Apothecary'],
    numPlayers: 3
  },
  {
    name: 'Dispensary',
    upgradesTo: ['Lodge', 'Arena'],
    costs: ['metal', 'metal', 'glass'],
    resources: ['compass'],
    type: 'science',
    upgradesFrom: ['Apothecary'],
    numPlayers: 4
  },
  {
    name: 'Library',
    upgradesTo: ['Senate', 'University'],
    costs: ['stone', 'stone', 'silk'],
    resources: ['tablet'],
    type: 'science',
    upgradesFrom: ['Scriptorium'],
    numPlayers: 3
  },
  {
    name: 'Library',
    upgradesTo: ['Senate', 'University'],
    costs: ['stone', 'stone', 'silk'],
    resources: ['tablet'],
    type: 'science',
    upgradesFrom: ['Scriptorium'],
    numPlayers: 6
  },
  {
    name: 'Glassworks',
    resources: ['glass'],
    type: 'advancedResource',
    numPlayers: 3
  },
  {
    name: 'Glassworks',
    resources: ['glass'],
    type: 'advancedResource',
    numPlayers: 5
  },
  {
    name: 'Stables',
    costs: ['metal', 'wood', 'brick'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesFrom: ['Apothecary']
  },
  {
    name: 'Stables',
    costs: ['metal', 'wood', 'brick'],
    type: 'military',
    numPlayers: 5,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesFrom: ['Apothecary']
  },
  {
    name: 'Walls',
    costs: ['stone', 'stone', 'stone'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesTo: ['Fortifications']
  },
  {
    name: 'Quarry',
    costs: [1],
    resources: ['stone', 'stone'],
    type: 'basicResource',
    numPlayers: 3
  },
  {
    name: 'Quarry',
    costs: [1],
    resources: ['stone', 'stone'],
    type: 'basicResource',
    numPlayers: 4
  },
  {
    name: 'Loom',
    resources: ['silk'],
    type: 'advancedResource',
    numPlayers: 3
  },
  {
    name: 'Loom',
    resources: ['silk'],
    type: 'advancedResource',
    numPlayers: 5
  },
  {
    name: 'Brickyard',
    costs: [1],
    resources: ['brick', 'brick'],
    type: 'basicResource',
    numPlayers: 3
  },
  {
    name: 'Brickyard',
    costs: [1],
    resources: ['brick', 'brick'],
    type: 'basicResource',
    numPlayers: 4
  },
  {
    name: 'Forum',
    numPlayers: 3,
    type: 'economic',
    costs: ['brick', 'brick'],
    upgradesFrom: ['Trading Post'],
    upgradesTo: ['Haven'],
    resources: ['glass/silk/papyrus']
  },
  {
    name: 'Forum',
    numPlayers: 7,
    type: 'economic',
    costs: ['brick', 'brick'],
    upgradesFrom: ['Trading Post'],
    upgradesTo: ['Haven'],
    resources: ['glass/silk/papyrus']
  },
  {
    name: 'Forum',
    numPlayers: 6,
    type: 'economic',
    costs: ['brick', 'brick'],
    upgradesFrom: ['Trading Post'],
    upgradesTo: ['Haven'],
    resources: ['glass/silk/papyrus']
  },
  {
    name: 'Courthouse',
    costs: ['brick', 'brick', 'silk'],
    upgradesFrom: ['Scriptorium'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 4
    }
  },
  {
    name: 'Courthouse',
    costs: ['brick', 'brick', 'silk'],
    upgradesFrom: ['Scriptorium'],
    type: 'civilian',
    numPlayers: 5,
    atEnd: {
      gives: 'VP',
      amount: 4
    }
  },
  {
    name: 'Walls',
    costs: ['stone', 'stone', 'stone'],
    type: 'military',
    numPlayers: 7,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesTo: ['Fortifications']
  },
  {
    name: 'Bazaar',
    numPlayers: 7,
    type: 'economic',
    onPlay: {
      type: 'gold',
      amount: 2,
      from: 'advancedResources',
      direction: 'omni'
    }
  },
  {
    name: 'Bazaar',
    numPlayers: 4,
    type: 'economic',
    onPlay: {
      type: 'gold',
      amount: 2,
      from: 'advancedResources',
      direction: 'omni'
    }
  },
  {
    name: 'Training Ground',
    costs: ['metal', 'metal', 'wood'],
    type: 'military',
    numPlayers: 7,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesTo: ['Circus']
  },
  {
    name: 'Training Ground',
    costs: ['metal', 'metal', 'wood'],
    type: 'military',
    numPlayers: 4,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesTo: ['Circus']
  },
  {
    name: 'Training Ground',
    costs: ['metal', 'metal', 'wood'],
    type: 'military',
    numPlayers: 6,
    effect: {
      kind: 'might',
      amount: 2
    },
    upgradesTo: ['Circus']
  }
]

const ageThreeDeck = [
  {
    name: 'University',
    upgradesFrom: ['Library'],
    costs: ['wood', 'wood', 'papyrus', 'glass'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 3
  },
  {
    name: 'University',
    upgradesFrom: ['Library'],
    costs: ['wood', 'wood', 'papyrus', 'glass'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 4
  },
  {
    name: 'Observatory',
    upgradesFrom: ['Laboratory'],
    costs: ['metal', 'metal', 'silk', 'glass'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 3
  },
  {
    name: 'Observatory',
    upgradesFrom: ['Laboratory'],
    costs: ['metal', 'metal', 'silk', 'glass'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 7
  },
  {
    name: 'Pantheon',
    costs: ['brick', 'brick', 'silk', 'metal', 'glass', 'papyrus'],
    upgradesFrom: ['Temple'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 7
    }
  },
  {
    name: 'Pantheon',
    costs: ['brick', 'brick', 'silk', 'metal', 'glass', 'papyrus'],
    upgradesFrom: ['Temple'],
    type: 'civilian',
    numPlayers: 6,
    atEnd: {
      gives: 'VP',
      amount: 7
    }
  },
  {
    name: 'Town Hall',
    costs: ['stone', 'stone', 'metal', 'glass'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 6
    }
  },
  {
    name: 'Town Hall',
    costs: ['stone', 'stone', 'metal', 'glass'],
    type: 'civilian',
    numPlayers: 6,
    atEnd: {
      gives: 'VP',
      amount: 6
    }
  },
  {
    name: 'Town Hall',
    costs: ['stone', 'stone', 'metal', 'glass'],
    type: 'civilian',
    numPlayers: 5,
    atEnd: {
      gives: 'VP',
      amount: 6
    }
  },
  {
    name: 'Arsenal',
    costs: ['metal', 'wood', 'wood', 'silk'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Arsenal',
    costs: ['metal', 'wood', 'wood', 'silk'],
    type: 'military',
    numPlayers: 4,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Arsenal',
    costs: ['metal', 'wood', 'wood', 'silk'],
    type: 'military',
    numPlayers: 7,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Siege Workshop',
    costs: ['brick', 'brick', 'wood', 'brick'],
    type: 'military',
    upgradesFrom: ['Laboratory'],
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Siege Workshop',
    costs: ['brick', 'brick', 'wood', 'brick'],
    type: 'military',
    upgradesFrom: ['Laboratory'],
    numPlayers: 5,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Arena',
    numPlayers: 3,
    type: 'economic',
    costs: ['stone', 'stone', 'metal'],
    upgradesFrom: ['Dispensary'],
    onPlay: {
      type: 'gold',
      amount: 3,
      from: 'wonder',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'wonder',
      direction: 'own'
    }
  },
  {
    name: 'Arena',
    numPlayers: 5,
    type: 'economic',
    costs: ['stone', 'stone', 'metal'],
    upgradesFrom: ['Dispensary'],
    onPlay: {
      type: 'gold',
      amount: 3,
      from: 'wonder',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'wonder',
      direction: 'own'
    }
  },
  {
    name: 'Arena',
    numPlayers: 7,
    type: 'economic',
    costs: ['stone', 'stone', 'metal'],
    upgradesFrom: ['Dispensary'],
    onPlay: {
      type: 'gold',
      amount: 3,
      from: 'wonder',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'wonder',
      direction: 'own'
    }
  },
  {
    name: 'Fortifications',
    costs: ['metal', 'metal', 'metal', 'stone'],
    type: 'military',
    upgradesFrom: ['Walls'],
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Fortifications',
    costs: ['metal', 'metal', 'metal', 'stone'],
    type: 'military',
    upgradesFrom: ['Walls'],
    numPlayers: 7,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Lodge',
    upgradesFrom: ['Dispensary'],
    costs: ['brick', 'brick', 'silk', 'papyrus'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 3
  },
  {
    name: 'Lodge',
    upgradesFrom: ['Dispensary'],
    costs: ['brick', 'brick', 'silk', 'papyrus'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 6
  },
  {
    name: 'Palace',
    costs: ['stone', 'metal', 'wood', 'brick', 'glass', 'papyrus', 'silk'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 8
    }
  },
  {
    name: 'Palace',
    costs: ['stone', 'metal', 'wood', 'brick', 'glass', 'papyrus', 'silk'],
    type: 'civilian',
    numPlayers: 7,
    atEnd: {
      gives: 'VP',
      amount: 8
    }
  },
  {
    name: 'Academy',
    upgradesFrom: ['School'],
    costs: ['stone', 'stone', 'stone', 'glass'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 3
  },
  {
    name: 'Academy',
    upgradesFrom: ['School'],
    costs: ['stone', 'stone', 'stone', 'glass'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 7
  },
  {
    name: 'Gardens',
    costs: ['brick', 'brick', 'wood'],
    upgradesFrom: ['Statue'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 5
    }
  },
  {
    name: 'Gardens',
    costs: ['brick', 'brick', 'wood'],
    upgradesFrom: ['Statue'],
    type: 'civilian',
    numPlayers: 4,
    atEnd: {
      gives: 'VP',
      amount: 5
    }
  },
  {
    name: 'Study',
    upgradesFrom: ['School'],
    costs: ['wood', 'papyrus', 'silk'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 3
  },
  {
    name: 'Study',
    upgradesFrom: ['School'],
    costs: ['wood', 'papyrus', 'silk'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 5
  },
  {
    name: 'Lighthouse',
    numPlayers: 3,
    type: 'economic',
    costs: ['stone', 'glass'],
    upgradesFrom: ['Caravansery'],
    onPlay: {
      type: 'gold',
      amount: 1,
      from: 'economic',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'economic',
      direction: 'own'
    }
  },
  {
    name: 'Lighthouse',
    numPlayers: 6,
    type: 'economic',
    costs: ['stone', 'glass'],
    upgradesFrom: ['Caravansery'],
    onPlay: {
      type: 'gold',
      amount: 1,
      from: 'economic',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'economic',
      direction: 'own'
    }
  },
  {
    name: 'Haven',
    numPlayers: 3,
    type: 'economic',
    costs: ['wood', 'metal', 'silk'],
    upgradesFrom: ['Forum'],
    onPlay: {
      type: 'gold',
      amount: 1,
      from: 'basicResource',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'basicResource',
      direction: 'own'
    }
  },
  {
    name: 'Haven',
    numPlayers: 4,
    type: 'economic',
    costs: ['wood', 'metal', 'silk'],
    upgradesFrom: ['Forum'],
    onPlay: {
      type: 'gold',
      amount: 1,
      from: 'basicResource',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'basicResource',
      direction: 'own'
    }
  },
  {
    name: 'Senate',
    costs: ['wood', 'wood', 'stone', 'metal'],
    upgradesFrom: ['Library'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 6
    }
  },
  {
    name: 'Senate',
    costs: ['wood', 'wood', 'stone', 'metal'],
    upgradesFrom: ['Library'],
    type: 'civilian',
    numPlayers: 5,
    atEnd: {
      gives: 'VP',
      amount: 6
    }
  },
  {
    name: 'Circus',
    costs: ['stone', 'stone', 'stone', 'metal'],
    type: 'military',
    upgradesFrom: ['Training Grounds'],
    numPlayers: 4,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Circus',
    costs: ['stone', 'stone', 'stone', 'metal'],
    type: 'military',
    upgradesFrom: ['Training Grounds'],
    numPlayers: 5,
    effect: {
      kind: 'might',
      amount: 6
    }
  },
  {
    name: 'Circus',
    costs: ['stone', 'stone', 'stone', 'metal'],
    type: 'military',
    upgradesFrom: ['Training Grounds'],
    numPlayers: 6,
    effect: {
      kind: 'might',
      amount: 3
    }
  },
  {
    name: 'Chamber of Commerce',
    numPlayers: 6,
    type: 'economic',
    costs: ['brick', 'brick', 'papyrus'],
    onPlay: {
      type: 'gold',
      amount: 2,
      from: 'advancedResource',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 2,
      from: 'advancedResource',
      direction: 'own'
    }
  },
  {
    name: 'Chamber of Commerce',
    numPlayers: 4,
    type: 'economic',
    costs: ['brick', 'brick', 'papyrus'],
    onPlay: {
      type: 'gold',
      amount: 2,
      from: 'advancedResource',
      direction: 'own'
    },
    atEnd: {
      gives: 'VP',
      amount: 2,
      from: 'advancedResource',
      direction: 'own'
    }
  }
]

const guildDeck = [
  {
    name: 'Builders Guild',
    costs: ['stone', 'stone', 'brick', 'brick', 'glass'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'wonder',
      direction: 'omni'
    }
  },
  {
    name: 'Craftsmens Guild',
    costs: ['stone', 'stone', 'metal', 'metal'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 2,
      from: 'advancedResource',
      direction: 'both'
    }
  },
  {
    name: 'Spies Guild',
    costs: ['brick', 'brick', 'brick', 'glass'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'military',
      direction: 'both'
    }
  },
  {
    name: 'Traders Guild',
    costs: ['glass', 'silk', 'papyrus'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'economic',
      direction: 'both'
    }
  },
  {
    name: 'Philosophers Guild',
    costs: ['brick', 'brick', 'brick', 'papyrus', 'silk'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'science',
      direction: 'both'
    }
  },
  {
    name: 'Magistrates Guild',
    costs: ['wood', 'wood', 'wood', 'stone', 'silk'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'civilian',
      direction: 'both'
    }
  },
  {
    name: 'Strategists Guild',
    costs: ['stone', 'silk', 'metal', 'metal'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'defeat',
      direction: 'both'
    }
  },
  {
    name: 'Shipowners Guild',
    costs: ['wood', 'wood', 'wood', 'glass', 'papyrus'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'combo',
      direction: 'own'
    }
  },
  {
    name: 'Workers Guild',
    costs: ['metal', 'metal', 'brick', 'stone', 'wood'],
    type: 'guild',
    atEnd: {
      gives: 'VP',
      amount: 1,
      from: 'basicResource',
      direction: 'both'
    }
  },
  {
    name: 'Scientists Guild',
    costs: ['wood', 'wood', 'metal', 'metal', 'papyrus'],
    type: 'guild',
    resources: ['wheel/tablet/compass']
  }
]

// console.log(ageOneDeck.filter(card => card.numPlayers <= 3).length)
// console.log(ageOneDeck.filter(card => card.numPlayers <= 4).length)
// console.log(ageOneDeck.filter(card => card.numPlayers <= 5).length)
// console.log(ageOneDeck.filter(card => card.numPlayers <= 6).length)
// console.log(ageOneDeck.length)

// console.log(ageTwoDeck.filter(card => card.numPlayers <= 3).length)
// console.log(ageTwoDeck.filter(card => card.numPlayers <= 4).length)
// console.log(ageTwoDeck.filter(card => card.numPlayers <= 5).length)
// console.log(ageTwoDeck.filter(card => card.numPlayers <= 6).length)
// console.log(ageTwoDeck.length)

// console.log(ageThreeDeck.filter(card => card.numPlayers <= 3).length + 5)
// console.log(ageThreeDeck.filter(card => card.numPlayers <= 4).length + 6)
// console.log(ageThreeDeck.filter(card => card.numPlayers <= 5).length + 7)
// console.log(ageThreeDeck.filter(card => card.numPlayers <= 6).length + 8)
// console.log(ageThreeDeck.length + 9)

module.exports = {ageOneDeck, ageTwoDeck, ageThreeDeck, guildDeck}
