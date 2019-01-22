import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import PlayerArea from './PlayerArea'

import PlayerHand from './PlayerHand'
import {setPositions} from '../store/boardPositions'
import {Menu, Image, Container} from 'semantic-ui-react'
import Chat from './Chat'

class GameTable extends React.Component {
  constructor(props) {
    super(props)
    this.orderPlayers(props)
  }

  preparePlay = () => {
    this.props.firestore.update(
      {
        collection: 'games',
        doc: `${this.props.gameId}`
      },
      {
        readyToPlay: this.props.readyToPlay + 1
      }
    )
  }

  playerUpdated = player => {
    this.props.firestore.update(
      {
        collection: 'games',
        doc: `${this.props.gameId}`
      },
      {
        playersUpdated: this.props.firestore.FieldValue.arrayUnion(player.email)
      }
    )
  }

  resetPlay = async () => {
    await this.props.firestore.update(
      {
        collection: 'games',
        doc: `${this.props.gameId}`
      },
      {
        readyToPlay: 0
      }
    )
  }

  resetUpdate = async () => {
    await this.props.firestore.update(
      {
        collection: 'games',
        doc: `${this.props.gameId}`
      },
      {
        playersUpdated: []
      }
    )
  }

  updatePlayerInStore = (player, num) => {
    this.props.firestore
      .set(
        {
          collection: `games/${this.props.gameId}/players`,
          doc: `${player.email}`
        },
        player
      )
      .then(() => {
        if (num !== 0) {
          this.playerUpdated(player, num)
        }
      })
  }

  orderPlayers(props) {
    const orderedPlayers = [...props.players].sort(
      (a, b) => a.number < b.number
    )

    const meIndex = props.me.number - 1

    const playersRotatedAroundMe = orderedPlayers.map((player, index) => {
      const offset = meIndex + index
      return orderedPlayers[offset % orderedPlayers.length]
    })

    this.playersRotatedAroundMe = playersRotatedAroundMe
  }

  render() {
    return (
      <div>
        <Image src="/img/tabletop-2.jpg" fluid />
        {/* <Image src="/img/tabletop.png" fluid /> */}

        {/* <Menu vertical>
          <Chat />
        </Menu> */}
        <div className="game-table">
          <h3>AGE: {this.props.age}</h3>
          <div className="others-row">
            {this.playersRotatedAroundMe.length > 5 && (
              <div className="other-container">
                <PlayerArea
                  player={this.playersRotatedAroundMe[5]}
                  players={this.props.players}
                />
              </div>
            )}
            {this.playersRotatedAroundMe.length > 6 && (
              <div className="other-container">
                <PlayerArea
                  player={this.playersRotatedAroundMe[6]}
                  players={this.props.players}
                />
              </div>
            )}
          </div>
          <div className="others-row">
            {this.playersRotatedAroundMe.length > 3 && (
              <div className="other-container">
                <PlayerArea
                  player={this.playersRotatedAroundMe[3]}
                  players={this.props.players}
                />
              </div>
            )}
            {this.playersRotatedAroundMe.length > 4 && (
              <div className="other-container">
                <PlayerArea
                  player={this.playersRotatedAroundMe[4]}
                  players={this.props.players}
                />
              </div>
            )}
          </div>
          <div className="neighbors-row">
            <div className="neighbor-container">
              <PlayerArea
                player={this.playersRotatedAroundMe[2]}
                players={this.props.players}
              />
            </div>
            <div className="my-container">
              <PlayerArea
                player={this.playersRotatedAroundMe[0]}
                players={this.props.players}
              />
            </div>
            <div className="neighbor-container">
              <PlayerArea
                player={this.playersRotatedAroundMe[1]}
                players={this.props.players}
              />
            </div>
          </div>
          {/* <div className="my-row">
            <div className="my-container">
              <PlayerArea
                player={this.playersRotatedAroundMe[0]}
                players={this.props.players}
              />
            </div>
          </div> */}
        </div>

        <div className="player-hand-navbar">
          <PlayerHand
            //{...this.props}
            email={this.props.email}
            gameId={this.props.gameId}
            preparePlay={this.preparePlay}
            resetPlay={this.resetPlay}
            resetUpdate={this.resetUpdate}
            readyToPlay={this.props.readyToPlay}
            playersUpdated={this.props.playersUpdated}
            numPlayers={this.props.players.length}
            players={this.props.players}
            updatePlayerInStore={this.updatePlayerInStore}
            playerUpdated={this.playerUpdated}
            age={this.props.age}
            gameEnded={this.props.gameEnded}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    readyToPlay: state.firestore.data.games
      ? state.firestore.data.games[props.gameId].readyToPlay
      : 0,
    age: state.firestore.data.games
      ? state.firestore.data.games[props.gameId].age
      : 1,
    gameEnded: state.firestore.data.games
      ? state.firestore.data.games[props.gameId].gameEnded
      : false,
    playersUpdated: state.firestore.data.games
      ? state.firestore.data.games[props.gameId].playersUpdated
      : 0,
    positions: state.boardPositions,
    me: state.firestore.ordered[`games/${props.match.params.gameId}/players`]
      ? state.firestore.ordered[
          `games/${props.match.params.gameId}/players`
        ].find(player => player.email === props.email)
      : {}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPositions: map => dispatch(setPositions(map))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return [
      {
        collection: 'games',
        doc: props.gameId
      },
      {
        collection: `games/${props.gameId}/players`
      }
    ]
  })
)(GameTable)
