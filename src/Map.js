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

     const script = document.createElement('script');
     script.innerText = `mapboxgl.accessToken = 'pk.eyJ1IjoiYmVja2E4MTEiLCJhIjoiY2prY28ydWVtMDRtbzNxcnI3aGQzbWEyaCJ9.oFm0HaRTBybwDJyeRttpfQ';
     var map = new mapboxgl.Map({
       container: 'map',
       style: 'mapbox://styles/mapbox/streets-v10',
       center: [ -94.704709, 37.410496 ],
       zoom: ${zoomSize}
     });`;
     document.body.appendChild(script);
   }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default Map;
