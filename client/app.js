import React from 'react'

import GameTable from './components/GameTable'
import NavBar from './components/Header'
import GameRoutes from './GameRoutes'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <GameRoutes />
      {/* <GameTable /> */}
    </div>
  )
}

export default App
