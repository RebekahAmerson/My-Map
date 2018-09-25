import React, { Component } from 'react';

class List extends Component {

  render() {
    const {locations} = this.props;

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
          {locations.map(location => (<li className="list-item" key={location.name} onClick={() => console.log(location)}>{location.name}</li>))}
          </ul>
        </div>
      </div>
    )
  }
}

export default List;
