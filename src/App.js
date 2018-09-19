import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header id="header">
        <h1>My Hometown: Pittsburg, KS</h1>
      </header>
      <div id="map">Map</div>
      <div id="search-options">
        <form id="search-bar">
          <input type="text" aria-label="search" placeholder="Search..."/>
          <button aria-label="search button"><i className="fas fa-search"></i></button>
        </form>
      </div>
      <div id="list-view">
        <ul id="list">
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
          <li className="list-item">Some neat place!</li>
        </ul>
      </div>
      <footer id="footer">Made using Google Maps and Foursquare API</footer>
      </div>
    );
  }
}

export default App;
