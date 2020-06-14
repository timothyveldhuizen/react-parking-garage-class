import React, { Component } from 'react';
import SearchPlace from './SearchPlace';
import SearchFilter from './SearchFilter';
import ParkingGarageList from './ParkingGarageList';
import dataParkingGarageList from '../data/ParkingGarageList';

class ParkingGarages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPlace: '',
      searchFilter: '',
    }
    
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
}

handleSearchInputChange(query) {
  this.setState({
    searchPlace: query,
  })
  console.log(this.state);
}

  render() {  
    return ( 
      <>
          <h1>Parking Garages</h1>
          <SearchPlace searchInput={this.state.searchPlace} onSearchInputChange={this.handleSearchInputChange}/>
          <SearchFilter />
          <ParkingGarageList place={this.state.searchPlace} list={dataParkingGarageList}/>
        </>
      );
    }
  }
  
  
  export default ParkingGarages;