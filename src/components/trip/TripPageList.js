
import React, { Component } from 'react';
import "../trip/trip.css"


export default class TripPageList extends Component {

    render() {
        if (this.props.trip) {
            var createdTrip = this.props.trip.slice(-1)[0];
        }
        return (

            <div class="card" key={createdTrip.id}>
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                <card class="cardwords">
                    <h5> Name: {createdTrip.name}</h5>
                    <h6> City: {createdTrip.city}</h6>
                    <h6> Street: {createdTrip.street}</h6>
                    <h6> State: {createdTrip.state}</h6>
                    <h6> Zipcode: {createdTrip.zipcode}</h6>
                    <h6> Date: {createdTrip.date}</h6>
                    <h6> Price: {createdTrip.price}</h6>
                    <div class="buttonContainer">
                    <button
                        onClick={() => this.props.deleteTrip(createdTrip.id)
                            .then(() => this.props.history.push("/trip/trips"))}
                        className="delete">Delete</button>
                    <button
                        onClick={() => this.props.history.push(`/trip/edit/${createdTrip.id}`)}
                        className="delete"><span>Edit</span></button>
                        </div>
                </card>
            </div>
        )
    }
}