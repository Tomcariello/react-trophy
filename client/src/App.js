import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Activities from './components/activities/activities'

class App extends Component {
  state = {users: []}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <Activities />
      </div>
    );
  }
}

export default App;
