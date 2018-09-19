import React, { Component } from 'react'
import "../trip/search.css"

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
                
                    <div className="searchTripButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/trip/parameters")
                            }
                            }>Search Ideas</button>
                    </div>
                    <div className="createTripButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/trip/new")
                            }
                            }>Create Trip</button>
                    </div>
                    <div className="manageTripButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/trip/edit")
                            }
                            }>Manage Trips </button>
                    </div>
                    
                </div>
                    
            </React.Fragment>
        )

    }

}