import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      userInput: 'default',
    };

  }

  onInputChange(event) {
    const newValue = event.target.value;
    this.setState({
      userInput: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Tutorial</h1>
        </div>
        <p className="App-intro">
          <div>
            <input
              value={this.state.userInput}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
          <span>{this.state.userInput.toUpperCase()}</span>
        </p>
      </div>
    );
  }
}

export default App;
