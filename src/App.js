import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import UserStore from './stores/UserStore';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends Component {
  
  async componentDidMount() {
    try {
      let res = await axios.post(
        "https://hilarious-pointed-taker.glitch.me/api/login/isloggedin",
          {
            token: localStorage.getItem('token')
          }
      );
      let result = res.data;
      if (result && result.success) {
        UserStore.username = result.username;
        UserStore.userId = result.userId;
        UserStore.avatarUrl = result.avatarUrl;
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
      }
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
     
    } catch(e) {
      console.log(e);
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }

  }
  
  render() {
    if (UserStore.loading) {
      return (
        <div></div>
      );
    }
    else {
      if (UserStore.isLoggedIn) {
        return (
          <Router>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/register">
                <RegisterPage />
            </Route>
          </Router>
        );
      } else {
        return (
          <Router>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/register">
                <RegisterPage />
            </Route>
          </Router>
    
        );
      }
    }
    
  }
}

export default observer(App);
