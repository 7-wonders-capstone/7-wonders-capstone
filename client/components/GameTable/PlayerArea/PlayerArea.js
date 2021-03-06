import React, {Component} from 'react'
import {Container, Grid, Segment} from 'semantic-ui-react'
import GameBoard from './GameBoard'
import PlayedCards from './PlayedCards'
import BoardHeader from './BoardHeader'

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
                <BoardHeader
                  coins={livePlayerObj.coins}
                  points={livePlayerObj.victoryPoints}
                  email={playerEmail}
                  militaryResults={livePlayerObj.militaryResults}
                />
                <PlayedCards playedCards={livePlayerObj.playedCards} />

                <GameBoard
                  player={livePlayerObj}
                  board={this.props.player.board}
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
