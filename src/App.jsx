import React from 'react'
import Layout from './components/Layout'
import "./App.css"
import Homepage from './components/Homepage'

function App() {
  return (
    <div className='main'>
      <Layout/>
      <Homepage/>
    </div>
  )
}

export default App