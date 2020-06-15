import React, { Component } from 'react';
import ParkingGarageItem from './ParkingGarageItem';

class ParkingGarageList extends Component {
    render() {
        const place = this.props.place;
        const listItems = this.props.list
            .filter(search)
            .map(item => {
                const listKey = item.parkingaddressreferencetype + item.parkingaddressreference + item.parkingaddresstype;
                return <ParkingGarageItem key={listKey} item={item} />
            }
            );

        function search(item) {
            return item.place ? item.place.toLowerCase().includes(place.toLowerCase()) : item.place;
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