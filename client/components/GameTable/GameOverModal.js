import React, {Component} from 'react'
import {Modal, Header} from 'semantic-ui-react'
import QuitGame from '../NavBar/QuitGame'

export default class GameOverModal extends Component {
  render() {
    return (
      <div>
        <Modal open={this.props.open}>
          <Modal.Content>
            <Header>Game Over!</Header>
            <ul>
              {this.props.players.map(player => {
                return (
                  <li key={player.email}>
                    {player.email}: {player.victoryPoints}
                  </li>
                )
              })}
            </ul>
          </Modal.Content>
          <Modal.Actions>
            <QuitGame className="exit-game-btn" {...this.props} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
