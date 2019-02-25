import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Header from './header';
import SearchInput from './searchinput';
import Footer from './footer';
import templeData from './templeData';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Header/>
          <SearchInput temples={templeData}/>
          <Footer/>
      </div>
    );
  }
}