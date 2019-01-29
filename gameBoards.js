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
      }
    },
    leveltwo: {
      cost: ['wood', 'wood', 'wood'],
      resources: ['wheel/tablet/compass']
    },
    levelthree: {
      cost: ['brick', 'brick', 'brick', 'brick'],
      atEnd: {
        gives: 'VP',
        amount: 7
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
      }
    },
    leveltwo: {
      cost: ['wood', 'wood'],
      onPlay: {
        type: 'gold',
        amount: 9
      }
    },
    levelthree: {
      cost: ['papyrus', 'papyrus'],
      atEnd: {
        gives: 'VP',
        amount: 7
      }
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
      }
    },
    leveltwo: {
      cost: ['metal', 'metal', 'metal'],
      effect: {
        kind: 'discardPlay'
      }
    },
    levelthree: {
      cost: ['silk', 'silk'],
      atEnd: {
        gives: 'VP',
        amount: 7
      }
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
      }
    },
    leveltwo: {
      cost: ['brick', 'brick', 'brick'],
      effect: {
        kind: 'might',
        amount: 2
      }
    },
    levelthree: {
      cost: ['metal', 'metal', 'metal', 'metal'],
      atEnd: {
        gives: 'VP',
        amount: 7
      }
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
      }
    },
    leveltwo: {
      cost: ['metal', 'metal'],
      resources: ['metal/stone/brick/wood']
    },
    levelthree: {
      cost: ['glass', 'glass'],
      atEnd: {
        gives: 'VP',
        amount: 7
      }
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
      }
    },
    leveltwo: {
      cost: ['wood', 'wood', 'wood'],
      atEnd: {
        gives: 'VP',
        amount: 5
      }
    },
    levelthree: {
      cost: ['stone', 'stone', 'stone', 'stone'],
      atEnd: {
        gives: 'VP',
        amount: 7
      }
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
      }
    },
    leveltwo: {
      cost: ['stone', 'stone'],
      effect: {
        kind: 'freeplay'
      }
    },
    levelthree: {
      cost: ['metal', 'metal'],
      atEnd: {
        gives: 'VP',
        amount: 7
      }
    }
  }
]

module.exports = gameBoards
