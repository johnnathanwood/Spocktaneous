
import React, { Component } from 'react';

export default class TripPageList extends Component {
    render() {
        console.log('TripPageList ', this.props.trip);
        return (

            this.props.trip && this.props.trip.map((trip) => {
                console.log("my trip", trip)
                return (
                    <section>
                        <div key={trip.id}>
                            <h5> Name: {trip.name}</h5>
                            <h6> City: {trip.city}</h6>
                            <h6> Street: {trip.street}</h6>
                            <h6> State: {trip.state}</h6>
                            <h6> Zipcode: {trip.zipcode}</h6>
                            <h6> Date: {trip.date}</h6>
                            <h6> Price: {trip.price}</h6>
                            <button
                                onClick={() => this.props.deleteTrip(trip.id)
                                    .then(() => this.props.history.push("/trip/trips"))}
                                className="nav-link-delete"><hover>Delete</hover></button>
                            <button
                                onClick={() => this.props.history.push(`/trip/edit/${trip.id}`)}
                                className="card-link-edit"><span>Edit</span></button>
                        </div>
                    </section>
                    // <section>
                    //     <header>Hello{trip.name}</header>
                    //     <fieldset>
                    //         <p>Location:{trip.location}</p>
                    //         <p>Date:{trip.date}</p>
                    //         <p>Price:{trip.price}</p>
                    //     </fieldset>
                    // </section>
                )
            })

        )
    }
}