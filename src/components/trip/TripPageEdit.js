import React, { Component } from "react"

// the edit button will live on Event Detail

export default class TripPageEdit extends Component {

    state = {

    }
// update state upon edits to fields
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

componentDidMount() {
    // console.log(this.state)
    const trip = this.props.trip.find(a => a.id === parseInt(this.props.match.params.tripId, 0))
    this.setState(trip);
}
constructNewTrip = evt => {
    evt.preventDefault()
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    let newTrip = {
        // id: this.state.id,
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
        zipcode: this.state.zipCode,
        state: this.state.state,
        date: new Date().toISOString(),
        price: this.state.price,
    }
    this.props.editTrip(this.state.id, newTrip)
    .then(()=>{
        this.props.history.push("/trip/trips")
    })
}


// in this form be sure to add existing STATE INFO in PLACEHOLDER>
render() {

       
    return (
        <React.Fragment>
            <script src="countries.js"></script>
            
            <h2>Edit your shit!</h2>
            <form className="messageForm">
                <div className="form-group">
                    <section className="tripField">
                        <label htmlFor=""></label>
                        <label htmlFor="tripBudget">Budget</label>
                        <p></p>
                         
                        <select type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="tripBudget"
                            placeholder={this.state.tripBudget}
                            size="auto">
                            <option value="free" selected>Free</option>
                            <option value="under50">Under $50</option>
                            <option value="under100">Under $100</option>
                            <option value="under200">Under $200</option>
                        </select>
                            
                        </section>
                </div>
                <p></p>
                <div className="form-group">
                </div>
                <div className="form-group">
                <section className="eventNameField">
                        <p></p>
                        <label htmlFor="eventName">Event Name</label>
                        <p></p>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="eventName"
                            placeholder={this.state.eventName}
                            size="35" />
                        
                            

                    </section>
                    <section className="locationField">
                        
                        <label htmlFor="city">City</label>
                        
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="locationof"
                            placeholder={this.state.locationof}
                            size="35" />
                        <label htmlFor="street">Street</label>
                        
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="streetof"
                            placeholder={this.state.streetof}
                            size="35" />
                        <label htmlFor="zipcode">ZipCode</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="zipcode"
                            placeholder={this.state.zipcode}
                            size="35" />
                        <select name="state" id="state"
                        placeholder={this.state.state}>
                        
                        <option value="TN">TN</option>
                        </select>

                           
                        
                            

                    </section>
                </div>
                <div className="form-group">
                    <section className="dateField">
                        <p></p>
                        <label htmlFor="date">What day?</label>
                        <p></p>
                        <form
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="date"
                            placeholder={this.state.date}>
                            <input type="date"></input>
                            
                        </form>
                        
                            

                    </section>
                </div>
                <p></p>
                <button type="updateTrip" onClick={this.constructNewTrip} className="btn btn-primary">Update Trip</button>
            </form>
        </React.Fragment>
    )
}
}