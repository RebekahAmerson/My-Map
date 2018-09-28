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
}

makeMarker(locations) {
  if (this.state.mapReady) {
    let markers = Array.from(document.querySelectorAll('.marker'));
    markers.forEach(marker => marker.remove());
    locations.forEach(location => {
      const el = document.createElement('div');
      el.className = 'marker';

      let marker = new mapboxgl.Marker(el)
      .setLngLat(location.coordinates)
      .addTo(this.map);
      el.addEventListener('click', () => {
        el.classList.add('clicked');
        window.addEventListener('click', function() {this.removeClass(el)});
//if data doesn't exist, getInfo.then(setInfo).then(addPopup)
        if (!location.phone) {
        this.getInfo(location)
          .then((data) => this.setInfo(data, location))
          .then(() => {
            let popup = new mapboxgl.Popup({ offset: 32 }) // add popups
            .setHTML(this.formatAddress(location));

            marker.setPopup(popup)
            .addTo(this.map);
            marker.togglePopup();

          })
          .catch(function(err) {
              console.log(err);
          });
        }
     });
  })}
}

removeClass(el) {
  console.log('listening for click');
  el.classList.remove('clicked');
  window.removeEventListener('click', this.removeClass);
  console.log('stop listening for click');
}

getInfo(location) {
  return(
  fetch(`https://api.foursquare.com/v2/venues/${location.id}?client_id=${clientId}&client_secret=${clientSecret}&v=20180323`)
    .then((result) => {return result.json()}))
}

setInfo(data, location) {
  location.address = data.response.venue.location.formattedAddress;
  if(data.response.venue.contact.formattedPhone) {
    location.phone = data.response.venue.contact.formattedPhone;
  } else {
    location.phone = 'No Phone Number Found';
  }
}

formatAddress(location) {
  let addressFormat;

  if (location.address.length < 3) {
    addressFormat = `<address>${location.address[0]}</br>
    ${location.phone}</address>`;
  } else {
    addressFormat = `<address>${location.address[0]}</br>
    ${location.address[1]}</br>
    ${location.phone}</address>`;
  }

  return (`
    <h3>${location.name}</h3>
    ${addressFormat}
    <p>${location.description}</p>
    `)
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
