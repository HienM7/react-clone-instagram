import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SideBar from './components/SideBar';
import { Container } from 'reactstrap';
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
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

export default App;
