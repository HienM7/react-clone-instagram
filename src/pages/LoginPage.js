import React, { Component } from 'react';

import './css/LoginPage.css';
import LoginForm from "../components/LoginForm";
import {
 Link
} from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="phone">
          <img src="/phone.png" alt=""></img>
        </div> 
        <div className="login-full-form">
            <LoginForm />
            <div className="link-register">
              Bạn không có tài khoản? 
              <Link className="link" to="/register">{" Đăng ký"}</Link>
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

      </div>
    );
  }
}