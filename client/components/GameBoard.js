import React, {Component} from 'react'
import {Image, Step} from 'semantic-ui-react'

class GameBoard extends Component {
  render() {
    return (
      <div>
        <Image src={this.props.board.imageURL} fluid rounded />
        <Step.Group>
          <Step completed>
            <Step.Content>
              <Step.Title> Stage 1 </Step.Title>
              <Step.Description>Enter info</Step.Description>
            </Step.Content>
          </Step>
          <Step active>
            <Step.Content>
              <Step.Title> Stage 2 </Step.Title>
              <Step.Description>Enter info</Step.Description>
            </Step.Content>
          </Step>
          <Step disabled>
            <Step.Content>
              <Step.Title> Stage 3 </Step.Title>
              <Step.Description>Enter info</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
    )
  }
}

export default GameBoard
