import React, { Component } from 'react';

class SearchPlace extends Component {
    render() {
      return ( 
          <div>
              <label for="searchplace">Parking Garage place</label>
              <input type="text" id="searchplace" />
          </div>
      );
    }
  }
  
  export default SearchPlace;