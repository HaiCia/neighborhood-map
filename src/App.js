import React, { Component } from 'react'
import './App.css';
import Search from './Search'
import Map from './Map'


class App extends Component {

  state = {
    places: [
      {title: 'Leeds Red Hot', location: {lat: 53.7976032, lng: -1.5460771 }},
      {title: 'Thai Edge Restaurant', location: {lat: 53.7986571, lng: -1.5481588 }},
      {title: 'Tatu Reataurant and Bar', location: {lat: 53.7981066, lng: -1.5513882 }},
      {title: 'The Alchemist', location: {lat: 53.7981066, lng: -1.5513882 }}, 
      {title: 'Angelica', location: {lat: 53.7962056, lng: -1.5478906 }},
      {title: 'Friends of Ham', location: {lat: 53.7962056, lng: -1.5478906 }}
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
