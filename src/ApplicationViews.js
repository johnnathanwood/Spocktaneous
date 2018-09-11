import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from './modules/DataManager'
import HomePage from './components/home/HomePage'
import Login from './components/login/LoginForm'
import Register from './components/login/RegisterForm'

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

    componentDidMount() {

        const newState = {}
        DataManager.getAll("users")
          .then(allUsers => {
            newState.users = allUsers
          }) 
          
        }   

    render() {
        return (
            <React.Fragment>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" render={(props) => {
              return <Register {...props}
                addUser={this.addUser}
                users={this.state.users} />
            }} />

          </React.Fragment >
            )

        }
    }
      
    

