import React, { Component } from 'react';

import './css/LoginForm.css';


export default class extends Component {

  render() {
    return (
      
      <div className="login-form">
        <div className="logo">
          <img src="https://logo-logos.com/wp-content/uploads/2016/10/Instagram_logo_wordmark_logotype.png" alt="" />
        </div>
        <div className="field" >
          <input type="email" placeholder="Email"/>
          <input type="email" placeholder="Mật khẩu"/>
          <button>
            Đăng nhập
          </button>
        </div>
        <div className="or">
          HOẶC
        </div>  
        <div>
          <button className="login-fb">
            <img src="https://image.flaticon.com/icons/svg/2111/2111398.svg" alt="" />
            <span>Đăng nhập bằng Facebook</span>
          </button>
        </div>
        <div className="forgot-pass">
          Quên mật khẩu?
        </div>
      </div>
    );
  }
}