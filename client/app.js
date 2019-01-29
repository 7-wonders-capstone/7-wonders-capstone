import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import GameTable from './components/GameTable'
import TestFirestore from './components/TestFirestore'
import Lobby from './components/Lobby'

import * as firebase from 'firebase'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> */}

      {/* <GameTable /> */}
      {/* <TestFirestore /> */}
      <button type="button" onClick={() => firebase.auth().signOut()}>
        Log Out
      </button>
      <SignUp />
      <Lobby />
    </div>
  )
}

export default App
