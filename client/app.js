import React from 'react'
import NavBar from './components/NavBar/Header'
import GameRoutes from './GameRoutes'

const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <GameRoutes />
    </div>
  )
}

export default App
