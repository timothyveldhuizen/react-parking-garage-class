import React, { Component } from 'react';

const parkingType = [
  { A: 'Administratief adres' },
  { P: 'Postadres' },
  { F: 'Feitelijk adres' },
];
class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.handleParkingTypeFilterChange = this.handleParkingTypeFilterChange.bind(this);
  }

  handleParkingTypeFilterChange(e) {
    this.props.onSearchFilterChange(e.target.value, e.target.checked);
  }

  isChecked(item) {
    return this.props.searchFilter[item] ? this.props.searchFilter[item] : false;
  }

  render() {
    const itemTypes = parkingType.map(
      item => {
        const keys = Object.keys(item);
        const values = Object.values(item);
        return <>
          <label for={`searchfilter-${keys}`}>{values}</label>
          <input type="checkbox" id={`searchfilter-${keys}`} value={keys} checked={this.isChecked(keys)} onChange={this.handleParkingTypeFilterChange} />
        </>
      }
    );

    return (
      <div>
        {itemTypes}
      </div>
    );
  }
}

export default SearchFilter;