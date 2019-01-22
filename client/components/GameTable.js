import React, {Component} from 'react'
import PlayerHand from './PlayerHand'
import PlayerArea from './PlayerArea'
import {Grid} from 'semantic-ui-react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

class GameTable extends Component {
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
  render() {
    const me = this.props.players.filter(
      player => player.email === this.props.email
    )[0]

    return (
      <div>
        <Grid verticalAlign="middle" columns={3} centered>
          <Grid.Row>
            {this.props.players &&
              this.props.players.map(player => {
                return (
                  <Grid.Column key={player.id}>
                    <PlayerArea player={player} />
                  </Grid.Column>
                )
              })}
          </Grid.Row>
        </Grid>
        <div className="player-hand-navbar">
          <PlayerHand
            {...this.props}
            me={me}
            preparePlay={this.preparePlay}
            resetPlay={this.resetPlay}
            readyToPlay={this.props.readyToPlay}
            numPlayers={this.props.players.length}
            players={this.props.players}
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
      : 0
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [
      {
        collection: 'games',
        doc: props.gameId
      }
    ]
  })
)(GameTable)
