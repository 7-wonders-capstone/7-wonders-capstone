import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
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

const mapStateToProps = (state, props) => ({
  email: state.firebase.auth.email,
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
      }
    ]
  })
)(WaitingPlayers)
