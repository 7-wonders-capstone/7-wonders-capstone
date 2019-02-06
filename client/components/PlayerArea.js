import React, {Component} from 'react'
import {Container, Grid, Segment} from 'semantic-ui-react'
import GameBoard from './GameBoard'
import PlayedCards from './PlayedCards'
import Coins from './Coins'

class PlayerArea extends Component {
  render() {
    const playerEmail = this.props.player.email
    const livePlayerObj = this.props.players.find(
      player => player.email === playerEmail
    )

    return (
      <div>
        <Grid columns={7} divided>
          <Grid.Row stretched>
            <Segment>
              <Container>
                <Coins coins={livePlayerObj.coins} />
                <PlayedCards playedCards={livePlayerObj.playedCards} />

                <GameBoard
                  board={this.props.player.board}
                  // coins={this.props.player.coins}
                />
              </Container>
            </Segment>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default PlayerArea
