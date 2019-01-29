const gameBoards = require('./gameBoards')

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

function createPlayers(total) {
  let sessionBoards = shuffleArray(gameBoards.slice())
  const players = []
  for (let i = 1; i <= total; i++) {
    const playerBoard = sessionBoards.shift()
    players.push(playerGenerator(playerBoard, i, total))
  }
  return players
}

console.log(createPlayers(4))
