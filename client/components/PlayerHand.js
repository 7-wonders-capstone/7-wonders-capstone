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
              <Card card={card} />
            </div>
          )
        })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    )
  }
}

export default PlayerHand
