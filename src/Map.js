import React, { Component } from 'react';


class Map extends Component {
  state = {
    mapIsReady: false
  }

  componentDidMount() {
    //Method adapted from Michael Yurin on https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
     const script = document.createElement('script');
     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAiK33m7LHyRfrAlKYgYsRygLfjMMoPmIc`;
     script.async = true;
     script.defer = true;
     script.addEventListener('load', () => {
       this.setState({ mapIsReady: true });
     });

     document.body.appendChild(script);
   }

   componentDidUpdate() {
     //Method adapted from Michael Yurin on https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
     if (this.state.mapIsReady) {
       const screen = window.innerWidth;
       let zoomSize;
       if (screen >= 590) {
         zoomSize = 13;
       } else {
         zoomSize = 12;
       }
       // Display the map
       this.map = new window.google.maps.Map(document.getElementById('map'), {
         center: {lat: 37.410496, lng: -94.703912},
         zoom: zoomSize,
         mapTypeId: 'roadmap',
       });
       console.log('componentDidUpdate');
       // You also can add markers on the map below
     }
   }

  render() {
    return (
      <div id="map">Map</div>
    )
  }
}

export default Map;
