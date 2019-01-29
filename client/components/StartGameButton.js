import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {createPlayers} from '../../playerGenerator'

let gameId

class StartGameButton extends React.Component {
  startGame(...playerId) {
    // Creates a random number to assign to created game.
    gameId = Math.floor(100000 + Math.random() * 900000)
    // const gameId = this.props.gameId

    // Create a game with 4 players.
    createPlayers(4).forEach((player, idx) => {
      this.props.firestore.set(
        {
          collection: 'games',
          doc: `${gameId}`,
          subcollections: [
            {collection: `players`, doc: `${playerId[idx] || idx + 1}`}
          ]
        },
        player
      )
    })

    console.log('Start button clicked')
  }

  render() {
    console.log('players: ', this.props.players)
    if (this.props.players[0]) {
      return (
        <div>
          <ul>
            {this.props.players.map(player => {
              return <li key={player.id}>{player.board.name}</li>
            })}
          </ul>
        </div>
      )
    }
    return (
      <div>
        <button onClick={() => this.startGame()}>Start Game</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  players: state.firestore.ordered[`games/${gameId}/players`]
    ? state.firestore.ordered[`games/${gameId}/players`]
    : []
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => {
    return [
      {
        collection: `games/${gameId}/players`
        // doc: `${playerId}` // Could access only specific players doc.
      }
    ]
  })
)(StartGameButton)
