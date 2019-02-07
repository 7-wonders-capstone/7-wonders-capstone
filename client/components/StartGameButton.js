import React from 'react'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {createPlayers} from '../../playerGenerator'
import {Button} from 'semantic-ui-react'

class StartGameButton extends React.Component {
  startGame = players => {
    const gameId = this.props.game.id
    const numOfPlayers = this.props.players.length

    // createPlayers returns an array of player objects (depending on number of players) containing things like hand, board, availableResources, etc.
    createPlayers(numOfPlayers).forEach((player, idx) => {
      this.props.firestore.update(
        {
          collection: 'games',
          doc: `${gameId}`,
          subcollections: [
            {collection: `players`, doc: `${players[idx].id || idx + 1}`}
          ]
        },
        player
      )
    })

    // Change gameStarted field for the game to true.
    this.props.firestore.update(
      {
        collection: 'games',
        doc: `${gameId}`
      },
      {gameStarted: true}
    )

    // Change usersGameStarted to true for each player in the game.
    players.forEach(player => {
      this.props.firestore.update(
        {
          collection: 'users',
          doc: player.email
        },
        {
          usersGameStarted: true,
          activeGameAbandonded: false
        }
      )
    })

    players.forEach(player => {
      const playerTradeCost = player.email.slice(0, -4) + 'TradeCost'
      this.props.firestore.update(
        {
          collection: 'games',
          doc: `${gameId}`
        },
        {[playerTradeCost]: 0}
      )
    })
  }

  render() {
    const {players} = this.props
    const numOfPlayers = this.props.players.length
    return (
      <div>
        <Button
          disabled={numOfPlayers < 3 || numOfPlayers > 7}
          onClick={() => this.startGame(players)}
          content="Start Game"
        />
        {/* <button
          type="button"
          onClick={() => this.startGame(players)}
          disabled={numOfPlayers < 3 || numOfPlayers > 7}
        >
          Start Game
        </button> */}
      </div>
    )
  }
}

export default compose(firestoreConnect()(StartGameButton))
