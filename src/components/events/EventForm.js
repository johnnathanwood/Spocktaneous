import React, { Component } from 'react'
export default class EventForm extends Component {


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
                            <label htmlFor="location">State</label>
                            
                            <input type="text" required="true"
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="street-of"
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


