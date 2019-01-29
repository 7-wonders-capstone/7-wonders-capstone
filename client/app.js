import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import GameTable from './components/GameTable'
import Lobby from './components/Lobby'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Authentication from './components/Authentication'
import StartGameButton from './components/StartGameButton'
import GameRoutes from './GameRoutes'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Routes /> */}
      <Authentication />
      <GameRoutes />
      {/* <StartGameButton /> */}
      {/* <GameTable /> */}
      {/* <Lobby /> */}
    </div>
  )
}

export default App
