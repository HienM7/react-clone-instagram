import React, { Component } from 'react';

import './css/RegisterForm.css';


export default class extends Component {

  render() {
    return (
      <div class="register-form">
        <div class="logo">
          <img src="https://logo-logos.com/wp-content/uploads/2016/10/Instagram_logo_wordmark_logotype.png" alt="" />
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
          <input type="email" placeholder="Email"/>
          <input type="email" placeholder="Tên đầy đủ"/>
          <input type="email" placeholder="Tên người dùng"/>
          <input type="email" placeholder="Mật khẩu"/>
          <button>
            Đăng ký
          </button>
          <div class="note">
            Bằng cách đăng ký bạn đồng ý với 
            <a href="#">{" Điều khoản, "}</a>
            <a href="#">{" Chính sách dữ liệu "}</a>
            và
            <a href="#">{" Chính sách cookie "}</a>
            của chúng tôi
          </div>
        </div>
      </div>
    );
  }
}

