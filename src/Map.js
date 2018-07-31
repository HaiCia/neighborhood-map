import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Markers from './Markers'

class Map extends Component {
  
  static defaultProps = {
    center: {
      lat: 53.7955,
      lng: -1.5451
    },
    zoom: 16,
  };

  render() {

    const { places, clickedPlace } = this.props

    return (
      <div id='map' aria-label="location" role="application">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCuhPDW5PrNifASBVj39Ieen1WapDMpHC0' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >

      {places
        .map((place, index) => (
          <Markers
          key = {index}
          lat={place.location.lat}
          lng={place.location.lng}
          title={place.title}
          clickedPlace={clickedPlace}
          />))}

      </GoogleMapReact>
      </div>
    )
  }

}

export default Map