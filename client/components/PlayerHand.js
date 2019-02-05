import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
const playerUpdater = require('../../playerUpdater')
const handSwap = require('../../handSwap')

const militaryComparison = require('../../militaryComparison')
const {dealHand, filterAgeDecks} = require('../../cardGenerator/cardGenerator')
const {ageTwoDeck, ageThreeDeck} = require('../../cardGenerator/cardDecks')

import playCard from '../../cardGenerator/checkCardPlay'

class PlayerHand extends React.Component {
  constructor() {
    super()
    this.state = {
      updating: false
    }
  }
  async componentDidUpdate() {
    if (this.props.readyToPlay === this.props.numPlayers) {
      await this.props.resetPlay()
      let playerCopy = JSON.parse(JSON.stringify(this.props.me))
      let updatedPlayer = playerUpdater(
        playerCopy,
        this.props.players,
        this.props.selectedCard
      )
      await this.props.updatePlayerInStore(updatedPlayer, 1)
    }
    const ready = this.props.playersUpdated.length === this.props.numPlayers

    if (
      this.props.me.hand &&
      this.props.me.hand.length <= 1 &&
      this.props.me.number === 1 &&
      this.props.age !== 3 &&
      !this.state.updating
    ) {
      this.setState({
        updating: true
      })
      console.log('age switch')
      let playersToUpdate = []
      let updatedMilitary = []
      let updatedHands = []
      let nextAge
      await this.props.firestore
        .collection(`/games/${this.props.gameId}/players`)
        .get()
        .then(querySnapshot =>
          querySnapshot.forEach(player => {
            playersToUpdate.push(player.data())
          })
        )
        .then(() => {
          playersToUpdate.forEach(player =>
            updatedMilitary.push(
              militaryComparison(player, this.props.players, this.props.age)
            )
          )
        })
        .then(() => {
          let newDeck

          if (this.props.age === 1) {
            newDeck = filterAgeDecks(ageTwoDeck, this.props.numPlayers)
            nextAge = 2
          } else if (this.props.age === 2) {
            newDeck = filterAgeDecks(ageThreeDeck, this.props.numPlayers)
            nextAge = 3
          }

          updatedMilitary.forEach(player => {
            let newHand = []
            for (let i = 0; i < 7; i++) {
              newHand.push(dealHand(newDeck))
            }
            player.hand = newHand
            updatedHands.push(player)
          })
        })
        .then(() => {
          updatedHands.forEach(async player => {
            await this.props.updatePlayerInStore(player, 0)
          })
        })
        .then(async () => {
          await this.props.firestore.update(
            {
              collection: 'games',
              doc: `${this.props.gameId}`
            },
            {
              age: nextAge
            }
          )
        })
      this.setState({
        updating: false
      })
    } else if (ready && this.props.me.number === 1) {
      this.props.resetUpdate()
      let playersToSwap = []

      this.props.firestore
        .collection(`/games/${this.props.gameId}/players`)
        .get()
        .then(querySnapshot =>
          querySnapshot.forEach(player => {
            playersToSwap.push(player.data())
          })
        )
        .then(() => {
          const swappedPlayers = handSwap(playersToSwap, this.props.age)
          swappedPlayers.forEach(player =>
            this.props.updatePlayerInStore(player, 0)
          )
        })
    }
  }
  render() {
    return (
      <div className="player-hand">
        {this.props.me &&
          this.props.me.hand &&
          this.props.me.hand.map(card => {
            return (
              <div key={card.imageURL}>
                <Card
                  canPlay={playCard(this.props.me, this.props.selectedCard)}
                  card={card}
                  preparePlay={this.props.preparePlay}
                  resetPlay={this.props.resetPlay}
                  readyToPlay={this.props.readyToPlay}
                  numPlayers={this.props.numPlayers}
                  me={this.props.me}
                  players={this.props.players}
                  updatePlayerInStore={this.props.updatePlayerInStore}
                />
              </div>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    selectedCard: state.selectedCard,
    me: state.firestore.ordered.playerForPlayerHand
      ? state.firestore.ordered.playerForPlayerHand[0]
      : {}
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: `games/${props.gameId}/players`,
        doc: props.email,
        storeAs: 'playerForPlayerHand'
      }
    ]
  })
)(PlayerHand)
