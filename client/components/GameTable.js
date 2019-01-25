import React, {Component} from 'react'
import PlayerHand from './PlayerHand'
import {Button} from 'semantic-ui-react'
import PlayerArea from './PlayerArea'

class GameTable extends Component {
  render() {
    return (
      <div>
        <PlayerArea />
        <div className="player-hand-navbar">
          <PlayerHand />
        </div>
      </div>
    )
  }
}

export default GameTable
