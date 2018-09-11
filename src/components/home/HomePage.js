import React, { Component } from 'react'
// import './HomePage.css'

export default class HomePage extends Component {

    render() {
        let styles = {
            
        }
        return (
            <React.Fragment>
                <div className="homeButtons" style={styles}>

                <div className="homeHeader">
                <h1>Spocktaneous</h1>
                </div>
                
                    <div className="loginButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/login")
                            }
                            }>Login</button>
                    </div>
                    <div className="registerButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/register")
                            }
                            }>Create Account</button>
                    </div>
                </div>
                    
            </React.Fragment>
        )

    }

}