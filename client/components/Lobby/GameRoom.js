import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import GameTable from '../GameTable/GameTable'
import QuitMessage from '../NavBar/QuitMessage'

class GameRoom extends React.Component {
  render() {
    if (this.props.user.activeGameAbandonded === true) {
      return <QuitMessage user={this.props.user} />
    }

    return (
      <div>
        {!this.props.gameStarted ? (
          <h1>404: Sorry, there's no game at this webpage.</h1>
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
    state.firestore.data.games?.[props.match.params.gameId]?.gameStarted,
  user: state.firestore.ordered.users ? state.firestore.ordered.users[0] : {}
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
