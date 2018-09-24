import React, { Component } from 'react';


class Map extends Component {

componentDidMount() {
  const screen = window.innerWidth;
  let zoomSize;
  if (screen >= 590) {
   zoomSize = 12;
  } else {
   zoomSize = 11.5;
  }

  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  mapboxgl.accessToken = 'pk.eyJ1IjoiYmVja2E4MTEiLCJhIjoiY2prY28ydWVtMDRtbzNxcnI3aGQzbWEyaCJ9.oFm0HaRTBybwDJyeRttpfQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [ -94.704709, 37.410496 ],
    zoom: zoomSize
  });
}

makeMarker(locations) {
  locations.forEach(location => {
    new mapboxgl.Marker()
    .setLngLat(location.coordinates)
    .addTo(map);
  })
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
