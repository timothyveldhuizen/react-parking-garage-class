import React, { Component } from 'react';

class SearchFilter extends Component {
    render() {
      return ( 
        <div>
            <label for="searchfilter">Search filter</label>
            <input type="checkbox" id="searchfilter" />
        </div>
      );
    }
  }
  
  export default SearchFilter;