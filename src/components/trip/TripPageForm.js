import React, { Component } from 'react'

export default class TripPageForm extends Component {

    findTrip = trip => {
        return this.props.trip.find(trip => trip.id === trip.tripId).tripId
    }

    // Set initial state
    state = {
        tripId: "",
        tripBudget: "",
        tripNumber: "",
        userId: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructTrip = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        const trip = {
            id: this.state.tripId,
            budget: this.state.tripBudget,
            number: this.state.tripNumber,
            userId: credentials.id
        }

        this.props.addTrip(trip)
        .then(() => this.props.history.push("/"))
    }

    render() {

        return (
            <React.Fragment>
                <h2>Create a Spocktaneous adventure</h2>
                <form className="tripPageForm">
                    <div className="form-group">
                        <section className="tripField">
                            <label htmlFor="tripId"></label>
                            <select htmlFor="tripBudget">Budget $$</select>
                            <p></p>
                            <select type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="trip-budget"
                                placeholder="Budget"
                                size="auto"/>
                        </section>
                    </div>
                    <p></p>
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                        <section  type="number"className="tripField">
                            <p></p>
                            <label htmlFor="number">How many?</label>
                            <p></p>
                            <textarea
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="trip"
                                placeholder="..." rows="5" cols="70"></textarea>
                        </section>
                    </div>
                    <p></p>
                    <button type="submit" onClick={this.constructTrip} className="btn btn-primary"></button>
                </form>
            </React.Fragment>
        )
    }
}