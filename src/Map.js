import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

const clientId = 'RMCI1YEJ0BVUTQV1BXNVKE3SQLOWFAFGWBAIXAEBKRNLS4OL';
const clientSecret = '2VQNBUIAR13FXP3SSIJCJOY2DQIRLQPVOZQN4USKLHNJHAOG';

class Map extends Component {
  state = {
    mapReady: false
  }

componentDidMount() {
  const screen = window.innerWidth;
  let zoomSize;
  if (screen >= 590) {
   zoomSize = 12;
  } else {
   zoomSize = 11.5;
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoiYmVja2E4MTEiLCJhIjoiY2prY28ydWVtMDRtbzNxcnI3aGQzbWEyaCJ9.oFm0HaRTBybwDJyeRttpfQ';
  this.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [ -94.704709, 37.410496 ],
    zoom: zoomSize
  });
  this.setState({mapReady: true});

  new mapboxgl.Popup({ offset: 25 }) // add popups
  .setLngLat([-94.705097, 37.411381])
  .setHTML(`Here we are`)
  .addTo(this.map);

}

makeMarker(locations) {
  if (this.state.mapReady) {
    locations.forEach(location => {
      const el = document.createElement('div');
      el.className = 'marker';

      new mapboxgl.Marker(el)
      .setLngLat(location.coordinates)
      .addTo(this.map);
      el.addEventListener('click', () => {
//if data doesn't exist, getInfo.then(setInfo).then(addPopup), otherwise just addPopup
        if (!location.phone) {
        this.getInfo(location)
          .then((data) => this.setInfo(data, location))
          .then(() => this.addPopup(location))
          .catch(function(err) {
              console.log(err);
          });
        } else {
          new mapboxgl.Popup({ offset: 25 }) // add popups
          .setLngLat([-94.705097, 37.411381])
          .setHTML(`Here we are`)
          .addTo(this.map);
        }
     });
  })}
}

getInfo(location) {
  return(
  // fetch(`https://api.foursquare.com/v2/venues/explore?near=Pittsburg,KS&client_id=${clientId}&client_secret=${clientSecret}&v=20180323`)
  fetch(`https://api.foursquare.com/v2/venues/${location.id}?client_id=${clientId}&client_secret=${clientSecret}&v=20180323`)
    .then((result) => {return result.json()}))
}

setInfo(data, location) {
  console.log('setting data');
  location.address = data.response.venue.location.formattedAddress;
  if(data.response.venue.contact.formattedPhone) {
    location.phone = data.response.venue.contact.formattedPhone;
  } else {
    location.phone = 'No Phone Number Found';
  }
}

addPopup(location) {
  let addressFormat;

  if (location.address.length < 3) {
    addressFormat = `<address>${location.address[0]}</br>
    ${location.phone}</address>`;
  } else {
    addressFormat = `<address>${location.address[0]}</br>
    ${location.address[1]}</br>
    ${location.phone}</address>`;
  }

  new mapboxgl.Popup({ offset: 25 }) // add popups
  .setLngLat(location.coordinates)
  .setHTML(`
    <h3>${location.name}</h3>
    ${addressFormat}
    <p>${location.description}</p>
    `)
  .addTo(this.map);
  console.log(this.map);
}

  render() {
    const {locations} = this.props;
    return (
      <div id="map">
      { this.makeMarker(locations) }
      </div>
    )
  }
}

export default Map;
