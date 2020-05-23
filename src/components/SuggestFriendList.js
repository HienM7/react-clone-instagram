import React, { Component } from 'react';

import { 
  Container,
  Col,
  Row
} 
from "reactstrap";

import SuggestFriend from "./SuggestFriend";
import './css/SuggestFriendList.css';


export default class extends Component {

  render() {
    return (
      <div className="suggest-friend-list">
        <div className="title">
          <div className="suggest-for-you">
            Gợi ý cho bạn
          </div>  
          <div className="show-all">
            Xem tất cả
          </div>  
        </div>
        <SuggestFriend />
        <SuggestFriend />
        <SuggestFriend />
        <SuggestFriend />
        <SuggestFriend />
      </div>
    );
  }
}