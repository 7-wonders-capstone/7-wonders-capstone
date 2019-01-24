import React, {Component} from 'react'
import PlayerHand from './PlayerHand'

class GameTable extends Component {
  render() {
    return (
      <div>
        Insert nested components here: PlayerArea GameBoard Hand Card
        <PlayerHand />
      </div>
    )
  }
}

export default GameTable
