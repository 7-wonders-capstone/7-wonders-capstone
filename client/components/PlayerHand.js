import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
const playerUpdater = require('../../playerUpdater')
const handSwap = require('../../handSwap')

class PlayerHand extends React.Component {
  componentDidUpdate() {
    if (this.props.readyToPlay === this.props.numPlayers) {
      let playerCopy = JSON.parse(JSON.stringify(this.props.me))
      let updatedPlayer = playerUpdater(
        playerCopy,
        this.props.players,
        this.props.selectedCard
      )
      console.log('UPDATED PLAYER HAND', updatedPlayer.hand)
      this.props.updatePlayerInStore(updatedPlayer, 1)
    }

    if (
      this.props.playersUpdated === this.props.numPlayers &&
      this.props.me.number === 1
    ) {
      this.props.resetPlay()
      let playersToSwap = []
      this.props.players.forEach(player => {
        let copiedPlayer = JSON.parse(JSON.stringify(player))
        playersToSwap.push(copiedPlayer)
      })
      const swappedPlayers = handSwap(playersToSwap, 1)
      swappedPlayers.forEach(player =>
        this.props.updatePlayerInStore(player, 0)
      )
    }
  }

  render() {
    return (
      <div className="player-hand">
        {this.props.me.hand.map(card => {
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

const mapStateToProps = state => {
  return {
    selectedCard: state.selectedCard
  }
}

export default connect(mapStateToProps)(PlayerHand)
