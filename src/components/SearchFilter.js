import React, { Component } from 'react';

class SearchFilter extends Component {
    render() {
      return ( 
        <div>
            <label for="filter">Parking Garage filter</label>
            <input type="checkbox" id="filter" />
        </div>
      );
    }
  }
  
  export default SearchFilter;