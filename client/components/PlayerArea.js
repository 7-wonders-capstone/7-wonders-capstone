import React, {Component} from 'react'
import {Container} from 'semantic-ui-react'
import GameBoard from './GameBoard'
import Coins from './Coins'
import PlayedCards from './PlayedCards'

class PlayerArea extends Component {
  render() {
    return (
      <div>
        <Container>
          <Coins />
          <PlayedCards />
          <GameBoard />
        </Container>
      </div>
    )
  }
}

export default PlayerArea
