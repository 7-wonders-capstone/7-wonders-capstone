import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
const playerUpdater = require('../../playerUpdater')
const handSwap = require('../../handSwap')

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
      console.log('UPDATED PLAYER HAND', updatedPlayer.hand)
      await this.props.updatePlayerInStore(updatedPlayer, 1)
    }

    if (
      this.props.playersUpdated === this.props.numPlayers &&
      this.props.me.number === 1
    ) {
      await this.props.resetUpdate()
      let playersToSwap = []
      this.props.players.forEach(player => {
        let copiedPlayer = JSON.parse(JSON.stringify(player))
        playersToSwap.push(copiedPlayer)
      })
      const swappedPlayers = handSwap(playersToSwap, 1)
      swappedPlayers.forEach(
        async player => await this.props.updatePlayerInStore(player, 0)
      )
    }
  }

  render() {
    console.log('HAND', this.props.me)
    return (
      <div className="player-hand">
        {this.props.me &&
          this.props.me.hand.map(card => {
            return (
              <div key={card.imageURL}>
                <Card
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
    me: state.firestore.ordered[`games/${props.gameId}/players`]
      ? state.firestore.ordered[`games/${props.gameId}/players`].find(
          player => player.email === props.email
        )
      : {}
  }
}

//export default connect(mapStateToProps)(PlayerHand)
export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: `games/${props.gameId}/players`,
        doc: props.email
      }
    ]
  })
)(PlayerHand)
