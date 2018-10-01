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

    window.addEventListener('mousedown', (event) => {
      const popup = document.querySelector('.mapboxgl-popup');
      const clicked = document.querySelector('.clicked');
      if(popup && event.target !== clicked) {
        clicked.classList.remove('clicked');
      }
    })
  }

  makeMarker(locations) {
    if (this.state.mapReady) {
      const markers = document.querySelectorAll('.marker');
  //remove previous markers.
      markers.forEach(marker => marker.remove());
  //make new markers for updated location list.
      locations.forEach(location => {
        const el = document.createElement('div');
        el.className = 'marker';

        let marker = new mapboxgl.Marker(el)
        .setLngLat(location.coordinates)
        .addTo(this.map);
        let popup = new mapboxgl.Popup({ offset: 32 });

        el.addEventListener('click', () => {
          const popupOpen = document.querySelector('.mapboxgl-popup');
          //if data doesn't exist, getInfo.then(setInfo).then(addPopup)
          if (!location.phone) {
            this.getInfo(location)
            .then((data) => this.setInfo(data, location))
            .then(() => popup.setHTML(this.formatAddress(location)))
            .catch(function(err) {
              console.log(err);
              popup.setHTML(`
                <h3>${location.name}</h3>
                <p>Unable to get extra info</p>
                <p>${location.description}</p>
                `);
              });
          } else {
            popup.setHTML(this.formatAddress(location));
          }
          marker.setPopup(popup);
          el.classList.toggle('clicked');

          if (popupOpen) {
            marker.togglePopup();
          }
       });
    })
    // if (this.props.openMarker.open) {
    //   console.log('open marker triggered');
    //   const index = [this.props.openMarker.index];
    //   const tempMark = document.querySelectorAll('.marker')[index];
    //   if (tempMark) {
    //     tempMark.classList.add('clicked');
    //   }
    //   if (!popupOpen) {
    //     if (!locations[index].phone) {
    //     this.makePopup(locations[index], tempMark);
    //     } else {
    //     tempMark.togglePopup();
    //     }
    //   }
    // }
  }}

  // makeMarker(locations) {
  //   if (this.state.mapReady) {
  //     const markers = document.querySelectorAll('.marker');
  //     const popupOpen = document.querySelector('.mapboxgl-popup');
  // //remove previous markers.
  //     markers.forEach(marker => marker.remove());
  // //make new markers for updated location list.
  //     locations.forEach(location => {
  //       const el = document.createElement('div');
  //       el.className = 'marker';
  //
  //       let marker = new mapboxgl.Marker(el)
  //       .setLngLat(location.coordinates)
  //       .addTo(this.map);
  // //on click, turn marker gold.
  //       el.addEventListener('click', (event) => {
  //         debugger;
  //         if (!popupOpen) {
  //           console.log('make it gold');
  //           el.classList.add('clicked');
  //         }
  //         //if data doesn't exist, getInfo.then(setInfo).then(addPopup)
  //         if (!location.phone) {
  //           this.makePopup(location, marker);
  //         }
  //      });
  //   })
  //   if (this.props.openMarker.open) {
  //     console.log('open marker triggered');
  //     const index = [this.props.openMarker.index];
  //     const tempMark = document.querySelectorAll('.marker')[index];
  //     if (tempMark) {
  //       tempMark.classList.add('clicked');
  //     }
  //     if (!popupOpen) {
  //       if (!locations[index].phone) {
  //       this.makePopup(locations[index], tempMark);
  //       } else {
  //       tempMark.togglePopup();
  //       }
  //     }
  //   }
  // }}
  //
  // makePopup(location, marker) {
  //   console.log(marker);
  //   let popup = new mapboxgl.Popup({ offset: 32 }) // add popups
  //   this.getInfo(location)
  //     .then((data) => this.setInfo(data, location))
  //     .then(() => {
  //       popup.setHTML(this.formatAddress(location));
  //     })
  //     .catch(function(err) {
  //       console.log(err);
  //       popup.setHTML(`
  //         <h3>${location.name}</h3>
  //         <p>Unable to get extra info</p>
  //         <p>${location.description}</p>
  //         `);
  //
  //     });
  //     marker.setPopup(popup)
  //     .addTo(this.map);
  //   }

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
