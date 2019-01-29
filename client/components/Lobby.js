import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {withRouter} from 'react-router-dom'

class Lobby extends React.Component {
  handleClick = () => {
    const gameId = Math.floor(100000 + Math.random() * 900000)
    this.props.history.push(`/games/${gameId}`)
  }

  render() {
    return (
      <div>
        Lobby
        <button type="button" onClick={this.handleClick}>
          Create Game Room
        </button>
      </div>
    )
  }
}

export default withRouter(firestoreConnect()(Lobby))
