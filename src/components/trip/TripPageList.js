import React, { Component } from 'react'
import { Link } from "react-router-dom"

class TripPageList extends Component {
    state = {
        taskName: "",
        date: "",
        details: "",
        isChecked: false
    }

    // toggleCheckboxChange = () => {
    //     const { toggleCheckboxChange, taskid } = this.props;

    //     this.setState(({ isChecked }) => (
    //         {
    //             isChecked: true,
    //         }
    //     ));

    
    // toggleCheckboxChange(this.state.id);
    // }
    render() {

        
        const complete = { isChecked: true }

        return (<React.Fragment>
            <form className="taskListForm">
                <div className="taskButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => 
                            this.props.history.push("/trip")
                        
                        }>
                        Click to add your trip
                </button>
                </div>
                <div className="checkbox">
                    <section className="trip">
                        {
                            this.props && (trips =>
                                <div key={trips.id} className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {trips.taskName}
                                        </h4>
                                        <br></br>
                                        <h5>{trips.date}</h5>
                                        <br></br>
                                        <h6>
                                            <br></br>
                                            {trips.detail}
                                            <br></br>

                                            <Link className="nav-link" to={`/trips/${trips.id}`}>Details</Link>
                                            <button
                                                onClick={() => this.props.deleteTask(trips.id)}
                                                className="card-link btn btn-primary btn-sm">Delete Task</button>

                                        </h6>
                                    </div>
                                    <label>
                                        <button
                                            onClick={() => this.props.editTask(trips.id, complete)
                                            }
                                            className="card-link btn btn-secondary btn-lg btn-block">Complete
                                         </button>  
                                          
                                        {/* {id} */}
                                    </label>
                                </div>
                            )
                        }
                    </section>
                </div>
            </form>
        </React.Fragment>
        )
    }
}

export default TripPageList;