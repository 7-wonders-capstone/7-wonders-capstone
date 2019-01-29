import React from 'react'
import {firestoreConnect} from 'react-redux-firebase'

class Lobby extends React.Component {
  render() {
    return <div>Lobby</div>
  }
}

export default firestoreConnect()(Lobby)
