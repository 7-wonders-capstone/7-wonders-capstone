const gameBoards = require('./gameBoards')
const {
  ageOneDeck,
  ageTwoDeck,
  ageThreeDeck,
  guildDeck
} = require('./cardGenerator/cardDecks')
const {dealHand, filterAgeDecks} = require('./cardGenerator/cardGenerator')

function playerGenerator(board, number, total) {
  let leftPlayer
  if (number - 1 > 0) {
    leftPlayer = number - 1
  } else {
    leftPlayer = total
  }
  let rightPlayer
  if (number + 1 <= total) {
    rightPlayer = number + 1
  } else {
    rightPlayer = 1
  }

  return {
    number: number,
    board: board,
    coins: 3,
    availableResources: [board.baseResource],
    hand: [],
    playedCards: [],
    victoryPoints: 0,
    might: 0,
    science: [],
    activeEffects: [],
    endEffects: [],
    militaryResults: [],
    leftPlayerNumber: leftPlayer,
    rightPlayerNumber: rightPlayer
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/*export */ function createPlayers(total) {
  const startingDeck = filterAgeDecks(ageOneDeck, total)
  let sessionBoards = shuffleArray(gameBoards.slice())
  const players = []
  for (let i = 1; i <= total; i++) {
    const playerBoard = sessionBoards.shift()
    let newPlayer = playerGenerator(playerBoard, i, total)
    let j = 0
    while (j < 7) {
      newPlayer.hand = newPlayer.hand.concat(dealHand(startingDeck))
      j++
    }
    players.push(newPlayer)
  }
  console.log(startingDeck.length)
  return players
}

console.log(createPlayers(4))
