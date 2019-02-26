import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Header from './header';
import SearchInput from './searchinput';
import Footer from './footer';
import templeData from './templeData';
import PropTypes from 'prop-types';
import Popular from './components/Popular';

export default class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}