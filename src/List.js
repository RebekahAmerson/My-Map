import React, { Component } from 'react';


class List extends Component {
  state = {
    locations: [
      {name: 'Pittsburg State University',
      coordinates: [-94.705700, 37.422820],
      description: 'Go, Gorillas!',
      },
      {name: 'The Mall Deli',
      coordinates: [-94.703100, 37.380270],
      description: 'Must try the Creamy Italian on a cracker!',
      },
      {name: 'Kiddieland',
      coordinates: [-94.709330, 37.420540],
      description: 'A community treasure.',
      },
      {name: 'Lakeside Park',
      coordinates: [-94.729400, 37.469790],
      description: 'Watch out for the angry geese!',
      },
      {name: 'Lotus Express',
      coordinates: [-94.705290, 37.404850],
      description: 'Cashew Chicken done right!',
      },
      {name: 'Harry\'s Cafe',
      coordinates: [-94.704370, 37.411570],
      description: 'Mmmmmm, breakfast.',
      },
      {name: 'The Fox Theatre',
      coordinates: [-94.704920, 37.405280],
      description: 'Restoring a classic theater.',
      },
      {name: 'Moorman\'s',
      coordinates: [-94.704950, 37.395520],
      description: 'Just like Cheers, if you go early.',
      },
      {name: 'Pitt Plastics',
      coordinates: [-94.679350, 37.438290],
      description: 'Makin\' trash bags.',
      },
      {name: 'NPC International',
      coordinates: [-94.713360, 37.426440],
      description: 'Pizza empire.',
      }
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
          {locations.map(location => (<li className="list-item" key={location.name}>{location.name}</li>))}
          </ul>
        </div>
      </div>
    )
  }
}

export default List;
