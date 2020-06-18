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
      searchFilter: {
        A: false,
        P: false,
        F: true,
      },
    }

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearchFilterChange = this.handleSearchFilterChange.bind(this);
  }

  handleSearchInputChange(query) {
    this.setState({
      searchPlace: query,
    })
  }

  handleSearchFilterChange(filterItem, checked) {
    const currentFilter = this.state.searchFilter;
    const item = { [filterItem]: checked};

    this.setState({
      searchFilter: Object.assign(currentFilter, item),
    })
  }

  render() {
    return (
      <>
        <h1>Parking Garages</h1>
        <SearchPlace searchInput={this.state.searchPlace} onSearchInputChange={this.handleSearchInputChange} />
        <SearchFilter searchFilter={this.state.searchFilter} onSearchFilterChange={this.handleSearchFilterChange}/>
        <ParkingGarageList place={this.state.searchPlace} filter={this.state.searchFilter} list={dataParkingGarageList} />
      </>
    );
  }
}


export default ParkingGarages;