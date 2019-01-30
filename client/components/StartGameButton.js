import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {createPlayers} from '../../playerGenerator'

class StartGameButton extends React.Component {
  startGame = playersArr => {
    const gameId = this.props.match.params.gameId
    const numOfPlayers = this.props.players.length

    // createPlayers returns an array of player objects (depending on number of players) containing things like hand, board, availableResources, etc.
    createPlayers(numOfPlayers).forEach((player, idx) => {
      this.props.firestore.update(
        {
          collection: 'games',
          doc: `${gameId}`,
          subcollections: [
            {collection: `players`, doc: `${playersArr[idx].id || idx + 1}`}
          ]
        },
        player
      )
    })

    // TODO: Add logic here to remove WaitingPlayers component and join/leave/start buttons from view after clicking start game.
    console.log('Start button clicked')
  }

  render() {
    const {players} = this.props
    const numOfPlayers = this.props.players.length
    return (
      <div>
        <button
          type="button"
          onClick={() => this.startGame(players)}
          disabled={numOfPlayers < 3 || numOfPlayers > 7}
        >
          Start Game
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  players: state.firestore.ordered[`games/${props.match.params.gameId}/players`]
    ? state.firestore.ordered[`games/${props.match.params.gameId}/players`]
    : []
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: `games/${props.match.params.gameId}/players`
        // doc: `${playerId}` // Could access only specific players doc.
      }
    ]
  })
)(StartGameButton)
