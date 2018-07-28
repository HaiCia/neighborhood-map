import React, { Component } from 'react'
import './App.css';
import Search from './Search'
import Map from './Map'


class App extends Component {

  state = {
    places: [
      {title: 'Red Hot  Buffet', location: {lat: 53.7996, lng: -1.5451 }},
      {title: 'Thai Edge Restaurant', location: {lat: 53.8011, lng: -1.5515 }},
      {title: 'Tattu Reataurant and Bar', location: {lat: 53.7981, lng: -1.5513 }},
      {title: 'The Alchemist', location: {lat: 53.79734, lng: -1.5474 }}, 
      {title: 'Angelica', location: {lat: 53.7963, lng: -1.5445 }},
      {title: 'Friends of Ham', location: {lat: 53.7955, lng: -1.5451 }}
    ]
  }

  render() {

    const { places } = this.state

    return (
      <div className="App">
        <h1 className="header">Neighborhood Map</h1>
        <div className="container">
        <Search places={places} />
        <Map places={places} />
        </div>
      </div>
    );
  }
}

export default App;
