
import React, { Component } from 'react';

export default class TripPageList extends Component {
    render(){
        return(
            <section>
                <section>
                <header>Hello{this.props.trip.name}</header>
                <fieldset>
                <p>Location:{this.props.trip.location}</p>
                <p>Date:{this.props.trip.date}</p>
                <p>Price:{this.props.trip.price}</p>
                </fieldset>
                </section>
            </section>
        )
    }
}