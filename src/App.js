import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header id="header">Header</header>
      <div id="map">Map</div>
      <div id="filter-options">Filter</div>
      <div id="list-view">List</div>
      <footer id="footer">Footer</footer>
      </div>
    );
  }
}

export default App;
