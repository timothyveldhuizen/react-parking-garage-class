import React, { Component } from 'react';

class ParkingGarageItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      return ( 
        <div>
            <h1>{this.props.item.streetname}</h1>
        </div>
      );
    }
  }
  
  export default ParkingGarageItem;