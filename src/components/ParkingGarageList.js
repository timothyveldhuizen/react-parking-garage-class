import React, { Component } from 'react';
import ParkingGarageItem from './ParkingGarageItem';
import dataParkingGarageList from '../data/ParkingGarageList';

class ParkingGarageList extends Component {
    constructor() {
        super();
        this.state = {parkingGarageList: dataParkingGarageList};
    }

    
    render() {
        const listItems = this.state.parkingGarageList.map(
            parkingGarageItem => <ParkingGarageItem key={parkingGarageItem.toString()} item={parkingGarageItem} />
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