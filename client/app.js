import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import GameTable from './components/GameTable'
import TestFirestore from './components/TestFirestore'
import Lobby from './components/Lobby'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Authentication from './components/Authentication'
import StartGameButton from './components/StartGameButton'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Routes /> */}

      {/* <GameTable /> */}
      {/* <TestFirestore /> */}
      {/* <SignUp />
      <SignIn /> */}
      {/* <Lobby /> */}
      <Authentication />
      <StartGameButton />
    </div>
  )
}

export default App
