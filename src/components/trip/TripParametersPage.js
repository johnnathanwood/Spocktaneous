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
    search = (availableTrips)=>{
        var searchedTrips =[];
        console.log(availableTrips[0]);
        for (var i=0; i < availableTrips.length; i++) {
            console.log("location: ", availableTrips[i].tripLocation);
            if (availableTrips[i].tripLocation === this.state.tripLocation && availableTrips[i].tripBudget === this.state.tripBudget) {
                searchedTrips.push(availableTrips[i]);
            }
        }
    }
    render() {

        return (
            <React.Fragment>
                <div className="parametersForm">
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
                        <div className="goButton">
                        <button type="goButton"
                            className="goButton"
                            onClick={() => {
                                console.log('myProps: ', this.props);
                                var searched = this.search([    {
                                    "name": "Nashville 1",
                                    "city": "Nashville",
                                    "street": "123 South down st.",
                                    "zipcode": "37011",
                                    "state": "TN",
                                    "date": "",
                                    "id": 1001,
                                    "price": "under $200"
                                  }]);
                                console.log('searched!: ', searched);
                                // this.props.history.push("/trip/tripSearchList")
                            }
                            }>Go </button>
                            </div>
                </div>
                </div>

            
            </React.Fragment>
        )
    }
}


// I have hardcoded a single element array to my search function on line #71 I need to figure out how to pass the trips from the props
// I added the search logic, but I need to search google for 'search elements in array'
// Then display the searchedArray like I did in the tripSearchList (searchedArray ** searchedArray.map(element)=> blah blah )