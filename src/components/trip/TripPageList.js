import React, { Component } from 'react'

class TripPageList extends Component{

    formatDate = tripDate => {
        let date = new Date (tripDate)
        var getMonth= [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        // return day + ' ' + monthNames[monthIndex] + ' ' + year;
        return monthIndex + '/' +day+ '/'+year;
      }

    render() {
        return (<React.Fragment>
            <div className="tripButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/trip/new")}
                        }>
                    test
                </button>
            </div>
            <section className="trips">
            {
                //sort by date?
                // it is easier to sort by server call

                this.props.trip.map(trips =>
                    <div key={trips.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.formatDate(trips.date)}
                                {/* {event.date} */}
                                    </h5>
                                <button
                                    onClick={() => this.props.deleteTrip(trips.id)}
                                    className="nav-link-quit">No Thankyou</button>
                            <h4 className="card-tile">{trips.tripName}
                                </h4>
                        </div>
                    </div>
                )
            }
            </section>

            </React.Fragment>
    )
}}

export default TripPageList;