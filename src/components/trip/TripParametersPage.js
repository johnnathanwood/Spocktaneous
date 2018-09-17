import React, { Component } from 'react'

export default class TripParametersPage extends Component {


    state = {
        tripBudget: [],
        tripLocation: [],
        tripDate: []
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {

        return (
            <React.Fragment>
                <h2>Lets Begin</h2>
                <label htmlFor ="tripBudget">Trip Budget</label>
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
                <p></p>
                <div className="tripLocationButton">
                <label htmlFor="tripLocation">Trip Location</label>
                    <input type="text" required="true"
                        className="btn btn-success"
                        placeholder="city name"
                        ></input>
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
                                placeholder="select date">
                                <input type="date"></input>
                                
                            </form>
                            
                        </section>
                        <button type="goButton"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/trip/trips")
                            }
                            }>Go </button>
                </div>

            
            </React.Fragment>
        )
    }
}