
import React, { Component } from 'react';

export default class TripPageList extends Component {
    render(){
        return(
            
            
            <section>
                <section>
                    {
                this.props.trips.map(trip =>
                <div id={`trips--${trip.id}`} key={trip.id} className="tripCard">
                <header>Hello{this.props.trip.name}</header>
                <fieldset>
                <p>Location:{this.props.trip.location}</p>
                <p>Date:{this.props.trip.date}</p>
                <p>Price:{this.props.trip.price}</p>
                </fieldset>
                </div>
                )}
                </section>
            </section>
        )
    }
}