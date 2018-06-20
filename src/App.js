import React, { Component } from 'react'
import './App.css'
import Calculator from './components/Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://img0.etsystatic.com/215/0/13221305/il_570xN.1209981028_jgff.jpg' className="App-logo" alt="logo" />
        </header>
        <Calculator />
      </div>
    )
  }
}

export default App
