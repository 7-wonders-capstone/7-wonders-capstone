import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
const playerUpdater = require('../../playerUpdater')
const handSwap = require('../../handSwap')

class PlayerHand extends React.Component {
  componentDidUpdate() {
    if (this.props.readyToPlay === this.props.numPlayers) {
      this.props.resetPlay()
      let playerCopy = JSON.parse(JSON.stringify(this.props.me))
      let updatedPlayer = playerUpdater(
        playerCopy,
        this.props.players,
        this.props.selectedCard
      )
      console.log(updatedPlayer)
      this.props.updatePlayerInStore(updatedPlayer)
    } else {
      console.log('NOT READY TO PLAY YET')
    }
  }

  render() {
    console.log(this.props.me.hand)
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
