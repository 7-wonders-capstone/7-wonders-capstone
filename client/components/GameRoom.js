import React from 'react'
import StartGameButton from './StartGameButton'
import WaitingPlayers from './WaitingPlayers'

class GameRoom extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to game room #{this.props.match.params.gameId}</h1>
        <WaitingPlayers {...this.props} />
        <StartGameButton {...this.props} />
      </div>
    )
  }
}

export default GameRoom
