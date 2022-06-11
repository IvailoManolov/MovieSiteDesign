import React from 'react'
import Details from './components/Details'
import Episodes from './components/Episodes'
import Footer from './components/Footer'
import Home from './components/Home'
import Info from './components/Info'
import Videos from './components/Videos'

function App() {
  return (
    <div>
      <Home/>
      <Info/>
      <Episodes/>
      <Videos/>
      <Details/>
      <Footer/>
    </div>
  )
}

export default App