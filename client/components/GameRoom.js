import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import StartGameButton from './StartGameButton'
import WaitingPlayers from './WaitingPlayers'
import GameTable from './GameTable'

class GameRoom extends React.Component {
  constructor() {
    super()
    this.state = {
      started: false
    }
  }

  toggleStarted = () => {
    this.setState({started: !this.state.started})
  }

  render() {
    return (
      <div>
        {!this.state.started ? (
          <div>
            <h1>Welcome to game room #{this.props.match.params.gameId}</h1>
            <WaitingPlayers {...this.props} />
            <StartGameButton
              {...this.props}
              toggleStarted={this.toggleStarted}
            />
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
)(GameRoom)

// export default GameRoom
