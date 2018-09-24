import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

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
  locations.forEach(location => {
    new mapboxgl.Marker()
    .setLngLat(location.coordinates)
    .addTo(this.map);
  })}
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
