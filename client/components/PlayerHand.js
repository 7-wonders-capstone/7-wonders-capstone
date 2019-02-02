import React from 'react'
import Card from './Card'

class PlayerHand extends React.Component {
  render() {
    return (
      <div className="player-hand">
        {this.props.me.hand.map(card => {
          return (
            <div key={card.imageURL}>
              <Card card={card} me={this.props.me} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default PlayerHand
