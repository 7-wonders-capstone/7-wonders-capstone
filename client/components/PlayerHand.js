import React from 'react'
import Card from './Card'

class PlayerHand extends React.Component {
  render() {
    console.log('PlayerHand props: ', this.props)
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

export default PlayerHand
