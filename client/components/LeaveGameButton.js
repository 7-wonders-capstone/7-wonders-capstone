import React from 'react'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class LeaveGameButton extends React.Component {
  leaveGame = () => {
    const gameId = this.props.game.id
    const {email} = this.props

    this.props.firestore.delete({
      collection: 'games',
      doc: gameId,
      subcollections: [{collection: `players`, doc: email}]
    })

    this.props.firestore.update(
      {
        collection: 'users',
        doc: email
      },
      {inGameRoom: ''}
    )

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

export default compose(firestoreConnect()(LeaveGameButton))
