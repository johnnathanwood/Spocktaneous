import React, { Component } from 'react'

export default class TripParametersPage extends Component {
    search = (location, price, date, availableTrips)=>{
        var searchedTrips =[];
        for (var i=0; i < availableTrips.length; i++) {
            if (availableTrips[i].location === location && availableTrips[i].price === price && availableTrips.date === date) {
                searchedTrips.push(availableTrips[i]);
            }
        }
    }
    render() {
        var searched = this.search(this.props.trips);
        console.log("Searched: ", searched);
        return(
            <div> TRIPS</div>
        )
    }
}

