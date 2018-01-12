import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { View } from './components/view'

class App extends Component {
  render() {
    return (
      <div className="App" > 
        <div id='header'>
          <h1>
          West Coast Weather
          </h1>
        </div>
        <View/>
      </div>
    );
  }
}

export default App;
