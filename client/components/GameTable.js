import React, {Component} from 'react'
import PlayerHand from './PlayerHand'
import PlayerArea from './PlayerArea'
import {Grid} from 'semantic-ui-react'

class GameTable extends Component {
  render() {
    return (
      <div>
        <Grid verticalAlign="middle" columns={3} centered>
          <Grid.Row>
            {this.props.players &&
              this.props.players.map(player => {
                return (
                  <Grid.Column>
                    <PlayerArea player={player} />
                  </Grid.Column>
                )
              })}
          </Grid.Row>
        </Grid>
        {/* <div className="player-hand-navbar">
          <PlayerHand />
        </div> */}
      </div>
    )
  }
}

export default GameTable
