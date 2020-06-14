import React, { Component } from 'react';
import ParkingGarageItem from './ParkingGarageItem';

class ParkingGarageList extends Component {   
    render() {
        const place = this.props.place;
        const listItems = this.props.list
            .filter(item => item.place.includes(place))
            .map(
                parkingGarageItem => 
                <ParkingGarageItem key={parkingGarageItem.toString()} item={parkingGarageItem} />
            );

        return ( 
            <>
                <p>Parking Garage list feature</p>
                {listItems}
            </>
        );
    }
  }
  
  export default ParkingGarageList;