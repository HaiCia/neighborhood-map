import React, { Component } from 'react';
import escaperegExp from 'escape-string-regexp'


class Search extends Component {

  

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query})
    console.log(query)
  }
  
  render() {

    const { places } = this.props
    const { query } =this.state

    let filterPlaces
    if(query) {
      const match = new RegExp(escaperegExp(query), 'i')
      filterPlaces = places.filter((place) => match.test(place.title))
    } else {
      filterPlaces = places
    }

    return (
      <div className='search'>
        <label htmlFor='search' className='search-input-lb'>Find Your Place
          <input type="text" className='search-input' 
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
            <li className='place' key={index}>{place.title}</li>
          ))}
        </ul>
      </div>
      )
  }

}

export default Search