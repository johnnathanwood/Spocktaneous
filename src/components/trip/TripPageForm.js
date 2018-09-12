import React, { Component } from 'react'

export default class TripPageForm extends Component {
    
    
    


    //set initial state here


    state = {
        tripId: "",
        tripBudget: "",
        tripLocation: "",
        tripDate: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewTrip = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        const trip = {
            id: this.state.tripId,
            budget: this.state.tripBudget,
            location: this.state.tripLocation,
            date: new Date().toISOString(),
            userId: credentials.id
        }

        this.props.addTrip(trip)
        .then(() => this.props.history.push("/trip"))
    }
    
    


    render() {

        return (
            <React.Fragment>
                <h2>Lets have a Spocktaneous day!</h2>
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
                                placeholder="whats your budget"
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
                        <section className="locationField">
                            <p></p>
                            <label htmlFor="location">Location</label>
                            <p></p>
                            <select
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="location"
                                placeholder="select location">
                                <option value="mylocation" selected>My Location</option>
                                <option value="customlocation">Custom Location</option>
                            </select>
                            
                                

                        </section>
                    </div>
                    <div className="form-group">
                        <section className="dateField">
                            <p></p>
                            <label htmlFor="date">What day?</label>
                            <p></p>
                            <select
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="date"
                                placeholder="select date">
                                <option value="mylocation" selected>My Location</option>
                                <option value="customlocation">Custom Location</option>
                            </select>
                            
                                

                        </section>
                    </div>
                    <p></p>
                    <button type="go" onClick={this.constructNewTrip} className="btn btn-primary">Go</button>
                </form>
            </React.Fragment>
        )
    }
}
