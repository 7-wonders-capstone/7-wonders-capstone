import React, {Component} from 'react'
import {Image, Step, Header} from 'semantic-ui-react'

class GameBoard extends Component {
  render() {
    return (
      <div>
        <Image src={this.props.board.imageURL} fluid rounded />
        <Step.Group ordered>
          {this.props.player && this.props.player.latestWonder >= 1 ? (
            <Step completed>
              <Step.Content>
                <Step.Title>
                  <Header as="h5">Stage 1</Header>
                </Step.Title>
              </Step.Content>
            </Step>
          ) : (
            <Step active>
              <Step.Content>
                <Step.Title>
                  <Header as="h5">Stage 1</Header>
                </Step.Title>
              </Step.Content>
            </Step>
          )}

          {this.props.player && this.props.player.latestWonder >= 2 ? (
            <Step completed>
              <Step.Content>
                <Step.Title>
                  <Header as="h5">Stage 2</Header>
                </Step.Title>
              </Step.Content>
            </Step>
          ) : (
            <Step active>
              <Step.Content>
                <Step.Title>
                  <Header as="h5">Stage 2</Header>
                </Step.Title>
              </Step.Content>
            </Step>
          )}

          {this.props.player && this.props.player.latestWonder === 3 ? (
            <Step completed>
              <Step.Content>
                <Step.Title>
                  <Header as="h5">Stage 3</Header>
                </Step.Title>
              </Step.Content>
            </Step>
          ) : (
            <Step active>
              <Step.Content>
                <Step.Title>
                  <Header as="h5">Stage 3</Header>
                </Step.Title>
              </Step.Content>
            </Step>
          )}
        </Step.Group>
      </div>
    )
  }
}

export default GameBoard
