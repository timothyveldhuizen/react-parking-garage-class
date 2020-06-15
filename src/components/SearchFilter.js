import React, { Component } from 'react';

class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.handleParkingTypeFilterChange = this.handleParkingTypeFilterChange.bind(this);
  }

  handleParkingTypeFilterChange(e) {
    this.props.onSearchFilterChange(e.target.value);
    console.log(e.target.value)
  }

  render() {
    const parkingType = [
      { A: 'Administratief adres' },
      { P: 'Postadres' },
      { F: 'Feitelijk adres' },
    ];

    const itemTypes = parkingType.map(
      item => {
        return <>
          <label for={`searchfilter-${Object.keys(item)}`}>{Object.values(item)}</label>
          <input type="checkbox" id={`searchfilter-${Object.keys(item)}`} value={Object.keys(item)} onChange={this.handleParkingTypeFilterChange} />
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