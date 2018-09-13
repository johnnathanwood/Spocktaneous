import React, { Component } from 'react'

class TripPageList extends Component {
    findUserName = trips => {
        return this.props.users.find(user => user.id === trips.userId).username
    }

    render() {
        // console.log(this.props.users.find(user => user.userName === "MessageTest"))
        // console.log(this.props.users)
        // console.log(this.props)
        const credentials = JSON.parse(localStorage.getItem('credentials'))




        return (
            <React.Fragment>

                <div className="tripsButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/trip/new")
                        }
                        }>
                        Create new message
                    </button>
                </div>

                <section>
                    <div>
                        <h2 className="formHeader">What everyone is saying</h2>
                        <section className="trips">
                            {
                                this.props.trips.map(trip =>
                                    <div id={`trip--${trip.id}`} key={trip.id} className="tripCard">
                                        <div id="tripCard-body">
                                            <h6 className="tripCard-title">
                                                <section className="formCard">
                                                    <h5>{this.findUserName(trip)}</h5>
                                                    <h6>{trip.budget}</h6>
                                                    <h6>{trip.location}</h6>
                                                    <p>{trip.date}</p>
                                                    <button
                                                        onClick={() => this.props.deleteTrip(trip.id)
                                                            .then(() => this.props.history.push("/trip"))}
                                                        className="nav-link-delete"><hover>Delete</hover></button>
                                                    <button
                                                        onClick={() => this.props.history.push(`/messages/edit/${trip.id}`)}
                                                        className="card-link-edit"><span>Edit</span></button>



                                                </section>

                                            </h6>
                                        </div>
                                    </div>





                                )}
                        </section>
                    </div>

                </section>

            </React.Fragment>
        )
    }
}

export default TripPageList
