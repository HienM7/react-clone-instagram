import React, { Component } from 'react';

import './css/RegisterPage.css';
import RegisterForm from "../components/RegisterForm";
import {
 Link
} from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div className="register-page">
        <RegisterForm />
        <div className="link-login">
          Bạn có tài khoản? 
          <Link className="link" to="Login">{" Đăng nhập"}</Link>
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