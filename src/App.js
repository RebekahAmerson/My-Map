import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import List from './List.js';

const locationList = [
  {name: 'Pittsburg State University',
  id: '4bd9def5a8d976b018680cb5',
  category: 'education',
  description: 'Go, Gorillas!',
  coordinates: [-94.704782, 37.391255]
  },
  {name: 'The Mall Deli',
  id: '4cba41ae9552b60cc11cd98b',
  category: 'food',
  description: 'Must try the Creamy Italian on a cracker!',
  coordinates: [-94.703544, 37.380820]
  },
  {name: 'Kiddieland',
  id: '4cb0c8f3cbab236a1e99a373',
  category: 'kids',
  description: 'A community treasure.',
  coordinates: [-94.717326, 37.418476]
  },
  {name: 'Lakeside Park',
  id: '4c817ae947cc224bafcd7c9f',
  category: 'kids',
  description: 'Watch out for the angry geese!',
  coordinates: [-94.713367, 37.403478]
  },
  {name: 'Lotus Express',
  id: '4c0946b66071a59375a1dd32',
  category: 'food',
  description: 'Cashew Chicken done right!',
  coordinates: [-94.705292, 37.404850]
  },
  {name: 'Harry\'s Cafe',
  id: '4c5d8f776ebe2d7fea1fd32e',
  category: 'food',
  description: 'Mmmmmm, breakfast.',
  coordinates: [-94.704474, 37.411477]
  },
  {name: 'The Fox Theatre',
  id: '4f32c6c519836c91c7f95d12',
  category: 'entertainment',
  description: 'Restoring a classic theater.',
  coordinates: [-94.705097, 37.411381]
  },
  {name: 'Memorial Auditorium',
  id: '4c6b461523971b8de7369a8a',
  category: 'entertainment',
  description: 'Go see a ballet! They are great!',
  coordinates: [-94.706476, 37.412463]
  },
  {name: 'Pitt Plastics',
  id: '4cd71d3ba5b34688fa759750',
  category: 'business',
  description: 'Makin\' trash bags.',
  coordinates: [-94.679352, 37.438290],
  phone: '620-231-5849',
  address: ['atkinson', 'pittsburg']
  },
  {name: 'NPC International',
  id: '4c5725ee6201e21e330f4f6e',
  category: 'business',
  description: 'Pizza empire.',
  coordinates: [-94.713364, 37.426441]
  }
];

class App extends Component {
  state = {
    locations: locationList,
    markers: {
      open: false,
      index: ''
    }
  }

updateLocations(filter) {
  if (filter !== 'all'){
    this.setState({locations: locationList.filter(location => location.category === filter)});
  } else {
    this.setState({locations: locationList});
  }
}

passToMap = (indexNum) => {
  this.setState({markers: {
        open: true,
        index: indexNum
      }
})
}

  render() {
    return (
      <div className="App">
      <header id="header">
        <h1>My Hometown: Pittsburg, KS</h1>
      </header>
      <Map locations={this.state.locations} openMarker={this.state.markers}/>
      <List locations={this.state.locations} onChangeFilter={(filter) => this.updateLocations(filter)} onListClick={(index) => this.passToMap(index)}/>
      <footer id="footer">Made using Mapbox and Foursquare API</footer>
      </div>
    );
  }
}

export default App;
