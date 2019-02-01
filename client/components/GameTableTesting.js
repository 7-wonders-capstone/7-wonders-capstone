import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import PlayerArea from './PlayerArea'

class GameTableTesting extends React.Component {
  render() {
    // let players = []
    // this.props.firestore.collection(`/games/${this.props.match.params.gameId}/players`).get().then(result => {
    //   result.forEach(player => players.push(player.id))
    // })
    // console.log('players: ', players)

    const me = this.props.players.filter(
      player => player.email === this.props.email
    )[0]

    const orderedPlayers = this.props.players.sort(
      (a, b) => a.number < b.number
    )
    console.log(orderedPlayers)

    let meIndex
    orderedPlayers.forEach(player => {
      if (player.email === me.email) {
        meIndex = player.number - 1
      }
    })

    const leftNeighborIndex =
      meIndex > 1 ? meIndex - 1 : orderedPlayers.length - 1
    const rightNeighborIndex =
      meIndex < orderedPlayers.length - 1 ? meIndex + 1 : 1

    const others = orderedPlayers.filter(
      player => Math.abs(player.number - me.number) >= 2
    )
    console.log('others: ', others)

    // keys represent positions on table, values represent indices in orderedPlayers array
    const positionMap = {
      1: meIndex,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null
    }

    return (
      <div className="game-table-testing">
        <div className="others-row-2">
          <div className="other-container" />
          <div className="other-container" />
        </div>
        <div className="others-row-1">
          {/* {
            (others.length > 1) &&
            <div className="other-container">
              <PlayerArea player={orderedPlayers[leftNeighborIndex]. - ]}
            </div>
          } */}
          <div className="other-container" />
          {/* {
              (orderedPlayers[leftNeighborIndex - 1])
            } */}
          <div className="other-container" />
        </div>
        <div className="neighbors-row">
          <div className="neighbor-container">
            <PlayerArea player={orderedPlayers[leftNeighborIndex]} />
          </div>
          <div className="neighbor-container">
            <PlayerArea player={orderedPlayers[rightNeighborIndex]} />
          </div>
        </div>
        <div className="my-row">
          <div className="my-container">
            <PlayerArea player={orderedPlayers[meIndex]} />
          </div>
        </div>
      </div>
    )
  }
}

export default firestoreConnect()(GameTableTesting)
