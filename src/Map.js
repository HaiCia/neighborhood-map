import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'


class Map extends Component {
  
  static defaultProps = {
    center: {
      lat: 53.801277,
      lng: -1.5491
    },
    zoom: 14,
  };

  state = {
    markers : [],
  }

  render() {

    const { places } = this.props

   return (
    <div id='map'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCuhPDW5PrNifASBVj39Ieen1WapDMpHC0' }}
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
    >
    <Marker places={places} />
    </GoogleMapReact>
  </div>
  )
  }

}

export default Map