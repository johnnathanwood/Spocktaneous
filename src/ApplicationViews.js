import {Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import HomePage from './components/home/HomePage'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
import TripPageList from './components/trip/TripPageList'
import TripPageForm from './components/trip/TripPageForm'
import TripPageEdit from './components/trip/TripPageEdit'

export default class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    
state = {
    users: [],
    isLoaded: false
  }

  addUser = users => DataManager.add("users", users)
    .then(() => DataManager.getAll("users"))
    .then(users => this.setState({
      users: users
    }))

  // getAllUsers = user => DataManager.getAll("users", user)
  //   .then(users => this.setState({
  //     users: users
  //   }))

    deleteUser = id => DataManager.delete("user", id)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))

    editUser = (id, user) => DataManager.edit("user", id, user)
    .then(() => DataManager.getAll("user"))
    .then(user => this.setState({
      user: user
    }))

    addTrip = trip => DataManager.add("trips", trip)
    .then(() => DataManager.getAll("trips"))
    .then(trip => this.setState({
      trip: trip
    }))

    deleteTrip = id => DataManager.delete("trip", id)
    .then(() => DataManager.getAll("trip"))
    .then(trip => this.setState({
      trip: trip
    }))

    editTrip = (id, trip) => DataManager.edit("trip", id, trip)
    .then(() => DataManager.getAll("trip"))
    .then(trip => this.setState({
      trip: trip
    }))

    componentDidMount() {

        const newState = {}
        DataManager.getAll("users")
          .then(allUsers => {
            newState.users = allUsers
          }) 

        DataManager.getAll("trip")
           .then(alltrip => {
            newState.trip = alltrip
            console.log(alltrip,"hello")
          })
          .then(() => {
            this.setState(newState)
            console.log(newState)
            
          })
        }   

    render() {
        return (
            <React.Fragment>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" render={(props) => {
              return <Register {...props}
                addUser={this.addUser}
                users={this.state.users} />
            }} />

             <Route exact path="/trip" render={(props) => {
          if (this.isAuthenticated()) {
            return <TripPageList {...props}
            editTrip={this.editTrip}
            deleteTrip={this.deleteTrip} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/trip/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <TripPageForm {...props}
              trip={this.state.trip}
              addTrip={this.addTrip} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/trip/edit/:tripId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <TripPageEdit  {...props} editTrip={this.editTrip} trip={this.state.trip} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        {/* <Route exact path="/trip/edit/:tripId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <TripEditForm  {...props} editTrip={this.editTrip} trip={this.state.trip} />
          } else {
            return <Redirect to="/login" />
          }
        }} /> */}

          </React.Fragment >
            )

        }
    }
      
    

