import React from 'react'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Button} from 'semantic-ui-react'

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
  }

  render() {
    return (
      <div>
        <Button
          style={{'margin-bottom': '5px'}}
          onClick={this.leaveGame}
          content="Leave Game"
        />
        {/* <button type="button" onClick={this.leaveGame}>
          Leave Game
        </button> */}
      </div>
    )
  }
}

export default compose(firestoreConnect()(LeaveGameButton))
