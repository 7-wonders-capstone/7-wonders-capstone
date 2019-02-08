import React from 'react'
import {Icon} from 'semantic-ui-react'

class WaitingPlayers extends React.Component {
  render() {
    const {players} = this.props
    return (
      <div className="waiting-players">
        Current players joined:
        <div className="waiting-players-container">
          {/* <ul> */}
          {players.map(player => {
            return (
              <div key={player.id} className="waiting-player-item">
                <Icon name="user" size="huge" color="blue" />
                <p>{player.email.split('@')[0]}</p>
              </div>
              // <li key={player.id}>{player.email}</li>
            )
          })}
          {/* </ul> */}
        </div>
      </div>
    )
  }
}

export default WaitingPlayers
