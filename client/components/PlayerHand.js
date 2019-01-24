import React from 'react'
import Card from './Card'

class PlayerHand extends React.Component {
  render() {
    return (
      <div className="player-hand">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default PlayerHand
