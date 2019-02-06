import React from 'react'

class WaitingPlayers extends React.Component {
  render() {
    const {players} = this.props
    return (
      <div className="waiting-players">
        Current players joined:
        <div>
          <ul>
            {players.map(player => {
              return <li key={player.id}>{player.email}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default WaitingPlayers
