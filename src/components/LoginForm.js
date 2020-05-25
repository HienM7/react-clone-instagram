import React, { Component } from 'react';

import UserStore from '../stores/UserStore';
import axios from 'axios';


import './css/LoginForm.css';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      buttonDisabled: false
    }
  }

  setInputValue(property, value) {
    this.setState({
      [property]: value.trim()
    });
  }

  async doLogin(e) {
    e.preventDefault();
    if (!this.state.email) {
      this.setState({
        error: true
      });
      return;
    }
    if (!this.state.password) {
      this.setState({
        error: true
      });
      return;
    }

    this.setState({
      buttonDisabled: true
    })
    
    try {
      let res = await axios.post(
        "https://hilarious-pointed-taker.glitch.me/api/login",
        {
          email: this.state.email,
          password: this.state.password
        }
      )  
      let result = res.data;
      if (result && result.success) {
        this.setState({
          error: false
        });
        console.log(result);
        UserStore.username = result.username;
        UserStore.avatarUrl = result.avatarUrl
        UserStore.isLoggedIn = true;
        localStorage.setItem('token', result.token);
      }
      else if (result && !result.success) {
        this.setState({
          error: true,
          buttonDisabled: false
        });
        
      }

    }
    catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="login-form">
        <div className="logo">
          <img src="/Instagram_logo_wordmark_logotype.png" alt="" />
        </div>
        <div className="field" >
          <form onSubmit={(e) => this.doLogin(e)}>
            <input 
              type="email" 
              placeholder="Email"
              onChange={(e) => this.setInputValue("email", e.target.value)}
              
            />
            <input 
              type="password" 
              placeholder="Mật khẩu" 
              onChange={(e) => this.setInputValue("password", e.target.value)}/>
            <button disabled={this.state.buttonDisabled}>
              Đăng nhập
            </button>
          </form>
        </div>
        <div className="or">
          {"---------------------HOẶC---------------------"}
        </div>  
        <div>
          <button className="login-fb">
            <img src="/facebook.png" alt="" />
            <span>Đăng nhập bằng Facebook</span>
          </button>
        
          {
            this.state.error &&  
            <div className="alert">
            {"Rất tiếc tên người dùng hoặc mật khẩu không đúng. \n Vui lòng kiểm tra lại"}
            </div>
          }
        </div>
        <div className="forgot-pass">
          Quên mật khẩu?
        </div>
      </div>
    );
  }
}