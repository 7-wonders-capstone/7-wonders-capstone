import React from 'react'
import LeaveGameButton from './LeaveGameButton'
import JoinGameButton from './JoinGameButton'

class WaitingPlayers extends React.Component {
  render() {
    return (
      <div>
        Current players joined:
        <div>
          <ul>
            {this.props.players.map(player => {
              return <li key={player.id}>{player.email}</li>
            })}
          </ul>
        </div>
        <div>
          {this.props.players.filter(
            player => player.email === this.props.email
          )[0] ? (
            <LeaveGameButton {...this.props} />
          ) : (
            <JoinGameButton {...this.props} />
          )}
        </div>
      </div>
    )
  }
}

export default WaitingPlayers
