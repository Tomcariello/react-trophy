import React, { Component } from 'react';
import './activities.css';

class Activities extends Component {
  state = {users: []}

  //Create empty array that will contain the data after it is fetched
  constructor() {
    super();
    this.state = {
      activities: []
    }
  }

  componentDidMount() {
    fetch('/api/trophy')
      .then(res => res.json())
      .then(activities => this.setState({activities}, () => console.log('fetched', activities)));
  }
  
  render() {
    return (
      <div>
        <h2>Activities</h2>
        <ul>
          {this.state.activities.map(activity =>
          <li key={activity.id}>{ activity.activity }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Activities;
