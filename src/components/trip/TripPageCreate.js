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
            name: this.state.name,
            city: this.state.city,
            street: this.state.street,
            zipcode: this.state.zipCode,
            state: this.state.state,
            date: new Date().toISOString(),
            price: this.state.price,
            userId: credentials.id
        }
        console.log('trip xxxxx', trip)
        console.log('TTTTT',this.state.name)

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
                        <section className="priceField">
                            <label htmlFor=""></label>
                            <label htmlFor="price">Budget</label>
                            <p></p>
                             
                            <select type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="price"
                                placeholder="whats your budget"
                                size="auto">
                                <option value="Free">Free</option>
                                <option value="Under $50">Under $50</option>
                                <option value="Under $100">Under $100</option>
                                <option value="Under $200">Under $200</option>
                            </select>
                                
                            </section>
                    </div>
                    <p></p>
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                    <section className="nameField">
                            <p></p>
                            <label htmlFor="name">Event Name</label>
                            <p></p>
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="event name"
                                size="35" />
                            
                                

                        </section>
                        <section className="cityField">
                            
                            <label htmlFor="city">City</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="city"
                                placeholder="city"
                                size="35" />
                            <label htmlFor="city">Street</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="street"
                                placeholder="street address"
                                size="35" />
                            <label htmlFor="zipcode">ZipCode</label>
                            
                            <input type="number" pattern="[0-9]{5}" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="zipcode"
                                placeholder="zipcode"
                                size="35" />
                            
                            <label htmlFor="state">State</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="state"
                                placeholder="state"
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
