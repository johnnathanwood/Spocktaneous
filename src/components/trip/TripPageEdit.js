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
    const trip = this.props.tasks.find(a => a.id === parseInt(this.props.match.params.taskId, 0))
    this.setState(trip);
}
constructNewTrip = (evt) => {
    evt.preventDefault()
    console.log(this.state)
    let newTrip = {
            budget: this.state.tripBudget,
            location: this.state.tripLocation,
            date: new Date().toISOString(),
    }
    this.props.editTrip(newTrip.id, newTrip)
    .then(()=>{
        this.props.history.push("/trip")
    })
}


// in this form be sure to add existing STATE INFO in PLACEHOLDER>
render() {
    return (
        <React.Fragment>
            <h2>Lets have a Spocktaneous day!</h2>
            <form className="tripForm">
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
                            placeholder="select date">
                            <input type="date"></input>
                            
                        </form>
                        
                            

                    </section>
                </div>
                <p></p>
                <button type="go" onClick={this.constructNewTrip} className="btn btn-primary">Update</button>
            </form>
        </React.Fragment>
    )
}
}