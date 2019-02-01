import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Card} from 'semantic-ui-react'
import WaitingPlayers from './WaitingPlayers'
import LeaveGameButton from './LeaveGameButton'
import JoinGameButton from './JoinGameButton'
import StartGameButton from './StartGameButton'

class GameRoomSnapshot extends React.Component {
  render() {
    const {game, players} = this.props
    return (
      <div className="gameroom-snapshot">
        <Card>
          <Card.Header>Room #{game.id}</Card.Header>
          <Card.Content>
            <WaitingPlayers {...this.props} />
            <div>
              {players.filter(
                player => player.email === this.props.email
              )[0] ? (
                <LeaveGameButton {...this.props} />
              ) : null}

              {this.props.userInGameRoom ? null : (
                <JoinGameButton {...this.props} />
              )}

              {players.filter(
                player => player.email === this.props.email
              )[0] ? (
                <StartGameButton {...this.props} />
              ) : null}
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    email: state.firebase.auth.email,
    players: state.firestore.ordered[`games/${props.game.id}/players`]
      ? state.firestore.ordered[`games/${props.game.id}/players`]
      : [],
    userInGameRoom: state.firestore.ordered.users
      ? state.firestore.ordered.users[0].inGameRoom
      : ''
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: `games/${props.game.id}/players`
      },
      {
        collection: 'users',
        doc: props.email
      }
    ]
  })
)(GameRoomSnapshot)
