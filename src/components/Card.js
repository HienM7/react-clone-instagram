import React, { Component } from 'react';

import axios from 'axios';

import UserStore from '../stores/UserStore';
import './css/Card.css';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      likeList: {},
      comments: [],
      newComment: "",
      showComment: false
    }
  }
  componentDidMount() {
    const { post } = this.props;
    const userId = UserStore.userId;
    const likeList = post.like || {};
    const isLiked = likeList[userId] || false;
    this.setState({
      isLiked: isLiked,
      likeList: likeList,
      comments: post.comments,
    });
  }
  async doLike(postId) {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
      likeList: {
        ...this.state.likeList,
        [UserStore.userId]: !isLiked
      }
    });
    try {
      const res = axios.post(
        "https://hilarious-pointed-taker.glitch.me/api/posts/like", 
        {
          "token": localStorage.getItem("token"),
          "like": !isLiked,
          "postId": postId
        }  
      );
    } catch (e) {
      console.log(e);
    }  
  }

  onChange(e) {
    this.setState({
      newComment: e.target.value
    })
  }
  async onKeyUp(e, postId) {
    const text = e.target.value;
    if (e.keyCode === 13) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            userId: UserStore.userId,
            username: UserStore.username,
            avatarUrl: UserStore.avatarUrl,
            content: text
          }
        ],
        newComment: ""
      });
      try { 
        const res = await axios.post(
          "https://hilarious-pointed-taker.glitch.me/api/posts/comment",
          {
            postId: postId,
            token: localStorage.getItem("token"),
            content: text
          }
        );
        if (res.data && res.data.success) {
          console.log("success");
        }

      } catch (e) {
        console.log(e);
      }
    }
  }

  showComment() {
    this.setState({
      showComment: !this.state.showComment
    });
  }


  render() {
    const { post } = this.props;
    if (!post.like) {
      post.like = {};
    }
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
            <img 
              alt="heart" 
              src={this.state.isLiked ? "/like.png" : "/heart.png"} 
              onClick={() => this.doLike(post.id)}
            />
            <img alt="comment" src="/message-ins.png"/>
            <img alt="message" src="/paper-plane.png"/>  
          </div>
          <div>
            <img alt="save" src="/save-icon-ins.png" />
          </div>
        </div>
        <div className="post-info">
          <div className="like">
            { 
              Object
                .values(this.state.likeList)
                .reduce((a, b) => a + b, 0) !== 0 && 
              Object
              .values(this.state.likeList)
              .reduce((a, b) => a + b, 0) + " lượt thích"
            } 
          </div>
          <div className="comment">
            {post.author + " "}
            <span>
              {post.caption}
            </span>
          </div>
          { 
            this.state.comments.length > 2 &&
              <div className="comment-info">
                <span onClick={() => this.showComment()}>
                  {"Xem tất cả " + this.state.comments.length + " bình luận"}
                </span>
              </div>
          }
          { 
            this.state.comments.length !== 0 &&
              this.state.comments.map(comment => {
                return (
                  <div className="comment">
                    {comment.username + " "} 
                    <span>{comment.content}</span>
                  </div>
                );
              }).slice(
                0, 
                this.state.showComment === true ? this.state.comments.length : 2
              )
          }
        </div>
        <div className="input-comment" >
          <input 
            type="text" 
            placeholder="Thêm bình luận..."
            value={this.state.newComment}
            onChange={(e) => this.onChange(e)}
            onKeyUp={(e) => this.onKeyUp(e, post.id) } 
          />
        </div>
      </div>
    );
  }
}