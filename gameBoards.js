const gameBoards = [
  {
    name: 'Babylon',
    side: 'A',
    baseResource: 'brick',
    levelone: {
      cost: ['brick', 'brick'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      cost: ['wood', 'wood', 'wood'],
      resources: ['wheel/tablet/compass'],
      type: 'wonder'
    },
    levelthree: {
      cost: ['brick', 'brick', 'brick', 'brick'],
      atEnd: {
        gives: 'VP',
        amount: 7,
        type: 'wonder'
      }
    }
  },
  {
    name: 'Ephesos',
    side: 'A',
    baseResource: 'papyrus',
    levelone: {
      cost: ['stone', 'stone'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      cost: ['wood', 'wood'],
      onPlay: {
        type: 'gold',
        amount: 9
      },
      type: 'wonder'
    },
    levelthree: {
      cost: ['papyrus', 'papyrus'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    }
  },
  {
    name: 'Halikarnassos',
    side: 'A',
    baseResource: 'silk',
    levelone: {
      cost: ['brick', 'brick'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      cost: ['metal', 'metal', 'metal'],
      effect: {
        kind: 'discardPlay'
      },
      type: 'wonder'
    },
    levelthree: {
      cost: ['silk', 'silk'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    }
  },
  {
    name: 'Rhodos',
    side: 'A',
    baseResource: 'metal',
    levelone: {
      cost: ['wood', 'wood'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      cost: ['brick', 'brick', 'brick'],
      effect: {
        kind: 'might',
        amount: 2
      },
      type: 'wonder'
    },
    levelthree: {
      cost: ['metal', 'metal', 'metal', 'metal'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    }
  },
  {
    name: 'Alexandria',
    side: 'A',
    baseResource: 'glass',
    levelone: {
      cost: ['stone', 'stone'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      cost: ['metal', 'metal'],
      resources: ['metal/stone/brick/wood'],
      type: 'wonder'
    },
    levelthree: {
      cost: ['glass', 'glass'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    }
  },
  {
    name: 'Gizah',
    side: 'A',
    baseResource: 'stone',
    levelone: {
      cost: ['stone', 'stone'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      cost: ['wood', 'wood', 'wood'],
      atEnd: {
        gives: 'VP',
        amount: 5
      },
      type: 'wonder'
    },
    levelthree: {
      cost: ['stone', 'stone', 'stone', 'stone'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    }
  },
  {
    name: 'Olympia',
    side: 'A',
    baseResource: 'wood',
    levelone: {
      cost: ['wood', 'wood'],
      atEnd: {
        gives: 'VP',
        amount: 3
      },
      type: 'wonder'
    },
    leveltwo: {
      cost: ['stone', 'stone'],
      effect: {
        kind: 'freeplay'
      },
      type: 'wonder'
    },
    levelthree: {
      cost: ['metal', 'metal'],
      atEnd: {
        gives: 'VP',
        amount: 7
      },
      type: 'wonder'
    }
  }
]

module.exports = gameBoards
