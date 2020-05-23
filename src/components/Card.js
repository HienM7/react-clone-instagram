import React, { Component } from 'react';

import { 
  Container,
  Col,
  Row
} 
from "reactstrap"; 
import './css/Card.css';

export default class extends Component {

  render() {
    return (
      <div className="card-container">
        <div className="author">
          <img alt="author" src="https://instagram.fdad3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/12750372_585568998283714_1627786605_a.jpg?_nc_ht=instagram.fdad3-2.fna.fbcdn.net&_nc_ohc=SsVE4_RX_zwAX_LKEzp&oh=f8b6d42bc5f4e88486d789271a98f28c&oe=5EF36AD2" />
          <div className="author-name">
            mensfashions
          </div>
        </div>
        <div className="post-image">
          <img alt="post" src="https://instagram.fdad3-3.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/97584754_1903075159829795_2835508814224429122_n.jpg?_nc_ht=instagram.fdad3-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=qFnID6Q4IG0AX_0oA4l&oh=384ba6d6e7d54f430efd0acdf1618fe6&oe=5EF12C7B" />
        </div>
        <div className="interact">
          <div>
            <img alt="heart" src="/heart.png"/>
            <img alt="comment" src="/message-ins.png"/>
            <img alt="message" src="/paper-plane.png"/>  
          </div>
          <div>
            <img alt="save" src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-application/32/INSTAGRAM_ICON_SETS-07-512.png" />
          </div>
        </div>
        <div className="post-info">
          <div className="like">
            1,740 lượt thích
          </div>
          <div className="comment">
            {"mensfashions "}
            <span>
              Sick outfit by @hoodstore
            </span>
          </div>
          <div className="comment">
            <span>
              Xem tất cả 7 bình luận
            </span>
          </div>
          <div className="comment">
            {"tahartareky "} 
            <span>nice</span>
          </div>
        </div>
        <div className="input-comment" >
          <input type="text" placeholder="Thêm bình luận..."/>
        </div>
      </div>
    );
  }
}