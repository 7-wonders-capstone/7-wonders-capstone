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
    snapshotURL: '/img/snapshot/east_trading_post.jpg'
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
    resources: ['brick'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age1/clay-pool-3.jpg',
    snapshotURL: '/img/snapshot/clay_pool.jpg'
  },
  {
    name: 'Clay Pool',
    resources: ['brick'],
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
    resources: ['brick/metal'],
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
    imageURL: '/img/age1/timber-yard-3.jpg',
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
    numPlayers: 3,
    imageURL: '/img/age2/school-3.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
  },
  {
    name: 'School',
    upgradesTo: ['Academy', 'Study'],
    costs: ['wood', 'papyrus'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 7,
    imageURL: '/img/age2/school-7.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
  },
  {
    name: 'Press',
    resources: ['papyrus'],
    type: 'advancedResource',
    numPlayers: 3,
    imageURL: '/img/age2/press-3.jpg',
    snapshotURL: '/img/snapshot/press.jpg'
  },
  {
    name: 'Press',
    resources: ['papyrus'],
    type: 'advancedResource',
    numPlayers: 5,
    imageURL: '/img/age2/press-5.jpg',
    snapshotURL: '/img/snapshot/press.jpg'
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
    },
    imageURL: '/img/age2/statue-3.jpg',
    snapshotURL: '/img/snapshot/4victory.jpg'
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
    },
    imageURL: '/img/age2/statue-7.jpg',
    snapshotURL: '/img/snapshot/4victory.jpg'
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
    upgradesFrom: ['Workshop'],
    imageURL: '/img/age2/archery-range-3.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
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
    upgradesFrom: ['Workshop'],
    imageURL: '/img/age2/archery-range-3.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
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
    },
    imageURL: '/img/age2/temple-3.jpg',
    snapshotURL: '/img/snapshot/3victory.jpg'
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
    },
    imageURL: '/img/age2/temple-6.jpg',
    snapshotURL: '/img/snapshot/3victory.jpg'
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
    },
    imageURL: '/img/age2/aqueduct-3.jpg',
    snapshotURL: '/img/snapshot/5victory.jpg'
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
    },
    imageURL: '/img/age2/aqueduct-5.jpg',
    snapshotURL: '/img/snapshot/5victory.jpg'
  },
  {
    name: 'Caravansery',
    numPlayers: 3,
    type: 'economic',
    costs: ['wood', 'wood'],
    upgradesFrom: ['Marketplace'],
    upgradesTo: ['Lighthouse'],
    resources: ['wood/stone/metal/brick'],
    imageURL: '/img/age2/caravansery-3.jpg',
    snapshotURL: '/img/snapshot/caravansery.jpg'
  },
  {
    name: 'Caravansery',
    numPlayers: 6,
    type: 'economic',
    costs: ['wood', 'wood'],
    upgradesFrom: ['Marketplace'],
    upgradesTo: ['Lighthouse'],
    resources: ['wood/stone/metal/brick'],
    imageURL: '/img/age2/caravansery-6.jpg',
    snapshotURL: '/img/snapshot/caravansery.jpg'
  },
  {
    name: 'Caravansery',
    numPlayers: 5,
    type: 'economic',
    costs: ['wood', 'wood'],
    upgradesFrom: ['Marketplace'],
    upgradesTo: ['Lighthouse'],
    resources: ['wood/stone/metal/brick'],
    imageURL: '/img/age2/caravansery-5.jpg',
    snapshotURL: '/img/snapshot/caravansery.jpg'
  },
  {
    name: 'Foundry',
    costs: [1],
    resources: ['metal', 'metal'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age2/foundry-3.jpg',
    snapshotURL: '/img/snapshot/foundry.jpg'
  },
  {
    name: 'Foundry',
    costs: [1],
    resources: ['metal', 'metal'],
    type: 'basicResource',
    numPlayers: 4,
    imageURL: '/img/age2/foundry-4.jpg',
    snapshotURL: '/img/snapshot/foundry.jpg'
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
    },
    imageURL: '/img/age2/vineyard-3.jpg',
    snapshotURL: '/img/snapshot/vineyard.jpg'
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
    },
    imageURL: '/img/age2/vineyard-3.jpg',
    snapshotURL: '/img/snapshot/vineyard.jpg'
  },
  {
    name: 'Laboratory',
    upgradesTo: ['Observatory', 'Siege Workshop'],
    costs: ['brick', 'brick', 'papyrus'],
    resources: ['wheel'],
    type: 'science',
    upgradesFrom: ['Workshop'],
    numPlayers: 3,
    imageURL: '/img/age2/laboratory-3.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
  },
  {
    name: 'Laboratory',
    upgradesTo: ['Observatory', 'Siege Workshop'],
    costs: ['brick', 'brick', 'papyrus'],
    resources: ['wheel'],
    type: 'science',
    upgradesFrom: ['Workshop'],
    numPlayers: 5,
    imageURL: '/img/age2/laboratory-3.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
  },
  {
    name: 'Sawmill',
    costs: [1],
    resources: ['wood', 'wood'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age2/sawmill-3.jpg',
    snapshotURL: '/img/snapshot/sawmill.jpg'
  },
  {
    name: 'Sawmill',
    costs: [1],
    resources: ['wood', 'wood'],
    type: 'basicResource',
    numPlayers: 4,
    imageURL: '/img/age2/sawmill-4.jpg',
    snapshotURL: '/img/snapshot/sawmill.jpg'
  },
  {
    name: 'Dispensary',
    upgradesTo: ['Lodge', 'Arena'],
    costs: ['metal', 'metal', 'glass'],
    resources: ['compass'],
    type: 'science',
    upgradesFrom: ['Apothecary'],
    numPlayers: 3,
    imageURL: '/img/age2/dispensary-3.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
  },
  {
    name: 'Dispensary',
    upgradesTo: ['Lodge', 'Arena'],
    costs: ['metal', 'metal', 'glass'],
    resources: ['compass'],
    type: 'science',
    upgradesFrom: ['Apothecary'],
    numPlayers: 4,
    imageURL: '/img/age2/dispensary-4.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
  },
  {
    name: 'Library',
    upgradesTo: ['Senate', 'University'],
    costs: ['stone', 'stone', 'silk'],
    resources: ['tablet'],
    type: 'science',
    upgradesFrom: ['Scriptorium'],
    numPlayers: 3,
    imageURL: '/img/age2/library-3.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
  },
  {
    name: 'Library',
    upgradesTo: ['Senate', 'University'],
    costs: ['stone', 'stone', 'silk'],
    resources: ['tablet'],
    type: 'science',
    upgradesFrom: ['Scriptorium'],
    numPlayers: 6,
    imageURL: '/img/age2/library-6.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
  },
  {
    name: 'Glassworks',
    resources: ['glass'],
    type: 'advancedResource',
    numPlayers: 3,
    imageURL: '/img/age2/glassworks-3.jpg',
    snapshotURL: '/img/snapshot/glassworks.jpg'
  },
  {
    name: 'Glassworks',
    resources: ['glass'],
    type: 'advancedResource',
    numPlayers: 5,
    imageURL: '/img/age2/glassworks-5.jpg',
    snapshotURL: '/img/snapshot/glassworks.jpg'
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
    upgradesFrom: ['Apothecary'],
    imageURL: '/img/age2/stables-3.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
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
    upgradesFrom: ['Apothecary'],
    imageURL: '/img/age2/stables-5.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
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
    upgradesTo: ['Fortifications'],
    imageURL: '/img/age2/walls-3.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
  },
  {
    name: 'Quarry',
    costs: [1],
    resources: ['stone', 'stone'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age2/quarry-3.jpg',
    snapshotURL: '/img/snapshot/quarry.jpg'
  },
  {
    name: 'Quarry',
    costs: [1],
    resources: ['stone', 'stone'],
    type: 'basicResource',
    numPlayers: 4,
    imageURL: '/img/age2/quarry-4.jpg',
    snapshotURL: '/img/snapshot/quarry.jpg'
  },
  {
    name: 'Loom',
    resources: ['silk'],
    type: 'advancedResource',
    numPlayers: 3,
    imageURL: '/img/age2/loom-3.jpg',
    snapshotURL: '/img/snapshot/loom.jpg'
  },
  {
    name: 'Loom',
    resources: ['silk'],
    type: 'advancedResource',
    numPlayers: 5,
    imageURL: '/img/age2/loom-3.jpg',
    snapshotURL: '/img/snapshot/loom.jpg'
  },
  {
    name: 'Brickyard',
    costs: [1],
    resources: ['brick', 'brick'],
    type: 'basicResource',
    numPlayers: 3,
    imageURL: '/img/age2/brickyard-3.jpg',
    snapshotURL: '/img/snapshot/brickyard.jpg'
  },
  {
    name: 'Brickyard',
    costs: [1],
    resources: ['brick', 'brick'],
    type: 'basicResource',
    numPlayers: 4,
    imageURL: '/img/age2/brickyard-3.jpg',
    snapshotURL: '/img/snapshot/brickyard.jpg'
  },
  {
    name: 'Forum',
    numPlayers: 3,
    type: 'economic',
    costs: ['brick', 'brick'],
    upgradesFrom: ['Trading Post'],
    upgradesTo: ['Haven'],
    resources: ['glass/silk/papyrus'],
    imageURL: '/img/age2/forum-3.jpg',
    snapshotURL: '/img/snapshot/forum.jpg'
  },
  {
    name: 'Forum',
    numPlayers: 7,
    type: 'economic',
    costs: ['brick', 'brick'],
    upgradesFrom: ['Trading Post'],
    upgradesTo: ['Haven'],
    resources: ['glass/silk/papyrus'],
    imageURL: '/img/age2/forum-7.jpg',
    snapshotURL: '/img/snapshot/forum.jpg'
  },
  {
    name: 'Forum',
    numPlayers: 6,
    type: 'economic',
    costs: ['brick', 'brick'],
    upgradesFrom: ['Trading Post'],
    upgradesTo: ['Haven'],
    resources: ['glass/silk/papyrus'],
    imageURL: '/img/age2/forum-6.jpg',
    snapshotURL: '/img/snapshot/forum.jpg'
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
    },
    imageURL: '/img/age2/courthouse-3.jpg',
    snapshotURL: '/img/snapshot/4victory.jpg'
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
    },
    imageURL: '/img/age2/courthouse-5.jpg',
    snapshotURL: '/img/snapshot/4victory.jpg'
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
    upgradesTo: ['Fortifications'],
    imageURL: '/img/age2/walls-7.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
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
    },
    imageURL: '/img/age2/bazar-3.jpg',
    snapshotURL: '/img/snapshot/bazar.jpg'
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
    },
    imageURL: '/img/age2/bazar-4.jpg',
    snapshotURL: '/img/snapshot/bazar.jpg'
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
    upgradesTo: ['Circus'],
    imageURL: '/img/age2/training-ground-7.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
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
    upgradesTo: ['Circus'],
    imageURL: '/img/age2/training-ground-4.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
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
    upgradesTo: ['Circus'],
    imageURL: '/img/age2/training-ground-6.jpg',
    snapshotURL: '/img/snapshot/military_double.jpg'
  }
]

