import React, { Component } from 'react';
import ParkingGarageItem from './ParkingGarageItem';

class ParkingGarageList extends Component {
    render() {
        const place = this.props.place;
        const filter = this.props.filter;
        const listItems = this.props.list
            .filter(searchPlace)
            .filter(searchFilter)
            .map(item => {
                    const listKey = item.parkingaddressreferencetype + item.parkingaddressreference + item.parkingaddresstype;
                    return <ParkingGarageItem key={listKey} item={item} />
            }
            );

        function searchPlace(item) {
            return item.place ? item.place.toLowerCase().includes(place.toLowerCase()) : false;
        }

        function searchFilter(item) {
            return Object.values(filter).indexOf(true) > -1 ? filter[item.parkingaddresstype] : false;
        }

        return (
            <>
                <p>Parking Garages</p>
                <span>Number of results {listItems.length}</span>
                {listItems}
            </>
        );
    }
}

export default ParkingGarageList;