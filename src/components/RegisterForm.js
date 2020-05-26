import React, { Component } from 'react';

import axios from 'axios';
import UserStore from '../stores/UserStore';
import './css/RegisterForm.css';
import { Redirect } from 'react-router-dom';


export default class extends Component {
   
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      fullName: "",
      errors: "",
      buttonDisabled: false,
      redirect: false
    }
  }

  setInputValue(property, value) {
    this.setState({
      [property]: value.trim()
    });
  }
  
  async doRegister(e) {
    e.preventDefault();
    if (!this.state.email) {
      this.setState({
        errors: "Vui lòng nhập email"
      });
      return;
    }
    if (!this.state.fullName) {
      this.setState({
        errors: "Vui lòng nhập tên đầy đủ của bạn"
      });
      return;
    }
    if (!this.state.username) {
      this.setState({
        errors: "Vui lòng nhập tên người dùng"
      });
      return;
    }
    if (!this.state.password) {
      this.setState({
        errors: "Vui lòng nhập mật khẩu"
      });
      return;
    }
    this.setState({
      buttonDisabled: true
    });

    try {
      let res = await axios.post(
        "https://hilarious-pointed-taker.glitch.me/api/login/register",
        {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password, 
          fullName: this.state.fullName     
        }
      )  
      let result = res.data;
      if (result && result.success) {
        UserStore.username = result.username;
        UserStore.isLoggedIn = true;
        localStorage.setItem('token', result.token);
        this.setState({
          buttonDisabled: false,
          redirect: true
        });
      }
      else if (result && !result.success) {
       this.setState({
         errors: result.message,
         buttonDisabled: false
       });
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" /> 
    }
    return (
      <div class="register-form">
        <div class="logo">
          <img src="/Instagram_logo_wordmark_logotype.png" alt="" />
          <h2>
            Đăng ký để xem ảnh và video từ bạn bè.
          </h2>
        </div>
        
        <div>
          <button class="login-fb">
            <img src="/fb.png" alt="" />
            <span>Đăng nhập bằng Facebook</span>
          </button>
          <div class="or">
          ---------------------HOẶC---------------------
          </div>
        </div>
        <div class="field" >
          <form onSubmit={(e) => this.doRegister(e)}>
            <input 
              type="email" 
              placeholder="Email"
              onChange={(e) => this.setInputValue("email", e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Tên đầy đủ" 
              onChange={(e) => this.setInputValue("fullName", e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Tên người dùng" 
              onChange={(e) => this.setInputValue("username", e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Mật khẩu" 
              onChange={(e) => this.setInputValue("password", e.target.value)}
            />
            <button disabled={this.state.buttonDisabled}>
              Đăng ký
            </button>
          </form>
          {
            this.state.errors !== "" &&  
            <div className="alert">
              {this.state.errors}
            </div>
          }
          <div class="note">
            Bằng cách đăng ký bạn đồng ý với 
            <a href="/">{" Điều khoản, "}</a>
            <a href="/">{" Chính sách dữ liệu "}</a>
            và
            <a href="/">{" Chính sách cookie "}</a>
            của chúng tôi
          </div>
        </div>
      </div>
    );
  }
}

