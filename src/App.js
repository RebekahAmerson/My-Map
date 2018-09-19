import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import List from './List.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header id="header">
        <h1>My Hometown: Pittsburg, KS</h1>
      </header>
      <Map />
      <List />
      <footer id="footer">Made using Google Maps and Foursquare API</footer>
      </div>
    );
  }
}

export default App;
