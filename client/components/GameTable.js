import React, {Component} from 'react'
import PlayerHand from './PlayerHand'
import PlayerArea from './PlayerArea'
import {Grid} from 'semantic-ui-react'

class GameTable extends Component {
  render() {
    const me = this.props.players.filter(
      player => player.email === this.props.email
    )[0]

    return (
      <div>
        <Grid verticalAlign="middle" columns={3} centered>
          <Grid.Row>
            {this.props.players &&
              this.props.players.map(player => {
                return (
                  <Grid.Column key={player.id}>
                    <PlayerArea player={player} />
                  </Grid.Column>
                )
              })}
          </Grid.Row>
        </Grid>
        <div className="player-hand-navbar">
          <PlayerHand {...this.props} me={me} />
        </div>
      </div>
    )
  }
}

export default GameTable
