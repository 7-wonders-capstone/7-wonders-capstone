import React from 'react'

import GameTable from './components/GameTable'
import Header from './components/Header'
import GameRoutes from './GameRoutes'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <GameRoutes />
      {/* <GameTable /> */}
    </div>
  )
}

export default App
