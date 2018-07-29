import React, { Component } from 'react';
import escaperegExp from 'escape-string-regexp'
import Map from './Map'

class Search extends Component {

  state = {
    query: '',
    clickedPlace : ''
  }

  updateQuery = (query) => {
    this.setState({query: query})
    console.log(query)
  }

  markerClick = (place) => {
   
   //filterPlaces = place;
  }

  
  render() {

    const { places } = this.props
    const { query, clickedPlace } =this.state

    let filterPlaces
    if(query) {
      const match = new RegExp(escaperegExp(query), 'i')
      filterPlaces = places.filter((place) => match.test(place.title))
    } else {      
      filterPlaces = places
    }

    return (
     
      <div className="container">
        <div className='search'>
          <label htmlFor='search' className='search-input-lb'>Find Your Place
            <input 
            tabIndex="1"
            size="12"
            type="text"
            className='search-input' 
            id='search' placeholder='Filter' 
            value={this.state.query}
            onChange={(e)=> {
              this.updateQuery(e.target.value)
            }}
            />
          </label>
          <ul className='places'>
            {filterPlaces
            .map((place, index) => (
              <li className='place' key={index} tabIndex="1" onClick = {() => {
                this.setState({clickedPlace: place})
              }}>{place.title}</li>
            ))}
          </ul>
        </div>
        <Map places={filterPlaces} clickedPlace={clickedPlace} />
      </div>
      )
  }

}

export default Search