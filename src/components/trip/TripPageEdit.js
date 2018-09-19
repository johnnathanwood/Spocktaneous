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
            
            
            <h2>Edit your shit!</h2>
            <form className="messageForm">
                <div className="form-group">
                    <section className="tripField">
                        <label htmlFor=""></label>
                        <label htmlFor="price">Budget</label>
                        <p></p>
                         
                        <select type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="price"
                            placeholder={this.state.price}
                            size="auto">
                            <option value="Free">Free</option>
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
                <section className="name">
                        <p></p>
                        <label htmlFor="name">Event Name</label>
                        <p></p>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder={this.state.name}
                            size="35" />
                        
                            

                    </section>
                    <section className="cityField">
                        
                        <label htmlFor="city">City</label>
                        
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="city"
                            placeholder={this.state.city}
                            size="35" />
                        <label htmlFor="street">Street</label>
                        
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="street"
                            placeholder={this.state.street}
                            size="35" />
                        <label htmlFor="zipcode">ZipCode</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="zipcode"
                            placeholder={this.state.zipcode}
                            size="35" />
                        <label htmlFor="state">State</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="state"
                                placeholder={this.state.zipcode}
                                size="35" />

                           
                        
                            

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
                <button type="submit" onClick={this.constructNewTrip} className="btn btn-primary">Update Trip</button>
            </form>
        </React.Fragment>
    )
}
}