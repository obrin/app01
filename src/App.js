import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import unleash from './utils/config'

function App() {
  const [toggles, setData] = useState({
    isLearnReact: unleash.isEnabled('learn-react'),
  })
  useEffect(() => {
    unleash.on('update', () => {
      setData({ isLearnReact: unleash.isEnabled('learn-react') })
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {toggles.isLearnReact ? 'Learn React' : 'Learn Angular'}
        </a>
      </header>
    </div>
  )
}

export default App
