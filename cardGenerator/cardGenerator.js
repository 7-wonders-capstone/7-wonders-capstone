const {ageOneDeck, ageTwoDeck, ageThreeDeck, guildDeck} = require('./cardDecks')

const shuffleCards = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const filterAgeDecks = (ageDeck, amountOfPlayers) => {
  if (ageDeck === ageThreeDeck) {
    let filteredAge3Deck = shuffleCards(
      shuffleCards(guildDeck)
        .slice(0, amountOfPlayers + 2)
        .concat(
          shuffleCards(
            ageDeck.filter(card => card.numPlayers <= amountOfPlayers)
          )
        )
    )

    return filteredAge3Deck
  } else {
    let filteredDeck = shuffleCards(
      ageDeck.filter(card => card.numPlayers <= amountOfPlayers)
    )
    return filteredDeck
  }
}

const dealHand = filteredDeck => {
  let cards = filteredDeck.shift()
  return cards
}

//console.log(dealHand(filterAgeDecks(ageThreeDeck, 3)))
/* console.log(ageOneDeck.length)
console.log(ageTwoDeck.length)
console.log(ageThreeDeck.length)
console.log(guildDeck.length) */

module.exports = {dealHand, filterAgeDecks}
