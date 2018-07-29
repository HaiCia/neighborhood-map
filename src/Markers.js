import React, { Component } from 'react';

class Markers extends Component {

  state = {
    infoOn: false
  }

  setInfo = (infoOn) => {
    //this.setState({mouseOn: true, mouseOff: false})
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
          {infoOn === true && (
            <p className='info-window'>{this.props.title}</p>
          )}
        </div>)
    }

}

export default Markers