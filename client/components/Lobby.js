import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'
import GameRoomSnapshot from './GameRoomSnapshot'
import {Button} from 'semantic-ui-react'

class Lobby extends React.Component {
  createGameRoom = () => {
    const gameId = Math.floor(100000 + Math.random() * 900000)

    this.props.firestore
      .set(
        {
          collection: 'games',
          doc: `${gameId}`
        },
        {gameStarted: false}
      )
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="lobby">
        <Button
          color="blue"
          style={{margin: '20px'}}
          onClick={this.createGameRoom}
        >
          Create Game Room
        </Button>

        <div className="gameroom-list">
          {this.props.pendingGames.map(game => {
            return (
              <div key={game.id}>
                <GameRoomSnapshot
                  game={game}
                  pendingGames={this.props.pendingGames}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pendingGames: state.firestore.ordered.games
      ? state.firestore.ordered.games
      : []
  }
}

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect(() => {
      return [
        {
          collection: 'games',
          where: ['gameStarted', '==', false]
        }
      ]
    })
  )(Lobby)
)
