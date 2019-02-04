import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import PlayerArea from './PlayerArea'

import PlayerHand from './PlayerHand'
import {setPositions} from '../store/boardPositions'
import {Menu} from 'semantic-ui-react'
import Chat from './Chat'

class GameTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // me: {
      //   hand: [],
      //   coins: 0
      // }
    }
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

  resetPlay = async () => {
    await this.props.firestore.update(
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

  orderPlayers(props) {
    // const me = this.props.players.filter(
    //   player => player.email === this.props.email
    // )

    // this.setState({
    //   me: me
    // })

    // this.me = this.props.me

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
    // const orderedPlayers = [...this.props.players].sort(
    //   (a, b) => a.number < b.number
    // )

    return (
      <div>
        <Menu vertical>
          <Chat />
        </Menu>
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

        <div className="player-hand-navbar">
          <PlayerHand
            {...this.props}
            me={this.props.me}
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
      }
    ]
  })
)(GameTable)
