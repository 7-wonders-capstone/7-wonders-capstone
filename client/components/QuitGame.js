import React, {Component} from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

class QuitGame extends Component {
  quitGame = async players => {
    await players.forEach(player => {
      this.props.firestore.update(
        {
          collection: 'users',
          doc: player.email
        },
        {
          usersGameStarted: false,
          activeGameAbandonded: true,
          inGameRoom: ''
        }
      )
    })

    await this.props.firestore.delete({
      collection: 'games',
      doc: this.props.gameId
    })
  }

  render() {
    const {players} = this.props

    return (
      <div
        // style={{backgroundColor: 'white'}}
        className="exit-game-btn"
        onClick={() => this.quitGame(players)}
      >
        Quit Game
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    players: state.firestore.ordered[`games/${props.gameId}/players`] || []
  }
}

export default compose(connect(mapStateToProps), firestoreConnect())(QuitGame)
