const gameBoards = [
  {
    name: 'Babylon',
    side: 'A',
    baseResource: 'brick',
    levelone: {
      name: 'levelone',
      cost: ['brick', 'brick'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      name: 'leveltwo',
      cost: ['wood', 'wood', 'wood'],
      resources: ['wheel/tablet/compass'],
      type: 'wonder'
    },
    levelthree: {
      name: 'levelthree',
      cost: ['brick', 'brick', 'brick', 'brick'],
      atEnd: {
        gives: 'VP',
        amount: 7,
        type: 'wonder'
      }
    },
    imageURL: '/img/babylon-a.jpg'
  },
  {
    name: 'Ephesos',
    side: 'A',
    baseResource: 'papyrus',
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
      cost: ['wood', 'wood'],
      onPlay: {
        type: 'gold',
        amount: 9
      },
      type: 'wonder'
    },
    levelthree: {
      name: 'levelthree',
      cost: ['papyrus', 'papyrus'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    },
    imageURL: '/img/ephesos-a.jpg'
  },
  {
    name: 'Halikarnassos',
    side: 'A',
    baseResource: 'silk',
    levelone: {
      name: 'levelone',
      cost: ['brick', 'brick'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      name: 'leveltwo',
      cost: ['metal', 'metal', 'metal'],
      effect: {
        kind: 'discardPlay'
      },
      type: 'wonder'
    },
    levelthree: {
      name: 'levelthree',
      cost: ['silk', 'silk'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    },
    imageURL: '/img/halikarnassos-a.jpg'
  },
  {
    name: 'Rhodos',
    side: 'A',
    baseResource: 'metal',
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
      cost: ['brick', 'brick', 'brick'],
      effect: {
        kind: 'might',
        amount: 2
      },
      type: 'wonder'
    },
    levelthree: {
      name: 'levelthree',
      cost: ['metal', 'metal', 'metal', 'metal'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    },
    imageURL: '/img/rhodos-a.jpg'
  },
  {
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
  {
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
  {
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
  }
]

module.exports = gameBoards
