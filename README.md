# React Parking Garage (class components)

A example app using React class components to search for parking garages in the Netherlands.

## Components

- ParkingGarages: contains the whole feature of filtering parking garages
- SearchPlace: contains input field to search for a parking garage by place
- SearchFilter: contains options to filter for parking garage
- ParkingGarageList: contains a list of parking garages
- ParkingGarageItem: contains parking garage information

## Data

- SearchPlace: dynamic data that changes over time (in this case user input)
- SearchFilter: dynamic data that changes over time (in this case user input)
- ParkingGarageList: static data from external source (json)
- ParkingGarageItem: static data from external source (json)

External source is open data from RDW containing parking garage information: [Open Data Parkeren: PARKEERADRES](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q)

## Challenge

The challenge is to build with React class components above components with a correct component communication.
That means data flows down with props or data flows up with events between components.
And having the state / data in the correct components.

## Implementation

```
-ParkingGarages
--SearchPlace
--SearchFilter
--ParkingGarageList
---ParkingGarageItem
```

### ParkingGarages

This component is a smart (stateful) component that keeps track of state and handles dynamic data over time received through events from child components. It distributes the right data to the right dumb (presentational) components SearchPlace, SearchFilter and ParkingGarageList.

### SearchPlace

This component is a dumb (presentational) component with no state, only receiving props from ParkingGarage and passing data up to ParkingGarage with a event when the input search field value changes.

### SearchFilter

This component is a dumb (presentational) component with no state, only receiving props from ParkingGarage and passing data up to ParkingGarage with a event when the checkbox selection changes.
Also this component contains a small object to display the correct content for the checkboxes.
```
const parkingType = [
  { A: 'Administratief adres' },
  { P: 'Postadres' },
  { F: 'Feitelijk adres' },
];
```
Note: Can this be moved to ParkingGarages and pass it SearchFilter to make SearchFilter more dumb?

### ParkingGarageList

This component is a dumb (presentational) component, but maybe also smart. As it receives props from ParkingGarage and uses that to filter on through the list and display it.
The filtering is now `search AND filter`, so you search within the selected filter, if there is no filter selected then there is nothing you can search within.

### ParkingGarageItem

This component is a clean dumb (presentational) component with only a render() method and receiving props from ParkingGarageList.