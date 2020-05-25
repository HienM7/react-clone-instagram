import React, { Component } from 'react';
 
import './css/Card.css';

export default class extends Component {

  render() {
    const { post } = this.props;
    return (
      <div className="card-container">
        <div className="author">
          <img alt="author" src={post.avatarUrl || "/avatarDefault.png"} />
          <div className="author-name">
            {post.author}
          </div>
        </div>
        <div className="post-image">
          <img alt="post" src={post.imgUrl} />
        </div>
        <div className="interact">
          <div>
            <img alt="heart" src="/heart.png"/>
            <img alt="comment" src="/message-ins.png"/>
            <img alt="message" src="/paper-plane.png"/>  
          </div>
          <div>
            <img alt="save" src="/save-icon-ins.png" />
          </div>
        </div>
        <div className="post-info">
          <div className="like">
            { post.like &&
              Object.keys(post.like).length + " lượt thích"
            } 
          </div>
          <div className="comment">
            {post.author + " "}
            <span>
              {post.caption}
            </span>
          </div>
          <div className="comment-info">
            <span>
               {"Xem tất cả " + post.comment.length + " bình luận"} 
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