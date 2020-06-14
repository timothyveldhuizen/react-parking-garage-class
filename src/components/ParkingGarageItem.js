import React, { Component } from 'react';

class ParkingGarageItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.streetname} {this.props.item.housenumber}</h1>
        <h2>{this.props.item.zipcode} {this.props.item.place}</h2>
        <h3>{this.props.item.province}</h3>
        <p>{this.props.item.parkingaddressreferencetype}</p>
        <p>{this.props.item.parkingaddressreference}</p>
      </div>
    );
  }
}

export default ParkingGarageItem;