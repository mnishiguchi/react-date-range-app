import React         from 'react'

// Components
import AppHeader from './AppHeader'

// Styles
require('bootstrap/dist/css/bootstrap.css')
require('./App.css')

const MainLayout = ({children}) => {
  return (
    <div className="App">
      <AppHeader />

      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default MainLayout
