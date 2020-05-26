import React, { Component } from 'react';

import axios from 'axios';

import './css/HomePage.css';
import Card from "../components/Card";
import Header from "../components/Header"
import PostStore from "../stores/PostStore";

export default class extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      listPost: PostStore.posts
    }
  }
  
  async componentDidMount() {
    try {
      const res = await axios.get("https://hilarious-pointed-taker.glitch.me/api/posts/get");
      const postData = res.data;
      PostStore.posts = postData;
      this.setState({
        listPost: postData
      });
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="content" >
          {
            this.state.listPost.map(item => {
              return (
                <Card post={item} />
              );
            })
          }
        </div>
      </div>
    );
  }
}