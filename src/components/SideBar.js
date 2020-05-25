import React, { Component } from 'react';

import SuggestFriendList from './SuggestFriendList';
import './css/SideBar.css';
import UserStore from '../stores/UserStore';


export default class extends Component {

  render() {
    return (
      <div className="sidebar">
        <div className="account">
          <img className="avatar" alt="avatar" src={ UserStore.avatarUrl || "/avatarDefault.png" } />
          <div className="username">
            {UserStore.username}
          </div>
        </div>
        <SuggestFriendList />
      </div>
    );
  }
}