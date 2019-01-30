import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class LeaveGameButton extends React.Component {
  leaveGame = () => {
    const gameId = this.props.match.params.gameId

    this.props.firestore.delete({
      collection: 'games',
      doc: `${gameId}`,
      subcollections: [{collection: `players`, doc: `${this.props.email}`}]
    })

    console.log('Leave button clicked')
  }

  render() {
    return (
      <div>
        <button onClick={this.leaveGame}>Leave Game</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  email: state.firebase.auth.email
})

export default compose(connect(mapStateToProps), firestoreConnect())(
  LeaveGameButton
)
