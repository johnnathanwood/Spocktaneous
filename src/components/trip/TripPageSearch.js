import React, { Component } from 'react'
// import './HomePage.css'

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
                                this.props.history.push("/")
                            }
                            }>Search Ideas</button>
                    </div>
                    <div className="createTripButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/")
                            }
                            }>Create Trip</button>
                    </div>
                    <div className="manageTripButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/edit")
                            }
                            }>Manage Trips </button>
                    </div>
                </div>
                    
            </React.Fragment>
        )

    }

}