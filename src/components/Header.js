import React, { Component } from 'react';

import './css/Header.css';
export default class extends Component {

  render() {
    return (
      <div className="nav-container">
          <nav className="container">
            <div className="">
              <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram" />
            </div>
            <div className="search-box">
              <input type="text" placeholder="Tìm kiếm" />
            </div>
            <div className="list-icon">
              <img src="/home-run.png" alt="home" />
              <img src="/paper-plane.png" alt="message" />
              <img src="/compass.png" alt="compass" />
              <img src="/heart.png" alt="heart" />
              <img className="avatar" alt="avatar" src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/p960x960/81408626_1418771648327505_7275560099890855936_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=qh-mhSu4qlIAX9hoJ4m&_nc_ht=scontent.fdad3-3.fna&_nc_tp=6&oh=541711c1880dae39041a34a539bb4254&oe=5EEC718D" />
            </div>
          </nav>
        </div>
    );
  }
}