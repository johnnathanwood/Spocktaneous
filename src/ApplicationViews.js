import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import HomePage from './components/home/HomePage'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'
import TripPageSearch from './components/trip/TripPageSearch'
import TripParametersPage from './components/trip/TripParametersPage'
import TripPageList from './components/trip/TripPageList'
import TripPageCreate from './components/trip/TripPageCreate'
import TripPageEdit from './components/trip/TripPageEdit'

export default class ApplicationViews extends Component {

    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    
  state = {
    users: [],
    trips: [],
    isLoaded: false
  }
  handleFieldChange = (evt) =>{
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
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

    addTrip = (tripToAdd) => 
    DataManager.add("trips", tripToAdd)
    .then(() => DataManager.getAll("trips"))
    .then(allTrips =>{ 
      this.setState({
      trips: allTrips
    })}
  )
  deleteTrip = id => DataManager.delete("trips", id)
  .then(() => DataManager.getAll("trips"))
  .then(trips => this.setState({
    trips: trips
  }))

  editTrip = (id, trips) => DataManager.edit("trips", id, trips)
  .then(() => DataManager.getAll("trips"))
  .then(trips => this.setState({
    trips: trips
  }))

    componentDidMount() {

        const newState = {}
        DataManager.getAll("trips")
          .then(alltrips => {
            newState.users = alltrips
          })
          .then(() => {
            this.setState(newState)
          })
        }
    
          

    render() {
        return (
            <React.Fragment>
            <Route exact path="/trip/search" component={TripPageSearch}/>
            <Route exact path="/trip/parameters" component={TripParametersPage}/>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" render={(props) => {
              return <Register {...props}
                addUser={this.addUser}
                users={this.state.users} />
            }} />

           <Route exact path="/trip/trips" render={(props) => {
          if (this.isAuthenticated()) {
            console.log('tripPageList123: ', this.state.trips);
            return <TripPageList {...props}
              users={this.state.users}
              editTrip={this.editTrip}
              deleteTrip={this.deleteTrip}
              trip={this.state.trips} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/trip/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <TripPageCreate {...props}
              trips={this.state.trips}
              addTrip={this.addTrip} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/trip/edit/:tripId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <TripPageEdit  {...props} editTrip={this.editTrip} trip={this.state.trips} />
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
      
    

