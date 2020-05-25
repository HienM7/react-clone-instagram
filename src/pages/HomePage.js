import React, { Component } from 'react';

import './css/HomePage.css';
import Card from "../components/Card";
import Header from "../components/Header"

export default class extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <div className="content" >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}