import React, { Component } from 'react';

import './css/RegisterPage.css';
import RegisterForm from "../components/RegisterForm";

export default class extends Component {
  render() {
    return (
      <div className="register-page">
        <RegisterForm />
        <div className="link-login">
          Bạn có tài khoản? 
          <a href="/">{" Đăng nhập"}</a>
        </div>
        <div className="download">
          <div>
            Tải ứng dụng
          </div>
          <div className="store">
            <img src="/appstore.png" alt="app-store" />
            <img src="/chplay.png" alt="ch-play" />
          </div>
        </div>
      </div>
    );
  }
}