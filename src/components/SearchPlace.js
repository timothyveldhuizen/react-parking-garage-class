import React, { Component } from 'react';

class SearchPlace extends Component {
    constructor(props) {
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(e) {
        this.props.onSearchInputChange(e.target.value);
    }

    render() {
      return ( 
          <div>
              <label for="searchplace">Search place</label>
              <input type="text" id="searchplace" value={this.props.searchText} onChange={this.handleSearchTextChange} />
          </div>
      );
    }
  }
  
  export default SearchPlace;