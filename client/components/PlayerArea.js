import React, {Component} from 'react'
import {Container, Grid, Segment} from 'semantic-ui-react'
import GameBoard from './GameBoard'
import PlayedCards from './PlayedCards'
import Coins from './Coins'

class PlayerArea extends Component {
  render() {
    return (
      <div>
        <Grid columns={7} divided>
          <Grid.Row stretched>
            <Segment>
              <Container>
                <Coins coins={this.props.player.coins} />
                <PlayedCards cards={this.props.player.PlayedCards} />
                <GameBoard
                  board={this.props.player.board}
                  coins={this.props.player.coins}
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
