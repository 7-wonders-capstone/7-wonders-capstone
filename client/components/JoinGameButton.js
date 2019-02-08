import React from 'react'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Button} from 'semantic-ui-react'

class JoinGameButton extends React.Component {
  joinGame = () => {
    const gameId = this.props.game.id
    const {email} = this.props

    this.props.firestore.set(
      {
        collection: 'games',
        doc: gameId,
        subcollections: [{collection: `players`, doc: email}]
      },
      {email}
    )

    this.props.firestore.update(
      {
        collection: 'users',
        doc: email
      },
      {inGameRoom: gameId}
    )
  }

  render() {
    return (
      <div>
        {/* <button type="button" onClick={this.joinGame}>
          Join Game
        </button> */}
        <Button
          style={{'margin-top': '10px'}}
          onClick={this.joinGame}
          content="Join Game"
        />
      </div>
    )
  }
}

export default compose(firestoreConnect()(JoinGameButton))
