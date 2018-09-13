import React, { Component } from 'react'


class TripPageList extends Component {

  
    render() {
        // console.log(this.props.users.find(user => user.userName === "MessageTest"))
        // console.log(this.props.users)
        // console.log(this.props)
        




        return (
            <React.Fragment>

                <div className="tripButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/trip/new")
                        }
                        }>
                        Create New Spocktaneous
                    </button>
                </div>

                <section>
                    <div>
                        <h2 className="formHeader">Here are your trips</h2>
                        <section className="trip">
                        
                            {
                                
                                this.props && (trip =>
                                    <div id={`trip--${trip.id}`} key={trip.id} className="tripCard">
                                        <div id="tripCard-body">
                                            <h6 className="tripCard-title">
                                                <section className="formCard">
                                                    <h6>{trip.budget}</h6>
                                                    <h6>{trip.location}</h6>
                                                    <p>{trip.date}</p>
                                                    console.log(trip,)
                                                    <button
                                                    
                                                        onClick={() => this.props.deleteTrip(trip.id)
                                                            .then(() => this.props.history.push("/trip"))}
                                                        className="nav-link-delete"><hover>Delete</hover></button>
                                                        
                                                    <button
                                                        onClick={() => this.props.history.push(`/trip/edit/${trip.id}`)}
                                                        className="card-link-edit">Edit</button>
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

export default TripPageList;