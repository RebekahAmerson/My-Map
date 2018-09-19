import React, { Component } from 'react';


class List extends Component {
  render() {
    return (
      <div>
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
          </ul>
        </div>
      </div>
    )
  }
}

export default List;
