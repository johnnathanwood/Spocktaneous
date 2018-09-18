import React, { Component } from 'react'



export default class TripPageCreate extends Component {
    
    
    
    


    //set initial state here


    state = {
        name: "",
        city: "",
        street: "",
        zipCode: "",
        state: "",
        date: "",
        price: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    componentDidMount () {
        const script = document.createElement("script");

        script.src = "countries.js";
        script.async = true;

        document.body.appendChild(script);
    }
    

    constructNewTrip = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        const trip = {
            // id: this.state.id,
            name: this.state.name,
            city: this.state.city,
            street: this.state.street,
            zipcode: this.state.zipCode,
            state: this.state.state,
            date: new Date().toISOString(),
            price: this.state.price,
            userId: credentials.id
        }

        this.props.addTrip(trip)
        .then(() => this.props.history.push("/trip/trips"))
    }
    
    render() {

       
        

        return (
            <React.Fragment>
                <script src="countries.js"></script>
                
                <h2>Create your own Spockatenous trip!</h2>
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
                    <section className="eventNameField">
                            <p></p>
                            <label htmlFor="eventName">Event Name</label>
                            <p></p>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="eventName"
                                placeholder="event name"
                                size="35" />
                            
                                

                        </section>
                        <section className="locationField">
                            
                            <label htmlFor="location">City</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="location-of"
                                placeholder="location"
                                size="35" />
                            <label htmlFor="location">Street</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="street-of"
                                placeholder="street address"
                                size="35" />
                            <label htmlFor="location">ZipCode</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="street-of"
                                placeholder="zipcode"
                                size="35" />
                            <select name="state" id="state">
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
                                placeholder="select date">
                                <input type="date"></input>
                                
                            </form>
                            
                                

                        </section>
                    </div>
                    <p></p>
                    <button type="saveTrip" onClick={this.constructNewTrip} className="btn btn-primary">Save Trip</button>
                </form>
            </React.Fragment>
        )
    }
}