const ageThreeDeck = [
  {
    name: 'University',
    upgradesFrom: ['Library'],
    costs: ['wood', 'wood', 'papyrus', 'glass'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age3/university-3.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
  },
  {
    name: 'University',
    upgradesFrom: ['Library'],
    costs: ['wood', 'wood', 'papyrus', 'glass'],
    resources: ['tablet'],
    type: 'science',
    numPlayers: 4,
    imageURL: '/img/age3/university-4.jpg',
    snapshotURL: '/img/snapshot/science_tablet.jpg'
  },
  {
    name: 'Observatory',
    upgradesFrom: ['Laboratory'],
    costs: ['metal', 'metal', 'silk', 'glass'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age3/observatory-3.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
  },
  {
    name: 'Observatory',
    upgradesFrom: ['Laboratory'],
    costs: ['metal', 'metal', 'silk', 'glass'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 7,
    imageURL: '/img/age3/observatory-7.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
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
    },
    imageURL: '/img/age3/pantheon-3.jpg',
    snapshotURL: '/img/snapshot/7victory.jpg'
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
    },
    imageURL: '/img/age3/pantheon-6.jpg',
    snapshotURL: '/img/snapshot/7victory.jpg'
  },
  {
    name: 'Town Hall',
    costs: ['stone', 'stone', 'metal', 'glass'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 6
    },
    imageURL: '/img/age3/town-hall-3.jpg',
    snapshotURL: '/img/snapshot/6victory.jpg'
  },
  {
    name: 'Town Hall',
    costs: ['stone', 'stone', 'metal', 'glass'],
    type: 'civilian',
    numPlayers: 6,
    atEnd: {
      gives: 'VP',
      amount: 6
    },
    imageURL: '/img/age3/town-hall-6.jpg',
    snapshotURL: '/img/snapshot/6victory.jpg'
  },
  {
    name: 'Town Hall',
    costs: ['stone', 'stone', 'metal', 'glass'],
    type: 'civilian',
    numPlayers: 5,
    atEnd: {
      gives: 'VP',
      amount: 6
    },
    imageURL: '/img/age3/town-hall-5.jpg',
    snapshotURL: '/img/snapshot/6victory.jpg'
  },
  {
    name: 'Arsenal',
    costs: ['metal', 'wood', 'wood', 'silk'],
    type: 'military',
    numPlayers: 3,
    effect: {
      kind: 'might',
      amount: 3
    },
    imageURL: '/img/age3/arsenal-3.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
  },
  {
    name: 'Arsenal',
    costs: ['metal', 'wood', 'wood', 'silk'],
    type: 'military',
    numPlayers: 4,
    effect: {
      kind: 'might',
      amount: 3
    },
    imageURL: '/img/age3/arsenal-4.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
  },
  {
    name: 'Arsenal',
    costs: ['metal', 'wood', 'wood', 'silk'],
    type: 'military',
    numPlayers: 7,
    effect: {
      kind: 'might',
      amount: 3
    },
    imageURL: '/img/age3/arsenal-7.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
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
    },
    imageURL: '/img/age3/siege-workshop-3.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
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
    },
    imageURL: '/img/age3/siege-workshop-5.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
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
    },
    imageURL: '/img/age3/arena-3.jpg',
    snapshotURL: '/img/snapshot/arena.jpg'
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
    },
    imageURL: '/img/age3/arena-5.jpg',
    snapshotURL: '/img/snapshot/arena.jpg'
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
    },
    imageURL: '/img/age3/arena-7.jpg',
    snapshotURL: '/img/snapshot/arena.jpg'
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
    },
    imageURL: '/img/age3/fortifications-3.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
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
    },
    imageURL: '/img/age3/fortifications-7.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
  },
  {
    name: 'Lodge',
    upgradesFrom: ['Dispensary'],
    costs: ['brick', 'brick', 'silk', 'papyrus'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age3/lodge-3.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
  },
  {
    name: 'Lodge',
    upgradesFrom: ['Dispensary'],
    costs: ['brick', 'brick', 'silk', 'papyrus'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 6,
    imageURL: '/img/age3/lodge-6.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
  },
  {
    name: 'Palace',
    costs: ['stone', 'metal', 'wood', 'brick', 'glass', 'papyrus', 'silk'],
    type: 'civilian',
    numPlayers: 3,
    atEnd: {
      gives: 'VP',
      amount: 8
    },
    imageURL: '/img/age3/palace-3.jpg',
    snapshotURL: '/img/snapshot/8victory.jpg'
  },
  {
    name: 'Palace',
    costs: ['stone', 'metal', 'wood', 'brick', 'glass', 'papyrus', 'silk'],
    type: 'civilian',
    numPlayers: 7,
    atEnd: {
      gives: 'VP',
      amount: 8
    },
    imageURL: '/img/age3/palace-7.jpg',
    snapshotURL: '/img/snapshot/8victory.jpg'
  },
  {
    name: 'Academy',
    upgradesFrom: ['School'],
    costs: ['stone', 'stone', 'stone', 'glass'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age3/academy-3.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
  },
  {
    name: 'Academy',
    upgradesFrom: ['School'],
    costs: ['stone', 'stone', 'stone', 'glass'],
    resources: ['compass'],
    type: 'science',
    numPlayers: 7,
    imageURL: '/img/age3/academy-7.jpg',
    snapshotURL: '/img/snapshot/science_compass.jpg'
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
    },
    imageURL: '/img/age3/gardens-3.jpg',
    snapshotURL: '/img/snapshot/5victory.jpg'
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
    },
    imageURL: '/img/age3/gardens-4.jpg',
    snapshotURL: '/img/snapshot/5victory.jpg'
  },
  {
    name: 'Study',
    upgradesFrom: ['School'],
    costs: ['wood', 'papyrus', 'silk'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 3,
    imageURL: '/img/age3/study-3.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
  },
  {
    name: 'Study',
    upgradesFrom: ['School'],
    costs: ['wood', 'papyrus', 'silk'],
    resources: ['wheel'],
    type: 'science',
    numPlayers: 5,
    imageURL: '/img/age3/study-5.jpg',
    snapshotURL: '/img/snapshot/science_wheel.jpg'
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
    },
    imageURL: '/img/age3/lighthouse-3.jpg',
    snapshotURL: '/img/snapshot/lighthouse.jpg'
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
    },
    imageURL: '/img/age3/lighthouse-6.jpg',
    snapshotURL: '/img/snapshot/lighthouse.jpg'
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
    },
    imageURL: '/img/age3/haven-3.jpg',
    snapshotURL: '/img/snapshot/haven.jpg'
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
    },
    imageURL: '/img/age3/haven-4.jpg',
    snapshotURL: '/img/snapshot/haven.jpg'
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
    },
    imageURL: '/img/age3/senate-3.jpg',
    snapshotURL: '/img/snapshot/6victory.jpg'
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
    },
    imageURL: '/img/age3/senate-5.jpg',
    snapshotURL: '/img/snapshot/6victory.jpg'
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
    },
    imageURL: '/img/age3/circus-4.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
  },
  {
    name: 'Circus',
    costs: ['stone', 'stone', 'stone', 'metal'],
    type: 'military',
    upgradesFrom: ['Training Grounds'],
    numPlayers: 5,
    effect: {
      kind: 'might',
      amount: 3
    },
    imageURL: '/img/age3/circus-5.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
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
    },
    imageURL: '/img/age3/circus-6.jpg',
    snapshotURL: '/img/snapshot/military_triple.jpg'
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
    },
    imageURL: '/img/age3/chamber-of-commerce-6.jpg',
    snapshotURL: '/img/snapshot/chamber_of_commerce.jpg'
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
    },
    imageURL: '/img/age3/chamber-of-commerce-6.jpg',
    snapshotURL: '/img/snapshot/chamber_of_commerce.jpg'
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
    },
    imageURL: '/img/age3/builders-guild.jpg',
    snapshotURL: '/img/snapshot/builders_guild.jpg'
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
    },
    imageURL: '/img/age3/craftsmens-guild.jpg',
    snapshotURL: '/img/snapshot/craftmens_guild.jpg'
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
    },
    imageURL: '/img/age3/spies-guild.jpg',
    snapshotURL: '/img/snapshot/spy_guild.jpg'
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
    },
    imageURL: '/img/age3/traders-guild.jpg',
    snapshotURL: '/img/snapshot/traders_guild.jpg'
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
    },
    imageURL: '/img/age3/philosophers-guild.jpg',
    snapshotURL: '/img/snapshot/philosophers_guild.jpg'
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
    },
    imageURL: '/img/age3/magistrates-guild.jpg',
    snapshotURL: '/img/snapshot/magistrates_guild.jpg'
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
    },
    imageURL: '/img/age3/strategists-guild.jpg',
    snapshotURL: '/img/snapshot/strategy_guild.jpg'
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
    },
    imageURL: '/img/age3/shipowners-guild.jpg',
    snapshotURL: '/img/snapshot/shipowners_guild.jpg'
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
    },
    imageURL: '/img/age3/workers-guild.jpg',
    snapshotURL: '/img/snapshot/workers_guild.jpg'
  },
  {
    name: 'Scientists Guild',
    costs: ['wood', 'wood', 'metal', 'metal', 'papyrus'],
    type: 'guild',
    resources: ['wheel/tablet/compass'],
    imageURL: '/img/age3/scientists-guild.jpg',
    snapshotURL: '/img/snapshot/scientists_guild.jpg'
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
