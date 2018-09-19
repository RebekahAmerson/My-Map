import React, { Component } from 'react';


class List extends Component {
  state = {
    locations: [
      {name: 'Pittsburg State University'},
      {name: 'The Mall Deli'},
      {name: 'Kiddieland'},
      {name: 'Lakeside Park'},
      {name: 'Lotus Express'},
      {name: 'Harry\'s Cafe'},
      {name: 'The Fox Theatre'},
      {name: 'Moorman\'s'},
      {name: 'Pitt Plastics'},
      {name: 'NPC International'}
    ]
  }

  render() {
    const locations = this.state.locations;

    return (
      <div id="wrapper">
        <div id="search-options">
          <form id="search-bar">
            <input type="text" aria-label="search" placeholder="Search..."/>
            <button aria-label="search button"><i className="fas fa-search"></i></button>
          </form>
        </div>
        <div id="list-view">
          <ul id="list">
          {locations.map(location => (<li className="list-item">{location.name}</li>))}
          </ul>
        </div>
      </div>
    )
  }
}

export default List;
