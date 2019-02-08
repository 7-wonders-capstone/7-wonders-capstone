import React, {Component} from 'react'
import {Image, Step} from 'semantic-ui-react'

class GameBoard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Image src={this.props.board.imageURL} fluid rounded />
        <Step.Group ordered>
          {this.props.me && this.props.me.latestWonder === 1 ? (
            <Step completed>
              <Step.Content>
                <Step.Title>Stage 1</Step.Title>
              </Step.Content>
            </Step>
          ) : (
            <Step active>
              <Step.Content>
                <Step.Title>Stage 1</Step.Title>
              </Step.Content>
            </Step>
          )}

          {this.props.me && this.props.me.latestWonder === 2 ? (
            <Step completed>
              <Step.Content>
                <Step.Title> Stage 2 </Step.Title>
              </Step.Content>
            </Step>
          ) : (
            <Step active>
              <Step.Content>
                <Step.Title> Stage 2 </Step.Title>
              </Step.Content>
            </Step>
          )}

          {this.props.me && this.props.me.latestWonder === 3 ? (
            <Step completed>
              <Step.Content>
                <Step.Title> Stage 3 </Step.Title>
              </Step.Content>
            </Step>
          ) : (
            <Step active>
              <Step.Content>
                <Step.Title> Stage 3 </Step.Title>
              </Step.Content>
            </Step>
          )}
        </Step.Group>
      </div>
    )
  }
}

export default GameBoard
