import React, { Component } from 'react'
import "../trip/search.css"
import "../trip/trip.css"

export default class TripPageSearch extends Component {

    render() {
        let styles = {
            
        }
        return (
            <React.Fragment>
                <div className="searchButtons" style={styles}>

                <div className="searchHeader">
                <h1>Lets Start Looking</h1>
                </div>
                
                    <div>
                        <button type="button"
                            className="searchTripButton"
                            onClick={() => {
                                this.props.history.push("/trip/parameters")
                            }
                            }>Search Ideas</button>
                    </div>
                    <div>
                        <button type="button"
                            className="createTripButton"
                            onClick={() => {
                                this.props.history.push("/trip/new")
                            }
                            }>Create Trip</button>
                    </div>
                    <div>
                        <button type="button"
                            className="manageTripButton"
                            onClick={() => {
                                this.props.history.push("/trip/manage")
                            }
                            }>Manage Trips </button>
                    </div>
                    
                </div>
                    
            </React.Fragment>
        )

    }

}