import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: []}

  //OIn applciation start, fetch all Users from 'database' and send the json to be rendered
  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }
  
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div>
            <div>{user.id}</div>
            <div key={user.id}>{user.username}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
