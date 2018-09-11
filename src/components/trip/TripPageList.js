import React, { Component } from 'react'

// import './Trip.css'

    export default class TripPageList extends Component {

        render() {
    
            return (
                <React.Fragment>
                    <div className="newsButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/trip")
                            }
                            }>
                            Create New Article
                                    </button>
                    </div>
                    <section>
                        {
                            <div>
                                <h1 className="header">Breaking News:</h1>
                                <hr />
                                <section className="trip">
                                    {
                                        this.props.trip.map(trip =>
                                            <div id={`trip--${trip.id}`} key={trip.id} className="tripCard">
                                                <div className="tripCard-body">
                                                    <section className="tripCard-title">
                                                        <h4>{trip.budget}</h4>
                                                        {trip.budget}
                                                    </section>
                                                    <div className="deleteButton">
                                                        <button onClick={() => this.props.deleteTrip(trip.id)}
                                                            className="tripCard-link">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </section>
                            </div>
                        }
                    </section>
                </React.Fragment>
            )
        }
    }
