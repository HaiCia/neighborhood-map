import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Markers from './Markers'

// const Markers = ({ src, alt }) => <div><img src={ src } alt={alt}/></div>

class Map extends Component {
  
  static defaultProps = {
    center: {
      lat: 53.7955,
      lng: -1.5451
    },
    zoom: 16,
  };

  // onChildMouseEnter = (e, place) => {
  //   console.log(place)
  //   return <div className='info'>{place.title}</div>
  // }
  // onChildMouseLeave

  render() {

    const { places } = this.props

   return (
    <div id='map'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyCuhPDW5PrNifASBVj39Ieen1WapDMpHC0' }}
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
      // onChildMouseEnter={(e, place)=> {
      //   this.onChildMouseEnter(e, place)
      // }}
      // onChildMouseLeave={this.onChildMouseLeave}
    >

    {places
      .map((place, index) => (
        <Markers
        key = {index}
        lat={place.location.lat}
        lng={place.location.lng}
        title={place.title}
         />))}

    </GoogleMapReact>
  </div>
  )
  }

}

export default Map