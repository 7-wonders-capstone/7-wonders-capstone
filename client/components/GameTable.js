import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import PlayerArea from './PlayerArea'
import {Grid} from 'semantic-ui-react'

import PlayerHand from './PlayerHand'
import {setPositions} from '../store/boardPositions'
import {Menu} from 'semantic-ui-react'
import Chat from './Chat'

class GameTable extends React.Component {
  constructor() {
    super()
    this.state = {
      me: {
        hand: [],
        coins: 0
      }
    }
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

  playerUpdated = num => {
    this.props.firestore.update(
      {
        collection: 'games',
        doc: `${this.props.gameId}`
      },
      {
        playersUpdated: this.props.playersUpdated + num
      }
    )
  }

  resetPlay = () => {
    this.props.firestore.update(
      {
        collection: 'games',
        doc: `${this.props.gameId}`
      },
      {
        readyToPlay: 0,
        playersUpdated: 0
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
        this.playerUpdated(num)
      })
  }

  componentDidMount() {
    const me = this.props.players.find(
      player => player.email === this.props.email
    )

    this.setState({
      me: me
    })

    const orderedPlayers = [...this.props.players].sort(
      (a, b) => a.number < b.number
    )

    let meIndex
    orderedPlayers.forEach(player => {
      if (player.email === me.email) {
        meIndex = player.number - 1
      }
    })

    const leftNeighborIndex =
      meIndex > 0 ? meIndex - 1 : orderedPlayers.length - 1
    const rightNeighborIndex =
      meIndex < orderedPlayers.length - 1 ? meIndex + 1 : 0

    // keys represent positions on table, values represent postiions in orderedPlayers array (off by 1 due to 0 based array)
    const positionMap = {
      1: me.number,
      2: orderedPlayers[leftNeighborIndex].number,
      3: orderedPlayers[rightNeighborIndex].number,
      4: null,
      5: null,
      6: null,
      7: null
    }

    if (orderedPlayers.length >= 4) {
      positionMap[4] =
        orderedPlayers[
          orderedPlayers[leftNeighborIndex].leftPlayerNumber - 1
        ].number
    }

    if (orderedPlayers.length >= 5) {
      positionMap[5] =
        orderedPlayers[
          orderedPlayers[rightNeighborIndex].rightPlayerNumber - 1
        ].number
    }

    if (orderedPlayers.length >= 6) {
      positionMap[6] =
        orderedPlayers[
          orderedPlayers[orderedPlayers[leftNeighborIndex].leftPlayerNumber - 1]
            .leftPlayerNumber - 1
        ].number
    }

    if (orderedPlayers.length >= 7) {
      positionMap[7] =
        orderedPlayers[
          orderedPlayers[
            orderedPlayers[rightNeighborIndex].rightPlayerNumber - 1
          ].rightPlayerNumber - 1
        ].number
    }

    this.props.setPositions(positionMap)
  }

  render() {
    const orderedPlayers = [...this.props.players].sort(
      (a, b) => a.number < b.number
    )

    return (
      <div>
        <Menu vertical>
          <Chat />
        </Menu>
        {this.props.positions[1] && (
          <div className="game-table">
            <div className="others-row">
              {orderedPlayers.length > 5 && (
                <div className="other-container">
                  <PlayerArea
                    player={orderedPlayers[this.props.positions[6] - 1]}
                  />
                </div>
              )}
              {orderedPlayers.length > 6 && (
                <div className="other-container">
                  <PlayerArea
                    player={orderedPlayers[this.props.positions[7] - 1]}
                  />
                </div>
              )}
            </div>
            <div className="others-row">
              {orderedPlayers.length > 3 && (
                <div className="other-container">
                  <PlayerArea
                    player={orderedPlayers[this.props.positions[4] - 1]}
                  />
                </div>
              )}
              {orderedPlayers.length > 4 && (
                <div className="other-container">
                  <PlayerArea
                    player={orderedPlayers[this.props.positions[5] - 1]}
                  />
                </div>
              )}
            </div>
            <div className="neighbors-row">
              <div className="neighbor-container">
                <PlayerArea
                  player={orderedPlayers[this.props.positions[2] - 1]}
                />
              </div>
              <div className="neighbor-container">
                <PlayerArea
                  player={orderedPlayers[this.props.positions[3] - 1]}
                />
              </div>
            </div>
            <div className="my-row">
              <div className="my-container">
                <PlayerArea
                  player={orderedPlayers[this.props.positions[1] - 1]}
                />
              </div>
            </div>
          </div>
        )}
        <div className="player-hand-navbar">
          <PlayerHand
            {...this.props}
            me={this.state.me}
            preparePlay={this.preparePlay}
            resetPlay={this.resetPlay}
            readyToPlay={this.props.readyToPlay}
            playersUpdated={this.props.playersUpdated}
            numPlayers={this.props.players.length}
            players={this.props.players}
            updatePlayerInStore={this.updatePlayerInStore}
            playerUpdated={this.playerUpdated}
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
    playersUpdated: state.firestore.data.games
      ? state.firestore.data.games[props.gameId].playersUpdated
      : 0,
    positions: state.boardPositions
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
      }
    ]
  })
)(GameTable)
