import React from 'react'
import StartGameButton from './StartGameButton'

class GameRoom extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to game room #{this.props.match.params.gameId}</h1>
        <StartGameButton />
      </div>
    )
  }
}

export default GameRoom
