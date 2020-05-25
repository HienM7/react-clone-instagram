import React, { Component } from 'react';

import './css/Header.css';

import SideBar from './SideBar';
import UserStore from '../stores/UserStore';


export default class extends Component {

  render() {
    return (
      <div className="nav-container">
          <div className="wrap">
            <div className="">
              <img src="/instagram-word-icon-logo-nav.png" alt="Instagram" />
            </div>
            <div className="search-box">
              <input type="text" placeholder="Tìm kiếm" />
            </div>
            <div className="list-icon">
              <img src="/home-run.png" alt="home" />
              <img src="/paper-plane.png" alt="message" />
              <img src="/compass.png" alt="compass" />
              <img src="/heart.png" alt="heart" />
              <img className="avatar" alt="avatar" src={UserStore.avatarUrl || "/avatarDefault.png"} />
            </div>
            <SideBar />
          </div>
        </div>
    );
  }
}