import React, {Component} from 'react'
import PlayerHand from './PlayerHand'
import {Button} from 'semantic-ui-react'

class GameTable extends Component {
  render() {
    return (
      <div>
        Insert nested components here: PlayerArea GameBoard Hand Card
        <p>
          <Button content="THIS IS A TEST" />
        </p>
        <div className="player-hand-navbar">
          <PlayerHand />
        </div>
      </div>
    )
  }
}

export default GameTable
