import React, { Component } from 'react';
import SearchPlace from './SearchPlace';
import SearchFilter from './SearchFilter';
import ParkingGarageList from './ParkingGarageList';

class ParkingGarages extends Component {
    render() {
      return ( 
        <>
          <h1>Parking Garages</h1>
          <SearchPlace />
          <SearchFilter />
          <ParkingGarageList />
        </>
      );
    }
  }
  
  export default ParkingGarages;