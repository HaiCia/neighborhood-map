import React, { Component } from 'react'
import ReactWeather from 'react-open-weather'

class Markers extends Component {

  state = {
    infoOn: false
  }

  setInfo = (infoOn) => {
    if(!this.state.infoOn) {
      this.setState({infoOn: true})
      
    } else {
      this.setState({infoOn: false})
    }
  }

    render() {
      const { infoOn } =this.state
      const { clickedPlace } = this.props

      return (
        <div className='icon' onClick={this.setInfo} >
          {clickedPlace.title === this.props.title || infoOn === true ? (
            <div className='info-window'>
            <p className='info-title'>{this.props.title}</p>
            <p className='x'></p>
            <div className='info-weather'>
              <ReactWeather 
                forecast="today"
                apikey="087be0632a06478e89d175412183007"
                type="city"
                city="Leeds"
                unit="metric"/>
                <p className='apixu'>powered by Apixu.com</p>
            </div>
            </div>) : (<p className='icon2'></p>)}

        </div>)
    }

}

export default Markers