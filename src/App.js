import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import List from './List.js';

const locationList = [
  {name: 'Pittsburg State University',
  id: '4bd9def5a8d976b018680cb5',
  coordinates: [-94.703647, 37.391253],
  description: 'Go, Gorillas!',
  },
  {name: 'The Mall Deli',
  id: '4cba41ae9552b60cc11cd98b',
  coordinates: [-94.703100, 37.380270],
  description: 'Must try the Creamy Italian on a cracker!',
  },
  {name: 'Kiddieland',
  id: '4cb0c8f3cbab236a1e99a373',
  coordinates: [-94.716955, 37.418278],
  description: 'A community treasure.',
  },
  {name: 'Lakeside Park',
  id: '4c817ae947cc224bafcd7c9f',
  coordinates: [-94.729400, 37.469790],
  description: 'Watch out for the angry geese!',
  },
  {name: 'Lotus Express',
  id: '4c0946b66071a59375a1dd32',
  coordinates: [-94.705290, 37.404850],
  description: 'Cashew Chicken done right!',
  },
  {name: 'Harry\'s Cafe',
  id: '4c5d8f776ebe2d7fea1fd32e',
  coordinates: [-94.704370, 37.411570],
  description: 'Mmmmmm, breakfast.',
  },
  {name: 'The Fox Theatre',
  id: '4f32c6c519836c91c7f95d12',
  coordinates: [-94.704920, 37.411511],
  description: 'Restoring a classic theater.',
  },
  {name: 'Memorial Auditorium',
  id: '4c6b461523971b8de7369a8a',
  coordinates: [-94.706780, 37.412590],
  description: 'Go see a ballet! They are great!',
  },
  {name: 'Pitt Plastics',
  id: '4cd71d3ba5b34688fa759750',
  coordinates: [-94.679350, 37.438290],
  description: 'Makin\' trash bags.',
  },
  {name: 'NPC International',
  id: '4c5725ee6201e21e330f4f6e',
  coordinates: [-94.713360, 37.426440],
  description: 'Pizza empire.',
  }
];

const clientId = 'RMCI1YEJ0BVUTQV1BXNVKE3SQLOWFAFGWBAIXAEBKRNLS4OL';
const clientSecret = '2VQNBUIAR13FXP3SSIJCJOY2DQIRLQPVOZQN4USKLHNJHAOG';

class App extends Component {
  state = {
    locations: locationList
  }

  getInfo(locations) {
    locations.forEach(location => {
      fetch(`https://api.foursquare.com/v2/venues/${location.id}?client_id=${clientId}&client_secret=${clientSecret}&v=20180323`)
          .then(function(response) {
              return response.json();
          })
          .then(data => {
            location.address = data.response.venue.location.formattedAddress;
            location.phone = data.response.venue.contact.formattedPhone;
          })
          .catch(function(err) {
              console.log(err);
          });
    })
  }

  componentDidMount() {
    // this.getInfo(locationList);
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
