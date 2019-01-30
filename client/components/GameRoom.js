import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import StartGameButton from './StartGameButton'
import WaitingPlayers from './WaitingPlayers'
import GameTable from './GameTable'

class GameRoom extends React.Component {
  render() {
    console.log('Game started: ', this.props.gameStarted)
    return (
      <div>
        {!this.props.gameStarted ? (
          <div>
            <h1>Welcome to game room #{this.props.match.params.gameId}</h1>
            <WaitingPlayers {...this.props} />
            <StartGameButton {...this.props} />
          </div>
        ) : (
          <GameTable {...this.props} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  email: state.firebase.auth.email,
  players: state.firestore.ordered[`games/${props.match.params.gameId}/players`]
    ? state.firestore.ordered[`games/${props.match.params.gameId}/players`]
    : [],
  gameStarted: state.firestore.data.games
    ? state.firestore.data.games[props.match.params.gameId].gameStarted
    : null
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: `games/${props.match.params.gameId}/players`
      },
      {
        collection: 'games',
        doc: props.match.params.gameId
      }
    ]
  })
)(GameRoom)
