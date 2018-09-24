import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import List from './List.js';

class App extends Component {
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
      {name: 'Memorial Auditorium',
      coordinates: [-94.706780, 37.412590],
      description: 'Go see a ballet! They are great!',
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
    return (
      <div className="App">
      <header id="header">
        <h1>My Hometown: Pittsburg, KS</h1>
      </header>
      <Map locations={this.state.locations}/>
      <List locations={this.state.locations}/>
      <footer id="footer">Made using Mapbox and Foursquare API</footer>
      </div>
    );
  }
}

export default App;
