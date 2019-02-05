import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
const playerUpdater = require('../../playerUpdater')
const handSwap = require('../../handSwap')
import playCard from '../../cardGenerator/checkCardPlay'

class PlayerHand extends React.Component {
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
    if (ready && this.props.me.number === 1) {
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
          const swappedPlayers = handSwap(playersToSwap, 1)
          swappedPlayers.forEach(player =>
            this.props.updatePlayerInStore(player, 0)
          )
        })
    }
  }
  render() {
    console.log(this.props)
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

const mapStateToProps = state => {
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
