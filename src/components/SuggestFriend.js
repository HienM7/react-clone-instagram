import React, { Component } from 'react';

import './css/SuggestFriend.css';


export default class extends Component {

  render() {
    return (
      <div class="suggest-friend-item">
        <div>
          <img class="avatar" alt="avatar" src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/p960x960/81408626_1418771648327505_7275560099890855936_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=qh-mhSu4qlIAX9hoJ4m&_nc_ht=scontent.fdad3-3.fna&_nc_tp=6&oh=541711c1880dae39041a34a539bb4254&oe=5EEC718D" />
        </div>
        <div class="info">
          <div class="name">totoha.home</div>
          <div class="suggest">Theo dõi bạn</div>
        </div>
        <div class="follow">
          <a href="/">Theo dõi</a>
        </div>
    </div>
    );
  }
}