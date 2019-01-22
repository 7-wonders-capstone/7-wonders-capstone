import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import GameTable from './GameTable'

class GameRoom extends React.Component {
  render() {
    return (
      <div>
        {!this.props.gameStarted ? (
          <div>
            <h1>Waiting for game to begin.</h1>
          </div>
        ) : (
          <GameTable {...this.props} gameId={this.props.match.params.gameId} />
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
  gameStarted:
    state.firestore.data.games?.[props.match.params.gameId]?.gameStarted
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
