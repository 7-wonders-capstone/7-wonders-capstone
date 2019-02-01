import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import PlayerArea from './PlayerArea'
import {Grid} from 'semantic-ui-react'

import PlayerHand from './PlayerHand'
import {setPositions} from '../store/boardPositions'

class GameTable extends React.Component {
  constructor(props) {
    super(props)
    this.orderPlayers()
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

  resetPlay = () => {
    this.props.firestore.update(
      {
        collection: 'games',
        doc: `${this.props.gameId}`
      },
      {
        readyToPlay: 0
      }
    )
  }

  updatePlayerInStore = player => {
    this.props.firestore.update(
      {
        collection: `games/${this.props.gameId}/players`,
        doc: `${player.email}`
      },
      player
    )
  }

  orderPlayers() {
    const me = this.props.players.filter(
      player => player.email === this.props.email
    )[0]

    this.me = me

    const orderedPlayers = [...this.props.players].sort(
      (a, b) => a.number < b.number
    )

    const meIndex = me.number - 1

    const playersRotatedAroundMe = orderedPlayers.map((player, index) => {
      const offset = meIndex + index
      return orderedPlayers[offset % orderedPlayers.length]
    })

    // orderedPlayers.forEach(player => {
    //   if (player.email === me.email) {
    //     meIndex = player.number - 1
    //   }
    // })

    // const leftNeighborIndex =
    //   meIndex > 0 ? meIndex - 1 : orderedPlayers.length - 1
    // const rightNeighborIndex =
    //   meIndex < orderedPlayers.length - 1 ? meIndex + 1 : 0

    // // keys represent positions on table, values represent postiions in orderedPlayers array (off by 1 due to 0 based array)
    // const positionMap = {
    //   1: me.number,
    //   2: orderedPlayers[leftNeighborIndex].number,
    //   3: orderedPlayers[rightNeighborIndex].number,
    //   4: null,
    //   5: null,
    //   6: null,
    //   7: null
    // }

    // if (orderedPlayers.length >= 4) {
    //   positionMap[4] =
    //     orderedPlayers[
    //       orderedPlayers[leftNeighborIndex].leftPlayerNumber - 1
    //     ].number
    // }

    // if (orderedPlayers.length >= 5) {
    //   positionMap[5] =
    //     orderedPlayers[
    //       orderedPlayers[rightNeighborIndex].rightPlayerNumber - 1
    //     ].number
    // }

    // if (orderedPlayers.length >= 6) {
    //   positionMap[6] =
    //     orderedPlayers[
    //       orderedPlayers[orderedPlayers[leftNeighborIndex].leftPlayerNumber - 1]
    //         .leftPlayerNumber - 1
    //     ].number
    // }

    // if (orderedPlayers.length >= 7) {
    //   positionMap[7] =
    //     orderedPlayers[
    //       orderedPlayers[
    //         orderedPlayers[rightNeighborIndex].rightPlayerNumber - 1
    //       ].rightPlayerNumber - 1
    //     ].number
    // }
    this.playersRotatedAroundMe = playersRotatedAroundMe
    // this.props.setPositions(playersRotatedAroundMe)
  }

  render() {
    console.log('rotatedPlayers: ', this.playersRotatedAroundMe)

    return (
      <div>
        (
        <div className="game-table">
          <div className="others-row">
            {this.playersRotatedAroundMe.length > 5 && (
              <div className="other-container">
                <PlayerArea player={this.playersRotatedAroundMe[5]} />
              </div>
            )}
            {this.playersRotatedAroundMe.length > 6 && (
              <div className="other-container">
                <PlayerArea player={this.playersRotatedAroundMe[6]} />
              </div>
            )}
          </div>
          <div className="others-row">
            {this.playersRotatedAroundMe.length > 3 && (
              <div className="other-container">
                <PlayerArea player={this.playersRotatedAroundMe[3]} />
              </div>
            )}
            {this.playersRotatedAroundMe.length > 4 && (
              <div className="other-container">
                <PlayerArea player={this.playersRotatedAroundMe[4]} />
              </div>
            )}
          </div>
          <div className="neighbors-row">
            <div className="neighbor-container">
              <PlayerArea player={this.playersRotatedAroundMe[2]} />
            </div>
            <div className="neighbor-container">
              <PlayerArea player={this.playersRotatedAroundMe[1]} />
            </div>
          </div>
          <div className="my-row">
            <div className="my-container">
              <PlayerArea player={this.playersRotatedAroundMe[0]} />
            </div>
          </div>
        </div>
        )
        <div className="player-hand-navbar">
          <PlayerHand
            {...this.props}
            me={this.me}
            preparePlay={this.preparePlay}
            resetPlay={this.resetPlay}
            readyToPlay={this.props.readyToPlay}
            numPlayers={this.props.players.length}
            players={this.props.players}
            updatePlayerInStore={this.updatePlayerInStore}
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
