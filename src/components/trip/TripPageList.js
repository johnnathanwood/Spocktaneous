
import React, { Component } from 'react';

export default class TripPageList extends Component {
    render() {
        console.log('TripPageList ', this.props.trip);
        return (

            this.props.trip && this.props.trip.map((trip) => {
                return (
                    <div key={trip.id}>
                        {trip.trip}
                        {/* {trip.date}
                        {trip.budget.price} */}
                    </div>
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