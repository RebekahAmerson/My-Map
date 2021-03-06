import React, { Component } from 'react';

class List extends Component {
  state = {
    filterValue: 'filter'
  }

  handleChange(filter) {
    this.setState({filterValue: filter});
    if (this.props.onChangeFilter) {
      this.props.onChangeFilter(filter);
    }
  }

  handleClick(location) {
    const locationIndex = this.props.locations.indexOf(location);
    if (this.props.onListClick) {
      this.props.onListClick(locationIndex);
    }
  }

  render() {
    const {locations} = this.props;
    const categories = [
      'all',
      'education',
      'food',
      'kids',
      'entertainment',
      'business'
    ];

    return (
      <div id="wrapper">
        <div id="search-options">
          <select id="filter-bar" aria-label="filter selection" value={this.state.filterValue} onChange={(event) => this.handleChange(event.target.value)}>
            <option value="filter" disabled>Filter locations here</option>
          {categories.map(category => (<option value={category} key={category}>{category.charAt(0).toUpperCase() +category.slice(1)}</option>))}
          </select>
        </div>
        <div id="list-view">
          {locations.map(location => (<button className="list-item" key={location.name} onClick={() => this.handleClick(location)}>{location.name}</button>))}
        </div>
      </div>
    )
  }
}

export default List;
