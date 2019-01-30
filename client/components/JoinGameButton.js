import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class JoinGameButton extends React.Component {
  joinGame = () => {
    const gameId = this.props.match.params.gameId

    this.props.firestore.set(
      {
        collection: 'games',
        doc: `${gameId}`,
        subcollections: [{collection: `players`, doc: `${this.props.email}`}]
      },
      {email: this.props.email}
    )

    console.log('Join button clicked')
  }

  render() {
    return (
      <div>
        <button onClick={this.joinGame}>Join Game</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  email: state.firebase.auth.email
})

export default compose(connect(mapStateToProps), firestoreConnect())(
  JoinGameButton
)
