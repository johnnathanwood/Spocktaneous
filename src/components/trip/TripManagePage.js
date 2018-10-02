import React, { Component } from 'react'
class TripManagePage extends Component {

    render() {
        if (this.props.trips) {
            var trips = this.props.trips.slice(-1)[0];
        }
        // console.log(this.props.users.find(user => user.userName === "MessageTest"))
        // console.log(this.props.users)
        // console.log(this.props)
        return (
            <React.Fragment>
                <section>
                <div class="card" >
                        <h2 className="formHeader">Manage Your Created Trips</h2>
                        <section className="trips">
                            {
                                this.props.trips.map(trips =>
                                    <div id={`message--${trips.id}`} key={trips.id} className="messageCard">
                                        <div id="messageCard-body">
                                            <h6 className="messageCard-title">
                                                <section className="formCard">
                                                    <h5> Name: {trips.name}</h5>
                                                    <h6> City: {trips.city}</h6>
                                                    <h6> Street: {trips.street}</h6>
                                                    <h6> State: {trips.state}</h6>
                                                    <h6> Zipcode: {trips.zipcode}</h6>
                                                    <h6> Date: {trips.date}</h6>
                                                    <h6> Price: {trips.price}</h6>
                                                    <button
                                                        onClick={() => this.props.deleteMessage(trips.id)
                                                            .then(() => this.props.history.push("/trips"))}
                                                        className="nav-link-delete"><hover>Delete</hover></button>
                                                    <button
                                                        onClick={() => this.props.history.push(`/trips/edit/${trips.id}`)}
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

export default TripManagePage